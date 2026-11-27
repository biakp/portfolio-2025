"use client";

import { CV, type Tone } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";

export const toneClass: Record<Tone, string> = {
  ink: "bg-[#111118] text-[#F1EDF7]",
  citrus: "bg-[#151520] text-[#F1EDF7]",
  foam: "bg-[#111118] text-[#F1EDF7]",
  tangerine: "bg-[#12151e] text-[#F1EDF7]",
  cobalt: "bg-[#16141e] text-[#F1EDF7]",
  pine: "bg-[#121820] text-[#F1EDF7]",
  violet: "bg-[#18141c] text-[#F1EDF7]",
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
      className={`hud-group grid shrink-0 grid-cols-2 overflow-hidden ${hero ? "w-full" : "w-[9.4rem] sm:w-[10.75rem]"}`}
    >
      {(["en", "pt"] as const).map((code) => {
        const selected = lang === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={selected}
            onClick={() => setLang(code)}
            className={`font-mono font-bold tracking-[0.14em] whitespace-nowrap uppercase ${
              hero ? "min-h-12 px-3 py-3 text-sm" : "min-h-11 px-2 py-2 text-[13px] sm:text-sm"
            } ${selected ? "bg-[#E879B9] text-[#0A0A0F]" : "bg-transparent text-[#F1EDF7]"}`}
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
        className={`hud-solid inline-flex min-h-11 items-center justify-center px-4 font-mono text-[11px] font-bold tracking-[0.14em] uppercase ${className}`}
      >
        {t.cv}
      </a>
    );
  }

  return (
    <div className="flex h-full min-w-0 flex-col justify-between gap-6">
      <div className="min-w-0">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8796C4]">{t.cvFile}</p>
        <p className="font-display mt-3 text-[clamp(1.7rem,2.4vw,2.35rem)] leading-[0.92] font-semibold text-balance">{t.cv}</p>
      </div>
      <div className="flex flex-col items-start gap-3">
        <a
          href={file.href}
          download={file.file}
          className="hud-solid inline-flex min-h-12 items-center px-4 font-mono text-xs font-bold tracking-[0.14em] uppercase"
        >
          {t.cv}
        </a>
        <a href={CV[other].href} download={CV[other].file} className="font-mono text-xs text-[#C48ED8] underline underline-offset-4">
          {t.cvOther}
        </a>
      </div>
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8796C4]">
      <span aria-hidden className="text-[#E879B9]">
        ✦{" "}
      </span>
      {children}
    </p>
  );
}

export function Sys({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8796C4]">
      <span className="font-hud text-[10px] text-[#E879B9]">SYS.{index}</span>
      <span className="px-2 text-[#C48ED8]">{"//"}</span>
      {children}
    </p>
  );
}
