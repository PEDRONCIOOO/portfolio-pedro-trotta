"use client";

import { ReactNode } from "react";
import { LocaleProvider } from "@/i18n/LocaleContext";

export function ClientProviders({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
