"use client";

import { mailHref } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { CvLink, Kicker, LanguageToggle } from "@/components/portfolio/ui";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="hero-bento mx-auto grid max-w-[1180px] gap-3 px-4 py-4 sm:px-6">
      <article className="tile area-name relative bg-[#4e1636] p-5 text-[#fff7fb] sm:p-8">
        <p aria-hidden className="absolute top-5 left-5 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff8fbe]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d7c6ff]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#9ed8ff]" />
        </p>
        <p className="font-mono absolute top-5 right-5 hidden text-[11px] uppercase tracking-[0.18em] text-[#ffd4ea] md:block">
          ✦ OS 2.0
        </p>
        <div className="mt-6 md:pr-16">
          <Kicker>{t.heroKicker}</Kicker>
        </div>
        <h1 className="hero-name font-display relative mt-4 max-w-full font-bold">
          Bea
          <br />
          Knabben
        </h1>
        <p className="font-display relative mt-5 max-w-xl text-xl leading-tight font-bold text-[#ffd4ea] sm:text-2xl">
          {t.heroTitle}
        </p>
        <p className="relative mt-4 max-w-xl text-base leading-relaxed text-[#fff7fb] sm:text-lg">{t.heroLead}</p>
      </article>

      <article className="tile area-avail flex flex-col justify-between gap-6 bg-[#ffd4ea] p-5 text-[#3a1630]">
        <div className="flex items-center gap-3">
          <span className="pulse-dot" aria-hidden />
          <h2 className="font-display max-w-full text-[1.65rem] leading-none font-extrabold sm:text-3xl lg:text-4xl">{t.available}</h2>
        </div>
        <ul className="space-y-2 text-base font-semibold">
          {t.availablePoints.map((point) => (
            <li key={point} className="border-t border-[#3a1630]/15 pt-2">
              {point}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile area-lang flex flex-col justify-between gap-5 bg-[#fff7fb] p-5 text-[#3a1630]">
        <div>
          <Kicker>{t.languagesTitle}</Kicker>
          <p className="mt-3 text-base leading-relaxed font-medium">{t.languagesBody}</p>
        </div>
        <LanguageToggle size="hero" />
      </article>

      <article className="tile area-how bg-[#fff7fb] p-5 text-[#3a1630] sm:p-7">
        <Kicker>{t.howTitle}</Kicker>
        <h2 className="font-display mt-3 text-3xl leading-none font-extrabold sm:text-4xl">{t.howTitle}</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed">{t.howBody}</p>
        <ul className="mt-5 grid gap-2 sm:grid-cols-3">
          {t.facts.map((fact) => (
            <li key={fact} className="rounded-2xl bg-[#e6d8ff] px-3 py-3 text-sm font-bold">
              {fact}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile area-cv bg-[#d5f1ff] p-5 text-[#3a1630]">
        <CvLink prominent />
      </article>

      <article className="tile area-hire flex flex-col justify-between gap-6 bg-[#e6d8ff] p-5 text-[#3a1630] sm:p-6">
        <div>
          <Kicker>{t.recruiterKicker}</Kicker>
          <h2 className="font-display mt-3 text-3xl leading-[0.95] font-extrabold text-balance">{t.recruiterTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed sm:text-base">{t.recruiterBody}</p>
        </div>
        <a
          href={mailHref(t.roleSubject, t.roleBody)}
          className="gel inline-flex min-h-12 items-center justify-center bg-[#4e1636] px-4 text-center font-display text-base font-bold text-[#fff7fb]"
        >
          {t.recruiterCta}
        </a>
      </article>

      <article className="tile area-client flex flex-col justify-between gap-6 bg-[#4e1636] p-5 text-[#fff7fb] sm:p-6">
        <div>
          <Kicker>{t.clientKicker}</Kicker>
          <h2 className="font-display mt-3 text-3xl leading-[0.95] font-bold text-balance">{t.clientTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#fff7fb] sm:text-base">{t.clientBody}</p>
        </div>
        <a
          href={mailHref(t.projectSubject, t.projectBody)}
          className="gel inline-flex min-h-12 items-center justify-center bg-[#ffd4ea] px-4 text-center font-display text-base font-bold text-[#3a1630]"
        >
          {t.clientCta}
        </a>
      </article>
    </section>
  );
}
