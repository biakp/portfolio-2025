"use client";

import { CV, type Tone } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";

export const toneClass: Record<Tone, string> = {
  ink: "bg-[#4e1636] text-[#fff7fb]",
  citrus: "bg-[#ffd4ea] text-[#3a1630]",
  foam: "bg-[#fff7fb] text-[#3a1630]",
  tangerine: "bg-[#d5f1ff] text-[#3a1630]",
  cobalt: "bg-[#e6d8ff] text-[#3a1630]",
  pine: "bg-[#f4fbff] text-[#3a1630]",
  violet: "bg-[#5b2d62] text-[#fff7fb]",
};

export function SkipLink() {
  const { t } = useI18n();
  return (
    <a href="#main-content" className="skip-link font-display">
      {t.skip}
    </a>
  );
}

export function LanguageToggle({ size = "bar" }: { size?: "bar" | "hero" }) {
  const { lang, setLang, t } = useI18n();
  const hero = size === "hero";

  return (
    <div
      role="group"
      aria-label={t.langLabel}
      className={`gel grid shrink-0 grid-cols-2 overflow-hidden ${hero ? "w-full" : "w-[9.4rem] sm:w-[10.75rem]"}`}
    >
      {(["en", "pt"] as const).map((code) => {
        const selected = lang === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={selected}
            onClick={() => setLang(code)}
            className={`font-display font-bold tracking-tight whitespace-nowrap ${
              hero ? "min-h-12 px-3 py-3 text-base" : "min-h-11 px-2 py-2 text-[13px] sm:text-sm"
            } ${selected ? "bg-[#4e1636] text-[#fff7fb]" : "bg-[#fff7fb] text-[#3a1630]"}`}
          >
            {code === "en" ? "EN" : "PT-BR"}
          </button>
        );
      })}
    </div>
  );
}

export function CvLink({ prominent = false, className = "" }: { prominent?: boolean; className?: string }) {
  const { lang, t } = useI18n();
  const file = CV[lang];
  const other = lang === "en" ? "pt" : "en";

  if (!prominent) {
    return (
      <a
        href={file.href}
        download={file.file}
        className={`gel inline-flex min-h-11 items-center justify-center bg-[#4e1636] px-4 font-display text-sm font-bold text-[#fff7fb] ${className}`}
      >
        {t.cv}
      </a>
    );
  }

  return (
    <div className="flex h-full min-w-0 flex-col justify-between gap-6">
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em]">{t.cvFile}</p>
        <p className="font-display mt-3 text-[clamp(1.7rem,2.4vw,2.35rem)] leading-[0.92] font-extrabold text-balance">{t.cv}</p>
      </div>
      <div className="flex flex-col items-start gap-3">
        <a
          href={file.href}
          download={file.file}
          className="gel inline-flex min-h-12 items-center bg-[#4e1636] px-4 font-display text-base font-bold text-[#fff7fb]"
        >
          {t.cv}
        </a>
        <a href={CV[other].href} download={CV[other].file} className="font-mono text-xs underline underline-offset-4">
          {t.cvOther}
        </a>
      </div>
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em]">
      <span aria-hidden>✦ </span>
      {children}
    </p>
  );
}
