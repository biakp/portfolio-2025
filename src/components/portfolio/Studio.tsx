"use client";

import { useI18n } from "@/components/portfolio/i18n";
import { Kicker } from "@/components/portfolio/ui";

function CatMark() {
  return (
    <svg viewBox="0 0 80 72" aria-hidden className="h-16 w-16">
      <path
        fill="currentColor"
        d="M8 28 20 6l14 20h12L60 6l12 22v28c0 6-5 10-12 10H20c-7 0-12-4-12-10V28z"
      />
      <circle cx="32" cy="42" r="3.2" fill="#e4ff4a" />
      <circle cx="50" cy="42" r="3.2" fill="#e4ff4a" />
      <path d="M40 48 36 55h8L40 48z" fill="#e4ff4a" />
    </svg>
  );
}

export function Studio() {
  const { t } = useI18n();

  return (
    <section id="about" className="mx-auto grid max-w-[1180px] gap-3 px-4 py-8 sm:px-6 md:grid-cols-12">
      <div className="md:col-span-12">
        <Kicker>{t.aboutKicker}</Kicker>
        <h2 className="font-display mt-2 text-4xl leading-[0.95] font-extrabold sm:text-5xl">{t.aboutTitle}</h2>
      </div>

      <article className="tile bg-[#f7f3ea] p-5 sm:p-6 md:col-span-7">
        <h3 className="font-display text-3xl font-extrabold">{t.skillsTitle}</h3>
        <div className="mt-5 space-y-5">
          {t.skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em]">{group.label}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-2 border-[#141210] bg-[#e6dfd2] px-2.5 py-1.5 text-sm font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="tile flex flex-col justify-between gap-6 bg-[#241447] p-5 text-[#f6f1ff] sm:p-6 md:col-span-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Kicker>{t.personaKicker}</Kicker>
            <h3 className="font-display mt-3 text-3xl leading-none font-extrabold">{t.personaTitle}</h3>
          </div>
          <CatMark />
        </div>
        <p className="text-base leading-relaxed">{t.personaBody}</p>
        <ul className="flex flex-wrap gap-2">
          {t.personaChips.map((chip) => (
            <li key={chip} className="border-2 border-[#e4ff4a] px-2.5 py-1 text-sm font-bold text-[#e4ff4a]">
              {chip}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile bg-[#102e2b] p-5 text-[#f3fff8] sm:p-6 md:col-span-6">
        <h3 className="font-display text-3xl font-extrabold">{t.eduTitle}</h3>
        <ul className="mt-4 space-y-3">
          {t.edu.map((item) => (
            <li key={item} className="border-t-2 border-[#f3fff8]/25 pt-3 text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile bg-[#e4ff4a] p-5 sm:p-6 md:col-span-6">
        <h3 className="font-display text-3xl font-extrabold">{t.certTitle}</h3>
        <ul className="mt-4 space-y-3">
          {t.certs.map((item) => (
            <li key={item} className="border-t-2 border-[#141210]/20 pt-3 text-base leading-relaxed font-medium">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
