"use client";

import { useI18n } from "@/components/portfolio/i18n";
import { Kicker, Sys } from "@/components/portfolio/ui";

function CatMark() {
  return (
    <svg viewBox="0 0 80 72" aria-hidden className="h-16 w-16">
      <path
        fill="currentColor"
        d="M8 28 20 6l14 20h12L60 6l12 22v28c0 6-5 10-12 10H20c-7 0-12-4-12-10V28z"
      />
      <circle cx="32" cy="42" r="3.2" fill="#E879B9" />
      <circle cx="50" cy="42" r="3.2" fill="#E879B9" />
      <path d="M40 48 36 55h8L40 48z" fill="#E879B9" />
    </svg>
  );
}

export function Studio() {
  const { t } = useI18n();

  return (
    <section id="about" className="mx-auto grid max-w-[1180px] gap-4 px-4 py-14 sm:gap-5 sm:px-6 sm:py-20 md:grid-cols-12">
      <div className="md:col-span-12">
        <Sys index="05">{t.nav.about}</Sys>
        <h2 className="font-display mt-2 text-4xl leading-[0.95] font-semibold sm:text-5xl">{t.aboutTitle}</h2>
      </div>

      <article className="tile bg-[#111118] p-5 text-[#F1EDF7] sm:p-6 md:col-span-7">
        <h3 className="font-display text-3xl font-semibold">{t.skillsTitle}</h3>
        <div className="mt-5 space-y-5">
          {t.skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#8796C4]">{group.label}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-[rgba(196,142,216,0.4)] bg-[#0A0A0F] px-2.5 py-1.5 font-mono text-xs tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="tile flex flex-col justify-between gap-6 bg-[#18141c] p-5 text-[#F1EDF7] sm:p-6 md:col-span-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Kicker>{t.personaKicker}</Kicker>
            <h3 className="font-display mt-3 text-3xl leading-none font-semibold">{t.personaTitle}</h3>
          </div>
          <CatMark />
        </div>
        <p className="text-base leading-relaxed text-[#9A92AA]">{t.personaBody}</p>
        <ul className="flex flex-wrap gap-2">
          {t.personaChips.map((chip) => (
            <li key={chip} className="border border-[#C48ED8] px-2.5 py-1 font-mono text-xs tracking-wide text-[#C48ED8]">
              {chip}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile bg-[#12151e] p-5 text-[#F1EDF7] sm:p-6 md:col-span-6">
        <h3 className="font-display text-3xl font-semibold">{t.eduTitle}</h3>
        <ul className="mt-4 space-y-3">
          {t.edu.map((item) => (
            <li key={item} className="term-item border-t border-[rgba(196,142,216,0.25)] pt-3 text-base leading-relaxed text-[#9A92AA]">
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile bg-[#151520] p-5 text-[#F1EDF7] sm:p-6 md:col-span-6">
        <h3 className="font-display text-3xl font-semibold">{t.certTitle}</h3>
        <ul className="mt-4 space-y-3">
          {t.certs.map((item) => (
            <li key={item} className="term-item border-t border-[rgba(196,142,216,0.25)] pt-3 text-base leading-relaxed font-medium">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
