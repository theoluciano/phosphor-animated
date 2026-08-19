/**
 * Human-readable part listing for every curated icon.
 *
 * Choreography addresses parts by their index in the regular drawing, so authoring
 * one requires knowing what part 0 actually is. This prints each part with its
 * position and size on the 256 grid, plus a rough guess at where it sits, so an
 * animation can be written against the real drawing instead of an assumed one.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { box } from "./lib/geometry.ts";
import type { El } from "./lib/svg.ts";

const ROOT = join(import.meta.dirname, "..");
const icons = JSON.parse(readFileSync(join(ROOT, "data", "generated", "icons.json"), "utf8"));

/** Coarse position label — enough to recognise "the lid" or "the clapper". */
function where(cx: number, cy: number): string {
  const v = cy < 96 ? "top" : cy > 160 ? "bottom" : "mid";
  const h = cx < 96 ? "left" : cx > 160 ? "right" : "centre";
  return v === "mid" && h === "centre" ? "centre" : `${v}-${h}`;
}

const lines: string[] = [];
for (const icon of icons) {
  const solidNote = icon.solidWeights.length > 1
    ? `  [solid choreography also drives: ${icon.solidWeights.filter((w: string) => w !== "fill").join(", ")}]`
    : "";
  lines.push(`\n${icon.name}  (${icon.category})  ${icon.parts} parts${solidNote}`);

  icon.geometry.forEach((el: El, i: number) => {
    const b = box(el);
    const geo = el.attrs.d ?? el.attrs.points ?? "";
    lines.push(
      `  [${i}] ${el.tag.padEnd(9)} ${where(b.cx, b.cy).padEnd(12)} ` +
        `c=(${b.cx.toFixed(0)},${b.cy.toFixed(0)}) ${b.w.toFixed(0)}x${b.h.toFixed(0)}` +
        (geo ? `  ${String(geo).slice(0, 58)}` : `  ${JSON.stringify(el.attrs)}`),
    );
  });

  for (const [w, info] of Object.entries(icon.weights) as [string, { kind: string; notes?: string[] }][]) {
    if (info.kind === "partial" || (info.kind === "divergent" && w !== "fill"))
      lines.push(`      ! ${w}: ${info.kind}${info.notes ? ` — ${info.notes[0]}` : ""}`);
  }
}

const out = join(ROOT, "data", "generated", "parts.txt");
writeFileSync(out, lines.join("\n") + "\n");
console.log(`wrote ${out} (${icons.length} icons, ${lines.length} lines)`);
