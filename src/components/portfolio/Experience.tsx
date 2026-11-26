"use client";

import { roles } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { Kicker, toneClass } from "@/components/portfolio/ui";

export function Experience() {
  const { lang, t } = useI18n();

  return (
    <section id="experience" className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">
      <Kicker>{t.experienceKicker}</Kicker>
      <h2 className="font-display mt-2 max-w-xl text-4xl leading-[0.95] font-extrabold sm:text-5xl">{t.experienceTitle}</h2>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {roles.map((role) => (
          <article key={role.id} className={`tile flex flex-col gap-4 p-5 ${toneClass[role.tone]}`}>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]">{role.company}</p>
            <h3 className="font-display text-2xl leading-tight font-extrabold">{role.role[lang]}</h3>
            <p className="font-mono text-xs leading-relaxed">{role.meta[lang]}</p>
            <p className="text-sm leading-relaxed sm:text-base">{role.body[lang]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
