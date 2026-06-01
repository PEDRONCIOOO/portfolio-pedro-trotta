"use client";

import { ReactNode } from "react";
import { useLocale, Locale } from "@/i18n/LocaleContext";

interface LocaleContentProps {
  locale: Locale;
  children: ReactNode;
}

export function LocaleContent({ locale, children }: LocaleContentProps) {
  const { locale: currentLocale } = useLocale();
  if (currentLocale !== locale) return null;
  return <>{children}</>;
}
