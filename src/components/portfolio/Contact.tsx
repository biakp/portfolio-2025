"use client";

import { EMAIL, GITHUB, LINKEDIN, mailHref } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { Kicker } from "@/components/portfolio/ui";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="mx-auto max-w-[1180px] px-4 py-8 sm:px-6">
      <article className="tile bg-[#e4ff4a] p-5 sm:p-8">
        <Kicker>{t.contactKicker}</Kicker>
        <h2 className="font-display mt-3 text-4xl leading-[0.95] font-extrabold sm:text-6xl">{t.contactTitle}</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed">{t.contactBody}</p>
        <a
          href={`mailto:${EMAIL}`}
          className="font-display mt-6 block max-w-full text-[clamp(1.65rem,6.5vw,2.8rem)] leading-[0.95] font-extrabold [overflow-wrap:anywhere] underline decoration-2 underline-offset-4"
        >
          <span className="sr-only">{t.emailLabel} </span>
          <span className="block">beatriz.</span>
          <span className="block">knabbenp</span>
          <span className="block">@gmail.com</span>
        </a>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={mailHref(t.roleSubject, t.roleBody)}
            className="inline-flex min-h-12 items-center justify-center border-2 border-[#141210] bg-[#141210] px-4 text-center font-display font-extrabold text-[#e4ff4a]"
          >
            {t.recruiterCta}
          </a>
          <a
            href={mailHref(t.projectSubject, t.projectBody)}
            className="inline-flex min-h-12 items-center justify-center border-2 border-[#141210] bg-[#ff4d1c] px-4 text-center font-display font-extrabold text-[#1a0e0a]"
          >
            {t.clientCta}
          </a>
        </div>
        <ul className="mt-6 flex flex-col gap-2 font-mono text-sm sm:flex-row sm:gap-6">
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
      <footer className="mt-4 flex flex-col gap-2 border-t-2 border-[#141210] pt-4 font-mono text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Beatriz Knabben</p>
        <p>{t.footer}</p>
      </footer>
    </section>
  );
}
