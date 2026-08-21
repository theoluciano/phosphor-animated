"use client";

import * as React from "react";
import { IconCard, type IconMeta } from "./icon-card";
import { Dock, type SetOption } from "./dock";
import type { Weight } from "@/registry/icons/animated-icon";

/**
 * The full useful range: 16 is where these actually get used in a toolbar, 96 is
 * where you can see whether a curve is right. The old ceiling was 40.
 */
const SIZES = [16, 20, 24, 32, 48, 64, 80, 96] as const;
const DEFAULT_SIZE = 64;

/** Matches on name and category, so "nav" finds the navigation set. */
function matches(icon: IconMeta, query: string) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    icon.name.includes(q) ||
    icon.category.toLowerCase().includes(q) ||
    icon.description.toLowerCase().includes(q)
  );
}

export function Gallery({
  icons,
  categories,
  registryUrl,
}: {
  icons: IconMeta[];
  categories: string[];
  registryUrl: string;
}) {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string | null>(null);
  const [weight, setWeight] = React.useState<Weight>("regular");
  const [size, setSize] = React.useState<number>(DEFAULT_SIZE);
  const [loop, setLoop] = React.useState(false);

  const visible = React.useMemo(
    () => icons.filter((i) => (!category || i.category === category) && matches(i, query)),
    [icons, category, query],
  );

  const sets = React.useMemo<SetOption[]>(
    () => [
      { name: null, label: "All icons", count: icons.length },
      ...categories.map((c) => ({
        name: c,
        label: c,
        count: icons.filter((i) => i.category === c).length,
      })),
    ],
    [icons, categories],
  );

  /*
   * The dock rides with the grid: up as soon as any of it is on screen, down
   * again once it has all gone past, so it never floats over the footer.
   * The observer watches the section rather than the grid so an empty result
   * still keeps the dock — otherwise a search with no matches would strand you
   * with no way to clear it.
   */
  const section = React.useRef<HTMLElement>(null);
  const [dockUp, setDockUp] = React.useState(false);

  React.useEffect(() => {
    const el = section.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setDockUp(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    /*
     * The hero's fan hangs past the bottom of the header on purpose, and this
     * section's top edge is what cuts it. Both halves of that are needed here: a
     * rotated card paints above plain in-flow content whatever the document
     * order, so the directory needs a stacking position of its own — and a
     * ground of its own, or the card would go on showing through a transparent
     * background. On the section rather than `.icon-grid` so an empty search
     * result gets the same cover.
     */
    <section id="icons" ref={section} className="relative z-10 bg-bg scroll-mt-4">
      {visible.length === 0 ? (
        /*
         * A full viewport of height even when empty. Without it a one-result
         * search collapses the page short enough that the dock — which is nearly
         * full width on a phone — sits over the only match with nowhere to scroll.
         */
        <p className="flex min-h-[70svh] items-center justify-center px-6 text-center text-sm text-ink-muted">
          No icons match “{query}”.
        </p>
      ) : (
        /*
         * Dock height plus its offset. Only the footer sits below the grid now,
         * and it is shorter than the dock is tall, so without this the last row
         * would still be under the dock at the bottom of the scroll. Two values
         * because the dock is one line wide and three lines on a phone.
         */
        <div
          className="icon-grid grid min-h-[70svh] content-start pb-[152px] dock:pb-[104px]"
          style={{
            /*
             * Two floors. The 140px one is the name: below roughly 32px the cell
             * is sized by "microphone-slash" at 12px Plex Mono, not by the icon, so going
             * icon down any further would only start truncating labels. The
             * 33.333% one turns eight columns on a desktop into three on a phone
             * without touching the chosen size — this control is a preview of
             * real pixels, so it must never quietly render something else.
             */
            gridTemplateColumns: `repeat(auto-fill, minmax(min(${Math.max(size + 108, 150)}px, 33.333%), 1fr))`,
          }}
        >
          {visible.map((icon) => (
            <IconCard
              key={icon.name}
              meta={icon}
              weight={weight}
              size={size}
              loop={loop}
              registryUrl={registryUrl}
            />
          ))}
        </div>
      )}

      <Dock
        visible={dockUp}
        query={query}
        onQuery={setQuery}
        sets={sets}
        set={category}
        onSet={setCategory}
        weight={weight}
        onWeight={setWeight}
        size={size}
        onSize={setSize}
        sizes={SIZES}
        loop={loop}
        onLoop={setLoop}
        matched={visible.length}
        total={icons.length}
      />
    </section>
  );
}
