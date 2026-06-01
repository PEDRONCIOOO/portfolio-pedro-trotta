"use client";

import { ReactNode } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import { translations, TranslationKey } from "@/i18n/translations";

interface TProps {
  k?: TranslationKey;
  en?: ReactNode;
  pt?: ReactNode;
}

export function T({ k, en, pt }: TProps) {
  const { locale } = useLocale();

  if (k) {
    return <>{translations[locale][k] || translations.en[k]}</>;
  }

  return <>{locale === "pt" ? pt : en}</>;
}
