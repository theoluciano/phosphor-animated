/**
 * Emits the shadcn registry served from /r.
 *
 * One JSON per icon, each carrying its component source inline, plus a base item
 * holding the shared runtime. Icons declare the runtime as a registry dependency,
 * so `shadcn add bell` pulls in animated-icon.tsx automatically and installing a
 * second icon reuses it rather than duplicating it.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const OUT = join(ROOT, "public", "r");
const SRC = join(ROOT, "src", "registry", "icons");

const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://phosphor-animated.com").replace(/\/$/, "");
const ITEM_SCHEMA = "https://ui.shadcn.com/schema/registry-item.json";
const REGISTRY_SCHEMA = "https://ui.shadcn.com/schema/registry.json";

/** Where installed files land in the consumer's project. */
const TARGET_DIR = "components/icons";
const RUNTIME = "animated-icon";

type Meta = { name: string; component: string; category: string; description: string };
const metadata: Meta[] = JSON.parse(
  readFileSync(join(ROOT, "data", "generated", "metadata.json"), "utf8"),
);

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const url = (name: string) => `${SITE}/r/${name}.json`;

type RegistryItem = {
  $schema?: string;
  name: string;
  type: string;
  title: string;
  description: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: { path: string; type: string; target: string; content: string }[];
  meta?: Record<string, unknown>;
};

const runtimeItem: RegistryItem = {
  $schema: ITEM_SCHEMA,
  name: RUNTIME,
  type: "registry:component",
  title: "Animated Icon runtime",
  description:
    "Shared runtime for phosphor-animated icons: weight resolution, triggers, and reduced-motion handling. Installed automatically with any icon.",
  dependencies: ["motion"],
  files: [
    {
      path: `${TARGET_DIR}/${RUNTIME}.tsx`,
      type: "registry:component",
      target: `${TARGET_DIR}/${RUNTIME}.tsx`,
      content: readFileSync(join(SRC, `${RUNTIME}.tsx`), "utf8"),
    },
  ],
};

const items: RegistryItem[] = [runtimeItem];

for (const m of metadata) {
  items.push({
    $schema: ITEM_SCHEMA,
    name: m.name,
    type: "registry:component",
    title: m.component,
    description: m.description,
    dependencies: ["motion"],
    registryDependencies: [url(RUNTIME)],
    files: [
      {
        path: `${TARGET_DIR}/${m.name}.tsx`,
        type: "registry:component",
        target: `${TARGET_DIR}/${m.name}.tsx`,
        content: readFileSync(join(SRC, `${m.name}.tsx`), "utf8"),
      },
    ],
    meta: { category: m.category, component: m.component },
  });
}

for (const item of items) {
  writeFileSync(join(OUT, `${item.name}.json`), JSON.stringify(item, null, 2));
}

// Index. Items are listed without their file contents to keep it small — the CLI
// follows the per-item URLs for the actual source.
writeFileSync(
  join(OUT, "registry.json"),
  JSON.stringify(
    {
      $schema: REGISTRY_SCHEMA,
      name: "phosphor-animated",
      homepage: SITE,
      items: items.map(({ files, ...rest }) => ({
        ...rest,
        files: files.map((f) => ({ path: f.path, type: f.type, target: f.target })),
      })),
    },
    null,
    2,
  ),
);

const bytes = items.reduce((n, i) => n + i.files[0].content.length, 0);
console.log(`\nRegistry -> public/r/`);
console.log(`  ${items.length} items (${metadata.length} icons + runtime)`);
console.log(`  base URL: ${SITE}`);
console.log(`  install:  npx shadcn@latest add "${url("bell")}"`);
console.log(`  ${(bytes / 1024).toFixed(0)} KB of component source\n`);
