"use client";

import * as React from "react";
import { CopyCommand } from "./copy-command";
import { Bell } from "@/registry/icons/bell";
import { Trash } from "@/registry/icons/trash";
import { Heart } from "@/registry/icons/heart";
import { Spinner } from "@/registry/icons/spinner";
import type { AnimatedIconHandle, Trigger } from "@/registry/icons/animated-icon";

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-line bg-surface p-4 font-mono text-[13px] leading-relaxed text-ink">
      <code>{children}</code>
    </pre>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-line bg-surface px-5 py-4">
      {children}
      <span className="font-mono text-[12px] leading-[16px] text-ink-muted">{label}</span>
    </div>
  );
}

/** Live demo of the imperative handle — the reason `trigger="none"` exists. */
function RefDemo() {
  const ref = React.useRef<AnimatedIconHandle>(null);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="rounded-xl border border-line bg-surface px-5 py-4">
        <Bell ref={ref} size={34} trigger="none" />
      </div>
      <button
        type="button"
        onClick={() => ref.current?.play()}
        className="rounded-lg bg-accent px-3.5 py-2 text-sm text-accent-ink transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        play()
      </button>
      <button
        type="button"
        onClick={() => ref.current?.stop()}
        className="rounded-lg border border-line bg-surface px-3.5 py-2 text-sm text-ink transition hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        stop()
      </button>
    </div>
  );
}

export function Docs({ registryUrl }: { registryUrl: string }) {
  const triggers: Trigger[] = ["hover", "click", "in-view", "loop"];

  return (
    <section className="pb-16 pt-10 md:pt-14">
      <h1 className="text-[28px] leading-[40px] font-semibold text-ink md:text-[40px] md:leading-[52px]">Usage</h1>

      {/*
        [&>*]:min-w-0 — grid items default to min-width:auto, so a column containing
        a long unwrapped code line refuses to shrink below that line's width and
        overflows the page. The pre blocks scroll on their own once it can.
      */}
      <div className="mt-10 grid gap-12 lg:grid-cols-2 [&>*]:min-w-0">
        <div>
          <h3 className="text-sm font-semibold text-ink">Install</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Each icon installs into <code className="font-mono text-ink">components/icons/</code> as
            source. The shared runtime comes with it, and is reused by every icon after
            the first.
          </p>
          <div className="mt-4">
            <CopyCommand command={`npx shadcn@latest add "${registryUrl}/r/bell.json"`} />
          </div>
          <div className="mt-4">
            <Code>{`import { Bell } from "@/components/icons/bell";

export function Nav() {
  return <Bell className="size-6" />;
}`}</Code>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Weights</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Five Phosphor weights, from one component. The line weights share a
            single drawing; duotone adds its filled backdrop.
          </p>
          <div className="mt-4">
            <Code>{`<Trash weight="thin" />
<Trash weight="bold" />
<Trash weight="duotone" />`}</Code>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {(["thin", "light", "regular", "bold", "duotone"] as const).map((w) => (
              <Row key={w} label={w}>
                <Trash weight={w} size={30} trigger="loop" speed={0.7} />
              </Row>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Triggers</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Hover by default. Change it with one prop.
          </p>
          <div className="mt-4">
            <Code>{`<Heart />                    // hover
<Heart trigger="click" />
<Heart trigger="in-view" />
<Heart trigger="loop" />`}</Code>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {triggers.map((t) => (
              <Row key={t} label={t}>
                <Heart trigger={t} size={30} />
              </Row>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Control it yourself</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Set <code className="font-mono text-ink">trigger=&quot;none&quot;</code> and drive the
            icon from a ref — for animating on a state change rather than a pointer.
          </p>
          <div className="mt-4">
            <Code>{`const ref = useRef<AnimatedIconHandle>(null);

<Bell ref={ref} trigger="none" />
<button onClick={() => ref.current?.play()}>
  Notify
</button>`}</Code>
          </div>
          <div className="mt-4">
            <RefDemo />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Speed</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            A multiplier on playback rate.
          </p>
          <div className="mt-4">
            <Code>{`<Spinner trigger="loop" speed={2} />`}</Code>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {[0.5, 1, 2].map((s) => (
              <Row key={s} label={`speed={${s}}`}>
                <Spinner trigger="loop" speed={s} size={30} />
              </Row>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Reduced motion</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Every icon reads{" "}
            <code className="font-mono text-ink">prefers-reduced-motion</code> and stays
            still when the system asks it to. Nothing to configure, and nothing to
            remember at each call site.
          </p>
          <h3 className="mt-8 text-sm font-semibold text-ink">Editing an animation</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            The keyframes in an installed icon are ordinary data. Change a number and
            the motion changes — there is nothing to reinstall and nothing pointing back
            at this site.
          </p>
          <div className="mt-4">
            <Code>{`const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: { rotate: [0, 17, -12, 7, 0], origin: [128, 48] },
    1: { rotate: [0, 12, -9, 5, 0], origin: [128, 48] },
  },
};`}</Code>
          </div>
        </div>
      </div>
    </section>
  );
}
