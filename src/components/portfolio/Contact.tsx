"use client";

import { EMAIL, GITHUB, LINKEDIN, mailHref } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { Sys } from "@/components/portfolio/ui";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-20">
      <article className="tile bg-[#111118] p-5 text-[#F1EDF7] sm:p-8">
        <Sys index="04">{t.nav.contact}</Sys>
        <h2 className="font-display mt-3 text-4xl leading-[0.95] font-semibold sm:text-6xl">{t.contactTitle}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9A92AA]">{t.contactBody}</p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-5 block max-w-full text-lg leading-snug font-semibold tracking-tight text-[#F1EDF7] underline decoration-[#E879B9] decoration-1 underline-offset-4 sm:text-2xl"
        >
          <span className="sr-only">{t.emailLabel} </span>
          beatriz.knabbenp
          <wbr />
          @gmail.com
        </a>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailHref(t.roleSubject, t.roleBody)}
            className="hud-solid inline-flex min-h-12 items-center justify-center px-4 text-center font-mono text-xs font-bold tracking-[0.12em] uppercase"
          >
            {t.recruiterCta}
          </a>
          <a
            href={mailHref(t.projectSubject, t.projectBody)}
            className="hud inline-flex min-h-12 items-center justify-center px-4 text-center font-mono text-xs font-bold tracking-[0.12em] uppercase"
          >
            {t.clientCta}
          </a>
        </div>
        <ul className="mt-6 flex flex-col gap-2 font-mono text-sm text-[#C48ED8] sm:flex-row sm:gap-6">
          <li>
            <a href={LINKEDIN} target="_blank" rel="noreferrer noopener" className="underline underline-offset-4">
              LinkedIn · linkedin.com/in/biakp
            </a>
          </li>
          <li>
            <a href={GITHUB} target="_blank" rel="noreferrer noopener" className="underline underline-offset-4">
              GitHub · github.com/biakp
            </a>
          </li>
        </ul>
      </article>
      <footer className="mt-4 flex flex-col gap-2 border-t border-[rgba(196,142,216,0.28)] pt-4 font-mono text-xs text-[#9A92AA] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Beatriz Knabben</p>
        <p>{t.footer}</p>
      </footer>
    </section>
  );
}
