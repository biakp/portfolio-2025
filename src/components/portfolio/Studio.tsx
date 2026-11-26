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
      <circle cx="32" cy="42" r="3.2" fill="#ffd4ea" />
      <circle cx="50" cy="42" r="3.2" fill="#ffd4ea" />
      <path d="M40 48 36 55h8L40 48z" fill="#ffd4ea" />
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

      <article className="tile bg-[#fff7fb] p-5 text-[#3a1630] sm:p-6 md:col-span-7">
        <h3 className="font-display text-3xl font-extrabold">{t.skillsTitle}</h3>
        <div className="mt-5 space-y-5">
          {t.skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em]">{group.label}</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-[#ffd4ea] px-3 py-1.5 text-sm font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <article className="tile flex flex-col justify-between gap-6 bg-[#5b2d62] p-5 text-[#fff7fb] sm:p-6 md:col-span-5">
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
            <li key={chip} className="rounded-full border border-[#ffd4ea] px-3 py-1 text-sm font-bold text-[#ffd4ea]">
              {chip}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile bg-[#d5f1ff] p-5 text-[#3a1630] sm:p-6 md:col-span-6">
        <h3 className="font-display text-3xl font-extrabold">{t.eduTitle}</h3>
        <ul className="mt-4 space-y-3">
          {t.edu.map((item) => (
            <li key={item} className="border-t border-[#3a1630]/15 pt-3 text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </article>

      <article className="tile bg-[#ffd4ea] p-5 text-[#3a1630] sm:p-6 md:col-span-6">
        <h3 className="font-display text-3xl font-extrabold">{t.certTitle}</h3>
        <ul className="mt-4 space-y-3">
          {t.certs.map((item) => (
            <li key={item} className="border-t border-[#3a1630]/15 pt-3 text-base leading-relaxed font-medium">
              {item}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
