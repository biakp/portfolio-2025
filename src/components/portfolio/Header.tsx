"use client";

import { CvLink, LanguageToggle } from "@/components/portfolio/ui";
import { useI18n } from "@/components/portfolio/i18n";

const links = [
  ["capabilities", "#capabilities"],
  ["services", "#services"],
  ["experience", "#experience"],
  ["about", "#about"],
  ["contact", "#contact"],
] as const;

export function Header() {
  const { t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-[#e7c3d6] bg-[#fff7fb]">
      <div className="h-1.5 bg-[linear-gradient(90deg,#ffd4ea,#e6d8ff,#d5f1ff,#ffd4ea)]" />
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-2">
          <span className="gel grid h-11 w-11 shrink-0 place-items-center bg-[#ffd4ea] font-display text-sm font-bold text-[#3a1630]">
            BK
          </span>
          <span className="min-w-0">
            <span className="font-display block text-lg leading-none font-extrabold">
              <span className="sm:hidden">Bea</span>
              <span className="hidden sm:inline">Bea Knabben</span>
            </span>
            <span className="font-mono block truncate text-[10px] uppercase tracking-[0.14em]">Shopify OS 2.0</span>
          </span>
        </a>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="hidden md:block">
            <CvLink />
          </div>
        </div>
      </div>
      <div className="px-4 pb-3 md:hidden">
        <CvLink className="w-full" />
      </div>
      <nav aria-label={t.navLabel} className="mx-auto max-w-[1180px] px-4 pb-3 sm:px-6">
        <ul className="chip-row flex gap-2 overflow-x-auto">
          {links.map(([key, href]) => (
            <li key={key} className="shrink-0">
              <a
                href={href}
                className="gel inline-flex min-h-10 items-center bg-[#fff7fb] px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#3a1630]"
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
