/**
 * Structural survey of the whole Phosphor set.
 *
 * The component design assumes one hand-authored choreography can drive thin,
 * light, regular, bold and duotone, because those weights share element order —
 * choreography addresses parts by index, so if the order ever shifted, an
 * animation authored against regular would move the wrong part at another weight.
 *
 * This measures that assumption across all 1512 icons instead of trusting the
 * handful I spot-checked.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parseRawSvg, signature, shape, STROKE_WIDTH } from "./lib/svg.ts";

const RAW = join(import.meta.dirname, "..", "data", "raw");

const file = (w: string, name: string) =>
  join(RAW, w, w === "regular" ? `${name}.svg` : `${name}-${w}.svg`);

const names = readdirSync(join(RAW, "regular"))
  .filter((f) => f.endsWith(".svg"))
  .map((f) => f.replace(/\.svg$/, ""));

const stats = {
  total: names.length,
  lineShapeMatch: 0,
  lineGeomIdentical: 0,
  boldRedrawn: [] as string[],
  thinLightRedrawn: [] as string[],
  shapeBreak: [] as string[],
  duotoneShapeMatch: 0,
  duotoneOddity: [] as string[],
  fillElementCounts: {} as Record<number, number>,
  missing: [] as string[],
};

for (const name of names) {
  let geoms: Record<string, ReturnType<typeof parseRawSvg>>;
  try {
    geoms = Object.fromEntries(
      ["thin", "light", "regular", "bold", "fill", "duotone"].map((w) => [
        w,
        parseRawSvg(readFileSync(file(w, name), "utf8")),
      ]),
    );
  } catch {
    stats.missing.push(name);
    continue;
  }

  const base = geoms.regular;
  const baseShape = shape(base);
  const baseSig = signature(base);

  // --- line weights: does element order hold, and is geometry literally reused? ---
  const lineWeights = ["thin", "light", "bold"];
  const shapesMatch = lineWeights.every((w) => shape(geoms[w]) === baseShape);
  if (shapesMatch) stats.lineShapeMatch++;
  else stats.shapeBreak.push(name);

  const identical: string[] = [];
  const redrawn: string[] = [];
  for (const w of lineWeights) {
    (signature(geoms[w]) === baseSig ? identical : redrawn).push(w);
  }
  if (redrawn.length === 0) stats.lineGeomIdentical++;
  if (redrawn.includes("bold")) stats.boldRedrawn.push(name);
  if (redrawn.some((w) => w === "thin" || w === "light")) stats.thinLightRedrawn.push(name);

  // --- duotone: expected to be the regular strokes + a filled backdrop ---
  const dtStroked = geoms.duotone.filter((e) => e.attrs.opacity === undefined);
  if (shape(dtStroked) === baseShape) stats.duotoneShapeMatch++;
  else stats.duotoneOddity.push(name);

  const n = geoms.fill.length;
  stats.fillElementCounts[n] = (stats.fillElementCounts[n] ?? 0) + 1;
}

const pct = (n: number) => `${((n / stats.total) * 100).toFixed(1)}%`;

console.log(`\nPhosphor structural survey — ${stats.total} icons\n${"=".repeat(52)}`);
console.log(`\nLINE WEIGHTS (thin/light/regular/bold)`);
console.log(`  element order preserved : ${stats.lineShapeMatch}/${stats.total} (${pct(stats.lineShapeMatch)})`);
console.log(`  geometry byte-identical : ${stats.lineGeomIdentical}/${stats.total} (${pct(stats.lineGeomIdentical)})`);
console.log(`  bold redrawn            : ${stats.boldRedrawn.length} (${pct(stats.boldRedrawn.length)})`);
console.log(`  thin/light redrawn      : ${stats.thinLightRedrawn.length} (${pct(stats.thinLightRedrawn.length)})`);
if (stats.shapeBreak.length)
  console.log(`  !! ORDER BREAKS          : ${stats.shapeBreak.length} -> ${stats.shapeBreak.slice(0, 20).join(", ")}`);

console.log(`\nDUOTONE`);
console.log(`  stroke layer matches regular : ${stats.duotoneShapeMatch}/${stats.total} (${pct(stats.duotoneShapeMatch)})`);
if (stats.duotoneOddity.length)
  console.log(`  oddities : ${stats.duotoneOddity.length} -> ${stats.duotoneOddity.slice(0, 20).join(", ")}`);

console.log(`\nFILL (element count distribution)`);
for (const [n, count] of Object.entries(stats.fillElementCounts).sort((a, b) => +a[0] - +b[0]))
  console.log(`  ${String(n).padStart(2)} element(s): ${count} icons (${pct(count)})`);

if (stats.missing.length) console.log(`\nMISSING FILES: ${stats.missing.length} -> ${stats.missing.slice(0, 10).join(", ")}`);
console.log();
