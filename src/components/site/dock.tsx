"use client";

import * as React from "react";
import { WEIGHTS, type Weight } from "@/registry/icons/animated-icon";
import { Bell } from "@/registry/icons/bell";
import { MagnifyingGlass } from "@/registry/icons/magnifying-glass";
import { CaretDown } from "@/registry/icons/caret-down";
import { X } from "@/registry/icons/x";
import { Plus } from "@/registry/icons/plus";
import { Minus } from "@/registry/icons/minus";
import { Repeat } from "@/registry/icons/repeat";

export type SetOption = { name: string | null; label: string; count: number };

/**
 * The dock carries every control — search, set, weight, size — and follows the
 * grid down the page, so nothing is ever scrolled out of reach. It is the only
 * chrome on the page; the grid itself has none.
 *
 * Below 900px it wraps to three lines rather than hiding controls behind a sheet.
 * Everything stays one tap away, which is the whole point of the pattern. Each
 * line pairs a left-aligned control with a right-aligned one, so the rows read as
 * columns instead of as a ragged pile.
 */
export function Dock({
  visible,
  query,
  onQuery,
  sets,
  set,
  onSet,
  weight,
  onWeight,
  size,
  onSize,
  sizes,
  loop,
  onLoop,
  matched,
  total,
}: {
  visible: boolean;
  query: string;
  onQuery: (v: string) => void;
  sets: SetOption[];
  set: string | null;
  onSet: (v: string | null) => void;
  weight: Weight;
  onWeight: (w: Weight) => void;
  size: number;
  onSize: (s: number) => void;
  sizes: readonly number[];
  loop: boolean;
  onLoop: (v: boolean) => void;
  matched: number;
  total: number;
}) {
  const filtered = query !== "" || set !== null;
  const current = sets.find((s) => s.name === set) ?? sets[0];

  const index = sizes.indexOf(size);
  const step = (delta: number) => onSize(sizes[index + delta] ?? size);

  return (
    <div
      className={`
        dock pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-4
        transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
      `}
      /* Faded out is not gone — inert keeps invisible controls out of the tab order. */
      inert={!visible}
    >
      <div
        className="
          pointer-events-auto flex w-full max-w-[688px] flex-col gap-2 rounded-2xl
          border border-dock-border bg-dock-bg p-2.5
          shadow-[0_18px_40px_rgba(52,51,48,0.28)]
          dock:max-w-[740px] dock:flex-row dock:items-center dock:gap-3.5
        "
      >
        <label className="flex flex-1 items-center gap-2.5 pl-1">
          <MagnifyingGlass
            size={15}
            trigger="none"
            className={filtered ? "text-highlight" : "text-dock-ink-muted"}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder={`Search ${total} icons…`}
            aria-label="Search icons"
            className="
              min-w-0 flex-1 bg-transparent text-base text-dock-ink outline-none
              placeholder:text-dock-ink-muted dock:text-sm
            "
          />
          {filtered && (
            <span className="shrink-0 font-mono text-[11px] text-dock-ink-muted">
              {matched} of {total}
            </span>
          )}
          {query && (
            <button
              type="button"
              onClick={() => onQuery("")}
              aria-label="Clear search"
              className="
                grid size-5 shrink-0 place-items-center rounded-full bg-dock-raised
                text-dock-ink-muted transition hover:text-dock-ink
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight
              "
            >
              <X size={10} trigger="none" />
            </button>
          )}
        </label>

        {/*
         * Two wrappers, so a phone gets a row apiece and a desktop gets neither —
         * `contents` dissolves them back into the single flex line, which keeps the
         * wide layout in exactly the order it always had.
         */}
        <div className="flex items-center gap-2 dock:contents">
          <Divider />
          <SetMenu sets={sets} value={set} label={current.label} onChange={onSet} />
          <Divider />
          <WeightPicker value={weight} onChange={onWeight} className="ml-auto dock:ml-0" />
        </div>

        <div className="flex items-center gap-2 dock:contents">
          <Divider />

          <div className="flex items-center gap-1">
            <Stepper
              label="Smaller"
              onClick={() => step(-1)}
              disabled={index <= 0}
            >
              <Minus size={13} trigger="none" />
            </Stepper>
            <span className="w-[38px] text-center font-mono text-xs text-dock-ink tabular-nums">
              {size}px
            </span>
            <Stepper
              label="Larger"
              onClick={() => step(1)}
              disabled={index >= sizes.length - 1}
            >
              <Plus size={13} trigger="none" />
            </Stepper>
          </div>

          <Divider />
          <LoopSwitch value={loop} onChange={onLoop} className="ml-auto dock:ml-0" />
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <span className="hidden h-[22px] w-px shrink-0 bg-dock-line dock:block" />;
}

function Stepper({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="
        grid size-[26px] place-items-center rounded-[7px] bg-dock-raised text-dock-ink
        transition disabled:opacity-35
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight
      "
    >
      {children}
    </button>
  );
}

/**
 * Hover is how you see one of these move, and a touch screen has no hover — so
 * this is not a convenience there, it is the only way to see the set animate at
 * all. Hence a real switch rather than a play button: it turns a mode on, and the
 * grid stays that way. It defaults on for touch (see Gallery) and keeps its word
 * beside the glyph at phone widths, where it is doing the most work; the desktop
 * dock has four other controls to seat, so there it goes icon-only like the rest.
 */
function LoopSwitch({
  value,
  onChange,
  className = "",
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      aria-label="Loop animations"
      title="Loop animations"
      onClick={() => onChange(!value)}
      className={`
        flex shrink-0 items-center gap-1.5 rounded-[9px] px-2.5 py-1.5 text-sm transition
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight
        ${value ? "bg-highlight text-deepgreen" : "bg-dock-raised text-dock-ink"}
        ${className}
      `}
    >
      {/* The control demonstrates itself — on means this glyph is looping too. */}
      <Repeat size={15} trigger={value ? "loop" : "none"} speed={0.8} />
      <span className="dock:hidden">Loop</span>
    </button>
  );
}

/**
 * Weights are shown as the thing they describe rather than as words — one bell
 * per stroke width. It costs five extra glyphs and saves the reader translating
 * "light" into a picture.
 */
function WeightPicker({
  value,
  onChange,
  className = "",
}: {
  value: Weight;
  onChange: (w: Weight) => void;
  className?: string;
}) {
  return (
    <div role="group" aria-label="Weight" className={`flex items-center gap-0.5 ${className}`}>
      {WEIGHTS.map((w) => {
        const active = w === value;
        return (
          <button
            key={w}
            type="button"
            onClick={() => onChange(w)}
            aria-pressed={active}
            title={w[0].toUpperCase() + w.slice(1)}
            className={`
              grid size-[30px] place-items-center rounded-lg transition
              focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight
              ${active ? "bg-highlight text-deepgreen" : "text-dock-ink-muted hover:text-dock-ink"}
            `}
          >
            <Bell weight={w} size={18} trigger="none" />
            <span className="sr-only">{w}</span>
          </button>
        );
      })}
    </div>
  );
}

/** Replaces the chip row: eleven sets in a popover keeps the dock one line tall. */
function SetMenu({
  sets,
  value,
  label,
  onChange,
}: {
  sets: SetOption[];
  value: string | null;
  label: string;
  onChange: (v: string | null) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const wrap = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrap} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="
          flex items-center gap-1.5 rounded-[9px] bg-dock-raised px-2.5 py-1.5
          text-sm text-dock-ink transition
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight
        "
      >
        {/* The full name never fits beside four other controls on a phone. */}
        <span className="dock:hidden">{value === null ? "All" : label}</span>
        <span className="hidden dock:inline">{label}</span>
        <CaretDown
          size={12}
          trigger="none"
          className={`text-dock-ink-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Icon set"
          className="
            absolute bottom-full left-0 z-10 mb-2 max-h-[min(60vh,420px)] w-[300px]
            overflow-y-auto rounded-2xl bg-dock-bg p-2
            shadow-[0_20px_44px_rgba(52,51,48,0.32)]
            border border-dock-border
          "
        >
          <p className="flex items-baseline justify-between px-3 pb-2 pt-1.5">
            <span className="text-[11px] font-semibold text-dock-ink-muted">Jump to a set</span>
          </p>
          {sets.map((s) => {
            const active = s.name === value;
            return (
              <button
                key={s.label}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  onChange(s.name);
                  setOpen(false);
                }}
                className={`
                  flex w-full items-center gap-2.5 rounded-[9px] px-3 py-1.5 text-left transition
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight
                  ${active ? "bg-dock-raised" : "hover:bg-dock-raised/60"}
                `}
              >
                <span
                  className={`flex-1 text-sm ${active ? "font-semibold text-dock-ink" : "text-dock-ink/80"}`}
                >
                  {s.label}
                </span>
                <span
                  className={`w-7 shrink-0 text-right font-mono text-[11px] tabular-nums ${
                    active ? "text-highlight" : "text-dock-ink-muted"
                  }`}
                >
                  {s.count}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
