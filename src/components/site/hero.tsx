import * as React from "react";
import { CopyCommand } from "./copy-command";
import { HeroCards } from "./hero-cards";

/**
 * Copy on the left, three mock interfaces fanned off the right edge.
 *
 * The showcase row that used to live here was cut for competing with the grid —
 * a second, smaller set of the same icons directly above the thing it was
 * advertising. The fan makes a different argument: not "here are some icons that
 * move" but "here is a screen, and every part of it came out of this set". That
 * doesn't compete with the wall below, because the wall is a catalogue and this
 * is the product.
 *
 * The cards overflow the container on purpose and are clipped by the header
 * rather than by their own column, so on a laptop the checkout runs off the edge
 * of the screen instead of the fan being squeezed to fit. Hence the clip here:
 * without it the overflow widens the page and the whole document scrolls
 * sideways. On the x axis only, and `clip` rather than `hidden` — the same two
 * reasons as `.icon-grid`, plus one more: the fan deliberately hangs past the
 * bottom of the header so the grid's top edge cuts it, and `overflow-hidden`
 * would cut it here instead.
 */
export function Hero({ command, count }: { command: string | string[]; count: number }) {
  return (
    <header className="overflow-x-clip">
      <div
        className="
          mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 pt-16
          md:px-6 lg:flex-row lg:items-start lg:gap-12 lg:pb-16
        "
      >
        <div
          className="
            flex w-full max-w-2xl flex-col items-center gap-6 text-center
            lg:w-[460px] lg:shrink-0 lg:items-start lg:pt-14 lg:text-left
          "
        >
          <h1 className="text-[28px] leading-[40px] font-semibold text-ink md:text-[40px] md:leading-[52px]">
            Phosphor icons, brought to life.
          </h1>

          <p className="max-w-xl text-base leading-[24px] text-ink-muted">
            {count} hand-animated{" "}
            <a
              href="https://phosphoricons.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent"
            >
              Phosphor
            </a>{" "}
            icons, installed as source through the shadcn CLI. Hover anything below
            to see it move.
          </p>

          {/* Full width of its column. On a laptop that is narrower than the
              longest command, which now scrolls inside the box the way it already
              does on a phone — the copy button is what people actually use. */}
          <div className="mt-2 w-full">
            <CopyCommand command={command} />
          </div>
        </div>

        <HeroCards />
      </div>
    </header>
  );
}
