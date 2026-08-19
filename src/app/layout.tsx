import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

/*
 * The pairing Phosphor's own site uses: Manrope for text, IBM Plex Mono for code.
 *
 * Their whole stylesheet uses exactly two weights, 400 and 600, and declares no
 * letter-spacing anywhere — so neither does this one. Plex Mono is not variable
 * on Google Fonts, so the two weights are requested explicitly rather than
 * letting the browser synthesise a bold for the wordmark.
 */
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://phosphor-animated.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "phosphor-animated — animated Phosphor icons for React",
    template: "%s — phosphor-animated",
  },
  description:
    "Animated Phosphor icons for React, installed as source through the shadcn CLI. All six weights, hover and scroll triggers, reduced-motion aware.",
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "phosphor-animated",
    title: "phosphor-animated — animated Phosphor icons for React",
    description:
      "Animated Phosphor icons for React, installed as source through the shadcn CLI.",
  },
  twitter: { card: "summary_large_image" },
};

/**
 * Theme is resolved before paint so a dark-mode visitor never sees a light flash.
 * Inline by necessity — anything deferred runs after first paint.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${plexMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
