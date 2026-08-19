/**
 * Does geometric part matching actually resolve the cross-weight drift?
 *
 * Reports, for every icon, whether each non-regular weight's parts can be mapped
 * back to regular unambiguously. Icons that map cleanly are safe to animate with a
 * single role-based choreography; the rest are quarantined so a curated icon is
 * never chosen blind.
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { parseRawSvg, shape, type El } from "./lib/svg.ts";
import { matchParts, isIdentity } from "./lib/geometry.ts";

const ROOT = join(import.meta.dirname, "..");
const RAW = join(ROOT, "data", "raw");
const OTHER = ["thin", "light", "bold", "duotone", "fill"] as const;

const file = (w: string, name: string) =>
  join(RAW, w, w === "regular" ? `${name}.svg` : `${name}-${w}.svg`);

/** Duotone's filled backdrop is decoration, not a part; it never receives choreography. */
const splitDuotone = (els: El[]) => ({
  backdrop: els.filter((e) => e.attrs.opacity !== undefined),
  strokes: els.filter((e) => e.attrs.opacity === undefined),
});

const names = readdirSync(join(RAW, "regular"))
  .filter((f) => f.endsWith(".svg"))
  .map((f) => f.replace(/\.svg$/, ""));

type Report = {
  name: string;
  parts: number;
  maps: Record<string, (number | null)[]>;
  identity: string[];
  remapped: string[];
  failed: Record<string, string[]>;
  fillParts: number;
};

const reports: Report[] = [];
let cleanLine = 0, cleanAll = 0, needRemap = 0;

for (const name of names) {
  const regular = parseRawSvg(readFileSync(file("regular", name), "utf8"));
  const r: Report = {
    name, parts: regular.length, maps: {}, identity: [], remapped: [], failed: {}, fillParts: 0,
  };

  for (const w of OTHER) {
    let els = parseRawSvg(readFileSync(file(w, name), "utf8"));
    if (w === "duotone") els = splitDuotone(els).strokes;
    if (w === "fill") { r.fillParts = els.length; continue; } // fill is authored separately

    const m = matchParts(regular, els);
    r.maps[w] = m.map;
    if (!m.ok) r.failed[w] = m.issues;
    else if (isIdentity(m.map)) r.identity.push(w);
    else r.remapped.push(w);
  }

  const lineOk = (["thin", "light", "bold"] as const).every((w) => !r.failed[w]);
  const allOk = lineOk && !r.failed.duotone;
  if (lineOk) cleanLine++;
  if (allOk) cleanAll++;
  if (allOk && r.remapped.length) needRemap++;

  reports.push(r);
}

const pct = (n: number) => `${((n / names.length) * 100).toFixed(1)}%`;

console.log(`\nPart-matching validation — ${names.length} icons\n${"=".repeat(52)}`);
console.log(`  line weights map cleanly        : ${cleanLine} (${pct(cleanLine)})`);
console.log(`  line + duotone map cleanly      : ${cleanAll} (${pct(cleanAll)})`);
console.log(`  ...of which need a non-identity map: ${needRemap} (${pct(needRemap)})`);
console.log(`  quarantined (ambiguous somewhere): ${names.length - cleanAll} (${pct(names.length - cleanAll)})`);

const byWeight: Record<string, number> = {};
for (const r of reports) for (const w of Object.keys(r.failed)) byWeight[w] = (byWeight[w] ?? 0) + 1;
console.log(`\n  failures by weight:`);
for (const [w, n] of Object.entries(byWeight).sort((a, b) => b[1] - a[1]))
  console.log(`    ${w.padEnd(9)}: ${n} (${pct(n)})`);

console.log(`\n  sample quarantined icons:`);
for (const r of reports.filter((r) => Object.keys(r.failed).length).slice(0, 6)) {
  const w = Object.keys(r.failed)[0];
  console.log(`    ${r.name} [${w}] — ${r.failed[w][0]}`);
}

console.log(`\n  sample remapped (matcher fixed a reorder):`);
for (const r of reports.filter((r) => !Object.keys(r.failed).length && r.remapped.length).slice(0, 6)) {
  const w = r.remapped[0];
  console.log(`    ${r.name.padEnd(24)} ${w.padEnd(8)} map=[${r.maps[w].join(",")}]`);
}

mkdirSync(join(ROOT, "data", "generated"), { recursive: true });
writeFileSync(
  join(ROOT, "data", "generated", "part-maps.json"),
  JSON.stringify(
    Object.fromEntries(reports.map((r) => [r.name, {
      parts: r.parts, maps: r.maps, failed: r.failed, fillParts: r.fillParts,
      safe: Object.keys(r.failed).length === 0,
    }])),
    null, 2,
  ),
);
console.log(`\n  wrote data/generated/part-maps.json\n`);
