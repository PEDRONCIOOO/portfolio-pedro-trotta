"use client";

import { useLocale } from "@/i18n/LocaleContext";
import { Flex } from "@/once-ui/components";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <Flex gap="4" vertical="center" style={{ cursor: "pointer" }}>
      <button
        onClick={() => setLocale("en")}
        aria-label="Switch to English"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.25rem",
          opacity: locale === "en" ? 1 : 0.4,
          transition: "opacity 0.2s ease",
          padding: "4px",
          lineHeight: 1,
          filter: locale === "en" ? "none" : "grayscale(50%)",
        }}
      >
        🇺🇸
      </button>
      <button
        onClick={() => setLocale("pt")}
        aria-label="Mudar para Português"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "1.25rem",
          opacity: locale === "pt" ? 1 : 0.4,
          transition: "opacity 0.2s ease",
          padding: "4px",
          lineHeight: 1,
          filter: locale === "pt" ? "none" : "grayscale(50%)",
        }}
      >
        🇧🇷
      </button>
    </Flex>
  );
}
