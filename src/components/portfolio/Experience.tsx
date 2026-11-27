"use client";

import { roles } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { Sys, toneClass } from "@/components/portfolio/ui";

export function Experience() {
  const { lang, t } = useI18n();

  return (
    <section id="experience" className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-20">
      <Sys index="03">{t.nav.experience}</Sys>
      <h2 className="font-display mt-2 max-w-xl text-4xl leading-[0.95] font-semibold sm:text-5xl">{t.experienceTitle}</h2>
      <div className="mt-6 grid gap-4 sm:gap-5 md:grid-cols-3">
        {roles.map((role) => (
          <article key={role.id} className={`tile flex flex-col gap-4 p-5 ${toneClass[role.tone]}`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#E879B9]">{role.company}</p>
            <h3 className="font-display text-2xl leading-tight font-semibold">{role.role[lang]}</h3>
            <p className="font-mono text-xs leading-relaxed text-[#8796C4]">{role.meta[lang]}</p>
            <p className="text-sm leading-relaxed text-[#9A92AA] sm:text-base">{role.body[lang]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
