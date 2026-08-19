import * as React from "react";

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-ink-muted">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <p className="max-w-xl leading-relaxed">
          An unofficial, independent project. Not affiliated with, endorsed by, or
          sponsored by Phosphor Icons. Icon geometry is derived from{" "}
          <a
            href="https://github.com/phosphor-icons/core"
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink underline decoration-line-strong underline-offset-4 hover:decoration-accent"
          >
            Phosphor Icons
          </a>{" "}
          and used under its MIT license. The animations are MIT too — use them
          anywhere, commercially or otherwise.
        </p>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="/#icons" className="hover:text-ink">Icons</a>
          <a href="/usage" className="hover:text-ink">Usage</a>
          <a
            href="https://phosphoricons.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-ink"
          >
            Phosphor
          </a>
          <a
            href="https://motion.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-ink"
          >
            Motion
          </a>
        </nav>
      </div>
    </footer>
  );
}
