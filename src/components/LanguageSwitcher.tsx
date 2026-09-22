"use client";

import { useLocale } from "@/i18n/LocaleContext";
import { Flex, ToggleButton } from "@/once-ui/components";

export function LanguageSwitcher({ size = "m" }: { size?: "s" | "m" }) {
  const { locale, setLocale } = useLocale();

  return (
    <Flex
      background="surface"
      border="neutral-medium"
      radius="m-4"
      shadow="l"
      padding={size === "s" ? "2" : "4"}
      gap="2"
      vertical="center"
    >
      <ToggleButton
        label="EN"
        size={size}
        selected={locale === "en"}
        onClick={() => setLocale("en")}
      />
      <ToggleButton
        label="PT"
        size={size}
        selected={locale === "pt"}
        onClick={() => setLocale("pt")}
      />
    </Flex>
  );
}
