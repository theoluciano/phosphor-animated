/**
 * Vendors Phosphor's raw stroke sources into data/raw.
 *
 * The npm package ships only `assets/` — flattened, outlined single paths, which
 * have no separate parts to animate and no stroke to draw. The GitHub repo also
 * carries `raw/`, where each icon is still real stroked geometry with its parts
 * intact. That is what every later step reads, so it is fetched from there.
 *
 * One tarball rather than ~9000 requests.
 */
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const RAW = join(ROOT, "data", "raw");
const TARBALL = "https://github.com/phosphor-icons/core/archive/refs/heads/main.tar.gz";
const LICENSE_URL = "https://raw.githubusercontent.com/phosphor-icons/core/main/LICENSE";
// Fill is extracted with the rest but unused: it is one merged shape with no
// separate parts and no strokes to draw, so it cannot share the choreography.
const WEIGHTS = ["thin", "light", "regular", "bold", "duotone"];

const force = process.argv.includes("--force");

if (existsSync(join(RAW, "regular")) && !force) {
  const n = readdirSync(join(RAW, "regular")).length;
  console.log(`data/raw already present (${n} icons). Use --force to refetch.`);
  process.exit(0);
}

const tmp = join(ROOT, "data", ".phosphor-core.tar.gz");
console.log("fetching phosphor-icons/core …");
execFileSync("curl", ["-sL", TARBALL, "-o", tmp], { stdio: "inherit" });

rmSync(RAW, { recursive: true, force: true });
mkdirSync(RAW, { recursive: true });

// BSD tar (macOS) and GNU tar both accept a trailing path pattern here.
execFileSync("tar", ["-xzf", tmp, "-C", RAW, "--strip-components=2", "*/raw/*"], {
  stdio: "inherit",
});
rmSync(tmp, { force: true });

console.log("fetching license …");
const license = await fetch(LICENSE_URL).then((r) => r.text());
writeFileSync(join(ROOT, "data", "PHOSPHOR-LICENSE.txt"), license);

let total = 0;
for (const w of WEIGHTS) {
  const dir = join(RAW, w);
  if (!existsSync(dir)) throw new Error(`missing weight directory: ${w}`);
  const n = readdirSync(dir).filter((f) => f.endsWith(".svg")).length;
  if (n === 0) throw new Error(`no icons found for weight: ${w}`);
  total += n;
  console.log(`  ${w.padEnd(9)} ${n}`);
}
console.log(`\n${total} SVGs across ${WEIGHTS.length} weights -> data/raw\n`);
