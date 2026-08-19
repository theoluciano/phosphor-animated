/**
 * Does every curated icon exist, and does it map cleanly across weights?
 *
 * Run before authoring choreography — a name typo or a quarantined icon is far
 * cheaper to find here than after an animation has been written against it.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ICONS } from "./curated.ts";

const ROOT = join(import.meta.dirname, "..");
const maps = JSON.parse(readFileSync(join(ROOT, "data", "generated", "part-maps.json"), "utf8"));

const missing: string[] = [];
const quarantined: { name: string; weights: string; reason: string }[] = [];
const remapped: string[] = [];
const clean: string[] = [];

for (const { name } of ICONS) {
  if (!existsSync(join(ROOT, "data", "raw", "regular", `${name}.svg`))) {
    missing.push(name);
    continue;
  }
  const m = maps[name];
  if (!m) { missing.push(name); continue; }

  if (!m.safe) {
    const weights = Object.keys(m.failed);
    quarantined.push({ name, weights: weights.join(","), reason: m.failed[weights[0]][0] });
  } else if (Object.values(m.maps).some((mm) => (mm as (number | null)[]).some((v, i) => v !== i))) {
    remapped.push(name);
  } else {
    clean.push(name);
  }
}

console.log(`\nCurated set — ${ICONS.length} icons\n${"=".repeat(52)}`);
console.log(`  clean (identity map)     : ${clean.length}`);
console.log(`  clean (needs remap)      : ${remapped.length}`);
console.log(`  QUARANTINED              : ${quarantined.length}`);
console.log(`  MISSING / bad name       : ${missing.length}`);

if (missing.length) console.log(`\n  missing:\n    ${missing.join(", ")}`);
if (remapped.length) console.log(`\n  remapped (fine, matcher handles it):\n    ${remapped.join(", ")}`);
if (quarantined.length) {
  console.log(`\n  quarantined:`);
  for (const q of quarantined) console.log(`    ${q.name.padEnd(22)} [${q.weights}] ${q.reason}`);
}
console.log();
