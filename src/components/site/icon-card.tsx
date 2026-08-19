"use client";

import * as React from "react";
import { Tooltip } from "./tooltip";
import * as Icons from "@/registry/icons";
import type { AnimatedIconHandle, AnimatedIconProps, Weight } from "@/registry/icons/animated-icon";
import { Copy } from "@/registry/icons/copy";
import { TerminalWindow } from "@/registry/icons/terminal-window";
import { Check } from "@/registry/icons/check";

type IconComponent = React.ForwardRefExoticComponent<
  AnimatedIconProps & React.RefAttributes<AnimatedIconHandle>
>;

const registry = Icons as unknown as Record<string, IconComponent>;

export type IconMeta = {
  name: string;
  component: string;
  category: string;
  description: string;
};

/** Milliseconds a copied-confirmation stays up. */
const CONFIRM_MS = 1600;

function useCopy() {
  const [copied, setCopied] = React.useState<string | null>(null);
  const timer = React.useRef<number | undefined>(undefined);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = React.useCallback(async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(null), CONFIRM_MS);
    } catch {
      setCopied(null);
    }
  }, []);

  return { copied, copy };
}

function ActionButton({
  label,
  onClick,
  children,
}: {
  label: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const className = `
    inline-flex size-[30px] items-center justify-center rounded-lg border border-line
    bg-surface text-ink-muted transition
    hover:border-line-strong hover:text-ink hover:bg-surface-2
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
  `;

  return (
    <Tooltip label={label}>
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    </Tooltip>
  );
}

export function IconCard({
  meta,
  weight,
  size,
  loop,
  registryUrl,
}: {
  meta: IconMeta;
  weight: Weight;
  size: number;
  /** Keep repeating while hovered, rather than playing through once. */
  loop: boolean;
  registryUrl: string;
}) {
  const Icon = registry[meta.component];
  const { copied, copy } = useCopy();
  const [busy, setBusy] = React.useState(false);
  const icon = React.useRef<AnimatedIconHandle>(null);
  const [hovered, setHovered] = React.useState(false);

  const itemUrl = `${registryUrl}/r/${meta.name}.json`;
  const command = `npx shadcn@latest add "${itemUrl}"`;

  // The component source lives in the registry JSON rather than the bundle — 320KB
  // of source has no business being shipped to everyone browsing the gallery.
  const copySource = async () => {
    setBusy(true);
    try {
      const res = await fetch(`/r/${meta.name}.json`);
      const item = (await res.json()) as { files: { content: string }[] };
      await copy("tsx", item.files[0].content);
    } catch {
      /* leave the button unconfirmed; nothing was copied */
    } finally {
      setBusy(false);
    }
  };

  if (!Icon) return null;

  return (
    <div
      className="
        icon-cell group relative flex flex-col items-center justify-center gap-4
        px-3 py-7 transition-colors hover:bg-surface
      "
      /*
       * The whole cell is the target, not the glyph. A 24px icon is a small thing
       * to ask someone to hit, and the cell already lights up and swaps in its
       * actions on hover — the animation belongs to that same gesture. So the icon
       * gives up its own trigger and the cell plays it; keyboard users arriving at
       * the action buttons get it too, which is what group-focus-within does for
       * the rest of the cell.
       *
       * Two ways to run, one gesture. Loop off, the handle plays the animation
       * through once. Loop on, the trigger takes over for as long as the pointer
       * stays: `loop` repeats, and swapping it in per-hover is what keeps that
       * confined to the one cell under the cursor instead of the whole wall.
       * Either way, leaving springs the icon home from wherever it had got to.
       */
      onMouseEnter={() => {
        setHovered(true);
        icon.current?.play();
      }}
      onMouseLeave={() => {
        setHovered(false);
        icon.current?.stop();
      }}
      onFocus={() => {
        setHovered(true);
        icon.current?.play();
      }}
      onBlur={() => {
        setHovered(false);
        icon.current?.stop();
      }}
    >
      <Icon
        ref={icon}
        weight={weight}
        size={size}
        trigger={loop && hovered ? "loop" : "none"}
        className="text-ink"
        aria-label={meta.name}
      />

      {/*
       * One row, two occupants. The name sits here at rest and the actions take
       * its place on hover — same height either way, so moving across the grid
       * never nudges a single cell.
       */}
      <div className="relative flex h-[30px] w-full items-center justify-center">
        <p
          className="
            max-w-full truncate px-1 font-mono text-[12px] leading-[16px] text-ink-muted
            transition-opacity group-hover:opacity-0 group-focus-within:opacity-0
          "
          title={meta.description}
        >
          {meta.name}
        </p>

        <div
          className="
            absolute inset-0 flex items-center justify-center gap-1.5
            opacity-0 transition-opacity duration-150
            group-hover:opacity-100 group-focus-within:opacity-100
          "
        >
          <ActionButton
            label={copied === "tsx" ? "Copied" : <>Copy <code className="rounded bg-white/15 px-1 py-0.5">.tsx</code> code</>}
            onClick={copySource}
          >
            {copied === "tsx" ? (
              <Check size={15} trigger="none" />
            ) : (
              <Copy size={15} trigger="none" className={busy ? "opacity-50" : undefined} />
            )}
          </ActionButton>

          <ActionButton
            label={copied === "cli" ? "Copied" : <>Copy <code className="rounded bg-white/15 px-1 py-0.5">shadcn</code> install command</>}
            onClick={() => copy("cli", command)}
          >
            {copied === "cli" ? <Check size={15} trigger="none" /> : <TerminalWindow size={15} trigger="none" />}
          </ActionButton>
        </div>
      </div>
    </div>
  );
}
