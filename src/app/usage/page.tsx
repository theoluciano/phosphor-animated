import * as React from "react";
import type { Metadata } from "next";
import { Nav } from "@/components/site/nav";
import { Docs } from "@/components/site/docs";
import { Footer } from "@/components/site/footer";

const REGISTRY_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://phosphor-animated.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  title: "Usage",
  description:
    "How to install animated Phosphor icons through the shadcn CLI, switch weights, choose a trigger, and retune the keyframes you own.",
};

export default function UsagePage() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Nav />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 md:px-6">
        <Docs registryUrl={REGISTRY_URL} />
      </main>
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Footer />
      </div>
    </div>
  );
}
