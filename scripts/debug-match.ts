/** Print per-part boxes and the full distance matrix for one icon/weight pair. */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseRawSvg, type El } from "./lib/svg.ts";
import { box, distance } from "./lib/geometry.ts";

const [name, weight] = process.argv.slice(2);
const RAW = join(import.meta.dirname, "..", "data", "raw");
const read = (w: string, n: string) =>
  parseRawSvg(readFileSync(join(RAW, w, w === "regular" ? `${n}.svg` : `${n}-${w}.svg`), "utf8"));

const A = read("regular", name);
let B = read(weight, name);
if (weight === "duotone") B = B.filter((e) => e.attrs.opacity === undefined);

const show = (els: El[], label: string) => {
  console.log(`\n${label}`);
  els.forEach((e, i) => {
    const b = box(e);
    const geo = e.attrs.d ?? e.attrs.points ?? JSON.stringify(e.attrs);
    console.log(
      `  [${i}] ${e.tag.padEnd(9)} c=(${b.cx.toFixed(0)},${b.cy.toFixed(0)}) ` +
        `wh=(${b.w.toFixed(0)}x${b.h.toFixed(0)}) n=${b.n}  ${geo.slice(0, 70)}`,
    );
  });
};

show(A, `REGULAR (${A.length} parts)`);
show(B, `${weight.toUpperCase()} (${B.length} parts)`);

console.log(`\ndistance matrix (rows=regular, cols=${weight})`);
process.stdout.write("      " + B.map((_, j) => `[${j}]`.padStart(8)).join("") + "\n");
A.forEach((_, i) => {
  const row = B.map((_, j) => distance(A[i], B[j]).toFixed(1).padStart(8)).join("");
  process.stdout.write(`  [${i}]${row}\n`);
});
console.log();
