"use client";

import { mailHref } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { CvLink, Kicker, LanguageToggle } from "@/components/portfolio/ui";

const bars = [2, 1, 3, 1, 1, 4, 2, 1, 3, 2, 1, 1, 4, 1, 2, 3, 1, 2, 1, 4, 2, 1, 3, 1];

function Barcode() {
  let x = 0;
  const rects = bars.map((width, index) => {
    const rect = { x, width: width * 2, index };
    x += width * 2 + 2;
    return rect;
  });

  return (
    <svg className="mt-6 h-7 w-full max-w-[15rem]" viewBox={`0 0 ${x} 24`} aria-hidden>
      {rects.map((rect) => (
        <rect
          key={rect.index}
          x={rect.x}
          y={rect.index % 4 === 0 ? 0 : 3}
          width={rect.width}
          height={rect.index % 4 === 0 ? 24 : 18}
          fill={rect.index % 3 === 0 ? "#E879B9" : rect.index % 3 === 1 ? "#C48ED8" : "#8796C4"}
        />
      ))}
    </svg>
  );
}

function Meter() {
  return (
    <div className="seg" aria-hidden>
      {Array.from({ length: 20 }, (_, index) => (
        <span key={index} className={index < 19 ? "on" : ""} />
      ))}
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="hero-bento mx-auto grid max-w-[1180px] gap-3 px-4 py-4 sm:px-6">
      <article className="tile area-name relative bg-[#111118] p-5 text-[#F1EDF7] sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8796C4]">
            <span className="font-hud text-[10px] text-[#E879B9]">DATA CARD</span>
            <span className="px-2 text-[#C48ED8]">{"//"}</span>
            01
          </p>
          <p className="font-hud hidden text-[10px] tracking-[0.12em] text-[#C48ED8] md:block">✦ OS 2.0</p>
        </div>
        <div className="mt-6 md:pr-16">
          <Kicker>{t.heroKicker}</Kicker>
        </div>
        <h1 className="hero-name font-display relative mt-4 max-w-full font-semibold">
          Bea
          <br />
          Knabben
        </h1>
        <p className="font-display relative mt-5 max-w-xl text-xl leading-tight font-semibold text-[#E879B9] sm:text-2xl">
          {t.heroTitle}
        </p>
        <p className="relative mt-4 max-w-xl text-base leading-relaxed text-[#F1EDF7] sm:text-lg">{t.heroLead}</p>
        <Barcode />
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8796C4]">{"LOC: BR // UTC−3"}</p>
        <div aria-hidden className="dither absolute right-5 bottom-5 hidden md:block" />
      </article>

      <article className="tile area-avail flex flex-col justify-between gap-6 bg-[#151520] p-5 text-[#F1EDF7]">
        <div>
          <div className="flex items-center gap-3">
            <span className="pulse-dot" aria-hidden />
            <h2 className="font-display max-w-full text-[1.65rem] leading-none font-semibold sm:text-3xl lg:text-4xl">{t.available}</h2>
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#C48ED8]">
            STATUS: {t.available}
            <span aria-hidden> [95%]</span>
          </p>
          <div className="mt-3">
            <Meter />
          </div>
        </div>
        <ul className="space-y-2 text-base">
          {t.availablePoints.map((point) => (
            <li key={point} className="term-item border-t border-[rgba(196,142,216,0.25)] pt-2">
              {point}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile area-lang flex flex-col justify-between gap-5 bg-[#111118] p-5 text-[#F1EDF7]">
        <div>
          <Kicker>{t.languagesTitle}</Kicker>
          <p className="mt-3 text-base leading-relaxed text-[#9A92AA]">{t.languagesBody}</p>
        </div>
        <LanguageToggle size="hero" />
      </article>

      <article className="tile area-how bg-[#111118] p-5 text-[#F1EDF7] sm:p-7">
        <Kicker>{t.howTitle}</Kicker>
        <h2 className="font-display mt-3 text-3xl leading-none font-semibold sm:text-4xl">{t.howTitle}</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#9A92AA]">{t.howBody}</p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-3">
          {t.facts.map((fact) => (
            <li key={fact} className="term-item border border-[rgba(196,142,216,0.3)] bg-[#0A0A0F] px-3 py-3 text-sm font-medium">
              {fact}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile area-cv bg-[#12151e] p-5 text-[#F1EDF7]">
        <CvLink prominent />
      </article>

      <article className="tile area-hire flex flex-col justify-between gap-6 bg-[#16141e] p-5 text-[#F1EDF7] sm:p-6">
        <div>
          <Kicker>{t.recruiterKicker}</Kicker>
          <h2 className="font-display mt-3 text-3xl leading-[0.95] font-semibold text-balance">{t.recruiterTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#9A92AA] sm:text-base">{t.recruiterBody}</p>
        </div>
        <a
          href={mailHref(t.roleSubject, t.roleBody)}
          className="hud-solid inline-flex min-h-12 items-center justify-center px-4 text-center font-mono text-xs font-bold tracking-[0.12em] uppercase"
        >
          {t.recruiterCta}
        </a>
      </article>

      <article className="tile area-client flex flex-col justify-between gap-6 bg-[#111118] p-5 text-[#F1EDF7] sm:p-6">
        <div>
          <Kicker>{t.clientKicker}</Kicker>
          <h2 className="font-display mt-3 text-3xl leading-[0.95] font-semibold text-balance">{t.clientTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#9A92AA] sm:text-base">{t.clientBody}</p>
        </div>
        <a
          href={mailHref(t.projectSubject, t.projectBody)}
          className="hud inline-flex min-h-12 items-center justify-center border-[#C48ED8] px-4 text-center font-mono text-xs font-bold tracking-[0.12em] text-[#F1EDF7] uppercase"
        >
          {t.clientCta}
        </a>
      </article>
    </section>
  );
}
