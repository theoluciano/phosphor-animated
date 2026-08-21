import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { GithubLogo } from "./github-logo";

const REPO_URL = "https://github.com/theoluciano/phosphor-animated";

/** Shared by the gallery and the usage page, so the two never drift apart. */
export function Nav() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 md:px-6">
      <Link href="/" className="font-mono text-sm font-semibold text-ink">
        phosphor<span className="text-ink-muted">-animated</span>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/usage" className="text-sm text-ink-muted transition hover:text-ink">
          Usage
        </Link>

        {/*
         * Square on a phone and labelled from `sm` up. The nav is four items on a
         * 375px screen and the mark alone still says where the link goes, so the
         * word is the part that gives way — but it stays in the accessible name
         * at every width, because "Star" beside a logo is only unambiguous to
         * someone who can see the logo.
         */}
        <a
          href={REPO_URL}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Star phosphor-animated on GitHub"
          className="
            inline-flex size-9 items-center justify-center rounded-lg border border-line
            bg-surface text-ink-muted transition hover:text-ink hover:border-line-strong
            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
            sm:w-auto sm:gap-2 sm:px-3
          "
        >
          <GithubLogo size={17} />
          <span aria-hidden className="hidden text-sm font-medium sm:inline">
            Star
          </span>
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}
