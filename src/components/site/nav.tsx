import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

/** Shared by the gallery and the usage page, so the two never drift apart. */
export function Nav() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 md:px-6">
      <Link href="/" className="font-mono text-sm font-semibold text-ink">
        phosphor<span className="text-ink-muted">-animated</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/usage" className="text-sm text-ink-muted transition hover:text-ink">
          Usage
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}
