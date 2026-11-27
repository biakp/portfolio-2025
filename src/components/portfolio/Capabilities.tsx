"use client";

import { useEffect, useState } from "react";
import { categories, formatCount, solutions, type Category } from "@/content/site";
import { useI18n } from "@/components/portfolio/i18n";
import { Sys, toneClass } from "@/components/portfolio/ui";

type Filter = "all" | Category;

export function Capabilities() {
  const { lang, t } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(solutions[0]?.id ?? null);

  const visible = filter === "all" ? solutions : solutions.filter((item) => item.category === filter);

  useEffect(() => {
    setOpenId((current) => {
      if (!current) return current;
      const pool = filter === "all" ? solutions : solutions.filter((item) => item.category === filter);
      return pool.some((item) => item.id === current) ? current : null;
    });
  }, [filter]);

  const countLabel =
    filter === "all"
      ? formatCount(t.showingAll, visible.length)
      : visible.length === 1
        ? t.showingOne
        : formatCount(t.showingSome, visible.length);
  const filters: Filter[] = ["all", ...categories];

  return (
    <section id="capabilities" className="mx-auto max-w-[1180px] px-4 py-14 sm:px-6 sm:py-20">
      <Sys index="01">{t.nav.capabilities}</Sys>
      <div className="mt-2 grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] md:items-end">
        <h2 className="font-display text-4xl leading-[0.95] font-semibold sm:text-5xl">{t.capTitle}</h2>
        <p className="text-base leading-relaxed text-[#9A92AA]">{t.capIntro}</p>
      </div>
      <p className="mt-4 inline-flex max-w-3xl border border-[rgba(196,142,216,0.35)] bg-[#111118] px-3 py-2 font-mono text-xs leading-relaxed text-[#C48ED8]">
        {t.capNote}
      </p>

      <div className="mt-5 space-y-3">
        <div role="group" aria-label={t.filterLabel} className="chip-row flex min-w-0 gap-2 overflow-x-auto py-2 md:flex-wrap md:overflow-visible">
          {filters.map((item) => {
            const selected = filter === item;
            const label = item === "all" ? t.filterAll : t.categories[item];
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(item)}
                className={`hud shrink-0 px-3 py-2 text-left font-mono text-[11px] uppercase tracking-[0.12em] ${
                  selected ? "border-[#E879B9] bg-[#E879B9] text-[#0A0A0F]" : "bg-[#111118] text-[#F1EDF7]"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <p aria-live="polite" className="font-mono text-xs">
          {countLabel}
        </p>
      </div>

      <div key={filter} className="rise mt-6 grid gap-4 sm:gap-5 md:grid-cols-2">
        {visible.map((item) => {
          const open = openId === item.id;
          const panelId = `${item.id}-panel`;
          return (
            <article key={item.id} className={`tile ${toneClass[item.tone]} ${open ? "md:col-span-2" : ""}`}>
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full flex-col gap-3 p-5 text-left"
                >
                  <span className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
                    <span>
                      {item.number} · {t.categories[item.category]}
                    </span>
                    <span className="border border-current px-2 py-1">{open ? t.close : t.details}</span>
                  </span>
                  <span className="font-display text-2xl leading-tight font-extrabold sm:text-3xl">{item.title[lang]}</span>
                  <span className="text-sm leading-relaxed text-[#9A92AA] sm:text-base">{item.summary[lang]}</span>
                </button>
              </h3>
              {open ? (
                <div id={panelId} className="rise border-t-2 border-current/30 px-5 pt-4 pb-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em]">{t.includes}</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {item.points[lang].map((point) => (
                      <li key={point} className="term-item border border-[rgba(196,142,216,0.28)] bg-[#0A0A0F] px-3 py-3 text-sm leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
