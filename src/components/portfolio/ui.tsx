"use client";

import { CV, type Tone } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";

export const toneClass: Record<Tone, string> = {
  ink: "bg-[#141210] text-[#f6f1e7]",
  citrus: "bg-[#e4ff4a] text-[#141210]",
  foam: "bg-[#f7f3ea] text-[#141210]",
  tangerine: "bg-[#ff4d1c] text-[#1a0e0a]",
  cobalt: "bg-[#122a9e] text-[#f4f6ff]",
  pine: "bg-[#102e2b] text-[#f3fff8]",
  violet: "bg-[#241447] text-[#f6f1ff]",
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
      className={`grid shrink-0 grid-cols-2 border-2 border-[#141210] ${hero ? "w-full" : "w-[9.4rem] sm:w-[10.75rem]"}`}
    >
      {(["en", "pt"] as const).map((code) => {
        const selected = lang === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={selected}
            onClick={() => setLang(code)}
            className={`font-display font-extrabold tracking-tight whitespace-nowrap ${
              hero ? "min-h-12 px-3 py-3 text-base" : "min-h-11 px-2 py-2 text-[13px] sm:text-sm"
            } ${selected ? "bg-[#141210] text-[#e4ff4a]" : "bg-[#f7f3ea] text-[#141210]"}`}
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
        className={`inline-flex min-h-11 items-center justify-center border-2 border-[#141210] bg-[#141210] px-3 font-display text-sm font-extrabold text-[#e4ff4a] ${className}`}
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
          className="inline-flex min-h-12 items-center border-2 border-[#141210] bg-[#141210] px-4 font-display text-base font-extrabold text-[#e4ff4a]"
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
  return <p className="font-mono text-[11px] uppercase tracking-[0.18em]">{children}</p>;
}
