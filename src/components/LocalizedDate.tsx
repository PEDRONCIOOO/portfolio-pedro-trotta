"use client";

import { formatDate } from "@/app/utils/formatDate";
import { useLocale } from "@/i18n/LocaleContext";

export function LocalizedDate({ date, relative = false }: { date: string; relative?: boolean }) {
  const { locale } = useLocale();
  return <>{formatDate(date, relative, locale)}</>;
}
