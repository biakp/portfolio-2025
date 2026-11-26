"use client";

import { mailHref, priceFor, services, type Currency } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { Kicker, toneClass } from "@/components/portfolio/ui";

export function Services() {
  const { lang, currency, setCurrency, t } = useI18n();

  return (
    <section id="services" className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Kicker>{t.servicesKicker}</Kicker>
          <h2 className="font-display mt-2 text-4xl leading-[0.95] font-extrabold sm:text-5xl">{t.servicesTitle}</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed">{t.servicesIntro}</p>
        </div>
        <div role="group" aria-label={t.currencyLabel} className="grid w-full max-w-[14rem] grid-cols-2 border-2 border-[#141210]">
          {(["usd", "brl"] as Currency[]).map((code) => {
            const selected = currency === code;
            return (
              <button
                key={code}
                type="button"
                aria-pressed={selected}
                onClick={() => setCurrency(code)}
                className={`min-h-12 font-display text-sm font-extrabold ${
                  selected ? "bg-[#141210] text-[#e4ff4a]" : "bg-[#f7f3ea] text-[#141210]"
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
                <h3 className="font-display mt-3 text-2xl leading-tight font-extrabold">{service.name[lang]}</h3>
                <p className="font-display mt-4 text-5xl leading-none font-extrabold tracking-tight">{price}</p>
                <p className="mt-4 text-sm leading-relaxed sm:text-base">{service.summary[lang]}</p>
              </div>
              <a
                href={mailHref(subject, t.projectBody)}
                className="inline-flex min-h-11 items-center justify-center border-2 border-current px-3 text-center font-display text-sm font-extrabold"
              >
                {t.request}
              </a>
            </article>
          );
        })}
      </div>

      <div className="mt-4 flex flex-col gap-3 border-2 border-[#141210] bg-[#141210] p-5 text-[#f6f1e7] sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed sm:text-base">{t.servicesFine}</p>
        <a
          href={mailHref(t.projectSubject, t.projectBody)}
          className="inline-flex min-h-12 items-center justify-center bg-[#e4ff4a] px-4 text-center font-display text-base font-extrabold text-[#141210]"
        >
          {t.servicesCta}
        </a>
      </div>
    </section>
  );
}
