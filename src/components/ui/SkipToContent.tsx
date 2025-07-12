"use client";

import { createSmoothScrollHandler } from "@/utils/smoothScroll";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      onClick={createSmoothScrollHandler("#main-content")}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-primary text-background px-4 py-2 rounded-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
