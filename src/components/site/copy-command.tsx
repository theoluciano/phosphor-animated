"use client";

import * as React from "react";
import { useReducedMotion } from "motion/react";
import { Copy } from "@/registry/icons/copy";
import { Check } from "@/registry/icons/check";

/** How long each command stays up before the next one takes its place. */
const SWAP_MS = 3200;

/**
 * A shell command with a copy button. Used in the hero and the usage page.
 *
 * Pass an array to rotate through several — the hero does this so the line reads
 * as "any icon, this way" rather than as a fact about the bell. Rotation stops
 * while the pointer or focus is inside, so the command can never change out from
 * under someone reaching for the copy button, and never starts at all under
 * prefers-reduced-motion.
 */
export function CopyCommand({ command }: { command: string | string[] }) {
  const list = React.useMemo(
    () => (Array.isArray(command) ? command : [command]),
    [command],
  );

  const [index, setIndex] = React.useState(0);
  const [held, setHeld] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const timer = React.useRef<number | undefined>(undefined);
  const reduced = useReducedMotion();

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  React.useEffect(() => {
    if (list.length < 2 || held || reduced) return;
    const id = window.setInterval(
      () => setIndex((n) => (n + 1) % list.length),
      SWAP_MS,
    );
    return () => window.clearInterval(id);
  }, [list.length, held, reduced]);

  const current = list[index] ?? list[0];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(current);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="flex items-center gap-2 rounded-xl border border-line bg-surface p-1.5 pl-4"
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      {/*
        min-w-0 is load-bearing: a flex child defaults to min-width:auto, so this
        nowrap command would refuse to shrink below its own width and push the whole
        page into horizontal overflow on narrow screens.
      */}
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-[13px] text-ink">
        <span className="select-none text-ink-muted">$ </span>
        {/* Keyed so each swap replays the fade; without it the text just pops. */}
        <span key={current} className="command-swap">
          {current}
        </span>
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy command"}
        className="
          inline-flex size-9 shrink-0 items-center justify-center rounded-lg
          text-ink-muted transition hover:bg-surface-2 hover:text-ink
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
        "
      >
        {copied ? <Check size={16} trigger="none" /> : <Copy size={16} trigger="none" />}
      </button>
    </div>
  );
}
