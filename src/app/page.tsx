import * as React from "react";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Gallery } from "@/components/site/gallery";
import { Footer } from "@/components/site/footer";
import type { IconMeta } from "@/components/site/icon-card";
import metadata from "../../data/generated/metadata.json";

const REGISTRY_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://phosphor-animated.com"
).replace(/\/$/, "");

/*
 * The hero's install line rotates through these, so it reads as "any icon works
 * this way" rather than as a fact about the bell. Short names on purpose — the
 * command must not outgrow its box. Filtered against the registry below so a
 * renamed icon drops out rather than shipping an install command that 404s.
 */
const ROTATION = ["bell", "heart", "rocket", "sparkle", "confetti", "trash", "star", "cloud"];

/** Category order follows the curated list, not alphabetical. */
function orderedCategories(icons: IconMeta[]): string[] {
  const seen: string[] = [];
  for (const icon of icons) if (!seen.includes(icon.category)) seen.push(icon.category);
  return seen;
}

export default function Page() {
  const icons = metadata as IconMeta[];
  const categories = orderedCategories(icons);

  const rotation = ROTATION.filter((name) => icons.some((i) => i.name === name));
  const commands = (rotation.length ? rotation : [icons[0].name]).map(
    (name) => `npx shadcn@latest add "${REGISTRY_URL}/r/${name}.json"`,
  );

  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Nav />

      <Hero count={icons.length} command={commands} />

      {/* The grid is the only thing that breaks the measure; it runs to both edges. */}
      <main className="flex-1">
        <Gallery icons={icons} categories={categories} registryUrl={REGISTRY_URL} />
      </main>

      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Footer />
      </div>
    </div>
  );
}
