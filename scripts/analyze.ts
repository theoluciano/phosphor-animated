/**
 * Turn raw Phosphor sources into the build IR that codegen consumes.
 *
 * Per icon this decides, for each of the five weights, how that weight relates to
 * the regular drawing — because that relationship is what determines which
 * choreography can drive it:
 *
 *   identical  geometry matches regular exactly; only stroke-width changes.
 *   remapped   same parts, but reordered and/or nudged. Stroke choreography runs
 *              through the part map.
 *   partial    some parts have no counterpart — Phosphor genuinely drops detail at
 *              heavier weights (chat-teardrop-dots loses a dot at bold, because
 *              r=12 circles would fuse at stroke-width 24). Stroke choreography
 *              still runs; steps addressing an absent part are skipped.
 *   divergent  no useful correspondence — true of duotone for a handful of icons
 *              where Phosphor redrew it as a merged shape rather than deriving it.
 *              Per-part choreography is skipped at those weights.
 *
 * Nothing here guesses: classification comes from the geometric matcher, and an
 * icon whose parts cannot be resolved confidently is recorded as such rather than
 * being quietly mapped wrong.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parseRawSvg, type El } from "./lib/svg.ts";
import { matchParts, isIdentity } from "./lib/geometry.ts";
import { ICONS } from "./curated.ts";

const ROOT = join(import.meta.dirname, "..");
const RAW = join(ROOT, "data", "raw");
const OUT = join(ROOT, "data", "generated");

const rawPath = (w: string, n: string) =>
  join(RAW, w, w === "regular" ? `${n}.svg` : `${n}-${w}.svg`);

const read = (w: string, n: string) => parseRawSvg(readFileSync(rawPath(w, n), "utf8"));

export type WeightKind = "base" | "identical" | "remapped" | "partial" | "divergent";

export type WeightInfo = {
  kind: WeightKind;
  /** Present when geometry differs from regular and must be embedded separately. */
  geometry?: El[];
  /** map[i] = index into this weight's geometry for regular part i (null = absent). */
  map?: (number | null)[];
  /** Duotone's filled backdrop layer, which carries no choreography. */
  backdrop?: El[];
  notes?: string[];
};

export type IconIR = {
  name: string;
  category: string;
  parts: number;
  geometry: El[]; // regular — the drawing choreography is authored against
  weights: Record<string, WeightInfo>;
  /** Weights whose parts do not map, so per-part choreography is skipped there. */
  divergentWeights: string[];
};

const sameGeometry = (a: El[], b: El[]) => JSON.stringify(a) === JSON.stringify(b);

/** A target this much simpler than the source has been redrawn, not derived. */
function looksDivergent(source: El[], target: El[], matched: number): boolean {
  if (target.length === 1 && source.length > 2) return true;
  return matched < Math.ceil(source.length / 2);
}

const icons: IconIR[] = [];
const problems: string[] = [];

for (const { name, category } of ICONS) {
  if (!existsSync(rawPath("regular", name))) {
    problems.push(`${name}: missing source`);
    continue;
  }

  const regular = read("regular", name);
  const ir: IconIR = {
    name, category, parts: regular.length, geometry: regular, weights: {}, divergentWeights: [],
  };
  ir.weights.regular = { kind: "base" };

  for (const w of ["thin", "light", "bold", "duotone"]) {
    let els = read(w, name);
    let backdrop: El[] | undefined;

    if (w === "duotone") {
      backdrop = els.filter((e) => e.attrs.opacity !== undefined);
      els = els.filter((e) => e.attrs.opacity === undefined);
    }

    if (sameGeometry(regular, els)) {
      ir.weights[w] = { kind: "identical", ...(backdrop?.length ? { backdrop } : {}) };
      continue;
    }

    const m = matchParts(regular, els);
    const matched = m.map.filter((v) => v !== null).length;

    if (looksDivergent(regular, els, matched)) {
      ir.weights[w] = {
        kind: "divergent", geometry: els, ...(backdrop?.length ? { backdrop } : {}),
        notes: [`redrawn: ${regular.length} parts -> ${els.length}`],
      };
      ir.divergentWeights.push(w);
      continue;
    }

    const unresolved = m.issues.filter((i) => i.includes("ambiguous"));
    if (unresolved.length) {
      problems.push(`${name} [${w}]: ${unresolved[0]}`);
      ir.weights[w] = {
        kind: "divergent", geometry: els, ...(backdrop?.length ? { backdrop } : {}),
        notes: ["ambiguous part match — per-part choreography skipped at this weight"],
      };
      ir.divergentWeights.push(w);
      continue;
    }

    ir.weights[w] = {
      kind: matched < regular.length ? "partial" : isIdentity(m.map) ? "remapped" : "remapped",
      geometry: els,
      map: m.map,
      ...(backdrop?.length ? { backdrop } : {}),
      ...(matched < regular.length
        ? { notes: [`${regular.length - matched} part(s) absent at this weight`] }
        : {}),
    };
  }

  icons.push(ir);
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "icons.json"), JSON.stringify(icons, null, 2));

const tally: Record<string, number> = {};
for (const i of icons) for (const [w, info] of Object.entries(i.weights)) {
  const k = `${w}:${info.kind}`;
  tally[k] = (tally[k] ?? 0) + 1;
}

console.log(`\nAnalyzed ${icons.length} curated icons -> data/generated/icons.json\n${"=".repeat(56)}`);
for (const w of ["thin", "light", "bold", "duotone"]) {
  const parts = Object.entries(tally)
    .filter(([k]) => k.startsWith(`${w}:`))
    .map(([k, n]) => `${k.split(":")[1]}=${n}`)
    .join("  ");
  console.log(`  ${w.padEnd(9)} ${parts}`);
}
const divergent = icons.filter((i) => i.divergentWeights.length > 0);
console.log(`\n  icons with a divergent weight (part choreography skipped there): ${divergent.length}`);
if (divergent.length) console.log(`    ${divergent.map((i) => i.name).join(", ")}`);
if (problems.length) {
  console.log(`\n  ${problems.length} ambiguity fallback(s):`);
  for (const p of problems) console.log(`    ${p}`);
}
console.log();
