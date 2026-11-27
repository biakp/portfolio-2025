"use client";

import { mailHref, priceFor, services, type Currency } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { Sys, toneClass } from "@/components/portfolio/ui";

export function Services() {
  const { lang, currency, setCurrency, t } = useI18n();

  return (
    <section id="services" className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Sys index="02">{t.nav.services}</Sys>
          <h2 className="font-display mt-2 text-4xl leading-[0.95] font-semibold sm:text-5xl">{t.servicesTitle}</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#9A92AA]">{t.servicesIntro}</p>
        </div>
        <div role="group" aria-label={t.currencyLabel} className="hud-group grid w-full max-w-[14rem] grid-cols-2 overflow-hidden">
          {(["usd", "brl"] as Currency[]).map((code) => {
            const selected = currency === code;
            return (
              <button
                key={code}
                type="button"
                aria-pressed={selected}
                onClick={() => setCurrency(code)}
                className={`min-h-12 font-mono text-xs font-bold tracking-[0.14em] ${
                  selected ? "bg-[#E879B9] text-[#0A0A0F]" : "bg-transparent text-[#F1EDF7]"
                }`}
              >
                {code === "usd" ? "USD" : "BRL"}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-6">
        {services.map((service, index) => {
          const price = priceFor(service, currency, lang);
          const subject = `${t.projectSubject} — ${service.name[lang]}`;
          return (
            <article
              key={service.id}
              className={`tile flex flex-col justify-between gap-6 p-5 ${toneClass[service.tone]} ${
                index < 2 ? "md:col-span-3" : "md:col-span-2"
              }`}
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em]">
                  {t.turnaround} · {service.turnaround[lang]}
                </p>
                <h3 className="font-display mt-3 text-2xl leading-tight font-semibold">{service.name[lang]}</h3>
                <p className="font-mono mt-4 text-4xl leading-none font-bold tracking-tight text-[#E879B9] sm:text-5xl">{price}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#9A92AA] sm:text-base">{service.summary[lang]}</p>
              </div>
              <a
                href={mailHref(subject, t.projectBody)}
                className="hud inline-flex min-h-11 items-center justify-center px-3 text-center font-mono text-[11px] font-bold tracking-[0.12em] uppercase"
              >
                {t.request}
              </a>
            </article>
          );
        })}
      </div>

      <div className="tile mt-4 flex flex-col gap-3 bg-[#151520] p-5 text-[#F1EDF7] sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed sm:text-base">{t.servicesFine}</p>
        <a
          href={mailHref(t.projectSubject, t.projectBody)}
          className="hud-solid inline-flex min-h-12 items-center justify-center px-4 text-center font-mono text-xs font-bold tracking-[0.12em] uppercase"
        >
          {t.servicesCta}
        </a>
      </div>
    </section>
  );
}
