"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { copy, type Copy, type Currency, type Lang } from "@/content/site";

const LANG_KEY = "bea-lang";
const CURRENCY_KEY = "bea-currency";

interface I18nValue {
  lang: Lang;
  currency: Currency;
  t: Copy;
  setLang: (lang: Lang) => void;
  setCurrency: (currency: Currency) => void;
}

const I18nContext = createContext<I18nValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [currency, setCurrencyState] = useState<Currency>("usd");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedLang = window.localStorage.getItem(LANG_KEY);
    const storedCurrency = window.localStorage.getItem(CURRENCY_KEY);
    const nextLang: Lang = storedLang === "pt" ? "pt" : "en";
    const nextCurrency: Currency =
      storedCurrency === "usd" || storedCurrency === "brl"
        ? storedCurrency
        : nextLang === "pt"
          ? "brl"
          : "usd";
    setLangState(nextLang);
    setCurrencyState(nextCurrency);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(LANG_KEY, lang);
    window.localStorage.setItem(CURRENCY_KEY, currency);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title =
      lang === "pt"
        ? "Bea Knabben — Desenvolvedora Front-End & Shopify"
        : "Bea Knabben — Front-End & Shopify Developer";
  }, [lang, currency, ready]);

  const setLang = (next: Lang) => {
    setLangState(next);
    setCurrencyState(next === "pt" ? "brl" : "usd");
  };

  const value: I18nValue = {
    lang,
    currency,
    t: copy[lang],
    setLang,
    setCurrency: setCurrencyState,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return value;
}
