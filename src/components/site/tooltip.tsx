"use client";

import * as React from "react";

/**
 * Small CSS-driven tooltip.
 *
 * Shown on hover and on keyboard focus — an action reachable by tab needs its label
 * reachable the same way. `pointer-events-none` keeps it from swallowing the click
 * it is describing.
 */
export function Tooltip({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span
        role="tooltip"
        className="
          pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2
          whitespace-nowrap rounded-md bg-tooltip-bg px-2.5 py-1.5
          text-[11px] leading-none font-semibold text-tooltip-ink
          opacity-0 translate-y-0.5 transition duration-150
          group-hover/tip:opacity-100 group-hover/tip:translate-y-0
          group-focus-within/tip:opacity-100 group-focus-within/tip:translate-y-0
        "
      >
        <span
          aria-hidden
          className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rotate-45 rounded-[2px] bg-tooltip-bg"
        />
        {label}
      </span>
    </span>
  );
}
