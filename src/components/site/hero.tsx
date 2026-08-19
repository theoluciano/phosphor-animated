import * as React from "react";
import { CopyCommand } from "./copy-command";

/**
 * Centred and deliberately short: one screen, then the wall of icons starts.
 *
 * The old looping showcase row lived here so the animation was visible in the
 * first second without the visitor discovering it. That job now belongs to the
 * grid immediately below — it fills the viewport with icons that move on hover,
 * so a second, smaller set of the same icons directly above it was competing
 * with the thing it was advertising.
 */
export function Hero({ command, count }: { command: string | string[]; count: number }) {
  return (
    <header className="flex flex-col items-center gap-6 px-6 pb-16 pt-20 text-center md:pt-24">
      <h1 className="max-w-4xl text-[28px] leading-[40px] font-semibold text-ink md:text-[40px] md:leading-[52px]">
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

      {/* Wider than the copy above it: the longest command has to fit without
          scrolling, and a fixed box keeps the rotation from resizing the page. */}
      <div className="mt-2 w-full max-w-2xl">
        <CopyCommand command={command} />
      </div>
    </header>
  );
}
