"use client";

import * as React from "react";
import { Sun } from "@/registry/icons/sun";
import { Moon } from "@/registry/icons/moon";

export function ThemeToggle() {
  const [dark, setDark] = React.useState(false);
  const [ready, setReady] = React.useState(false);

  // The inline script in the layout has already applied the class; read it back
  // rather than recomputing, so the button never disagrees with the page.
  React.useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setReady(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode — the toggle still works for this session */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="
        inline-flex size-9 items-center justify-center rounded-lg border border-line
        bg-surface text-ink-muted transition hover:text-ink hover:border-line-strong
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
      "
    >
      {/* Until mounted, render the light-mode icon to keep markup stable. */}
      {ready && dark ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
