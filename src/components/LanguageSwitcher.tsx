"use client";

import { useLocale } from "@/i18n/LocaleContext";
import { Flex, ToggleButton } from "@/once-ui/components";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <Flex
      background="surface"
      border="neutral-medium"
      radius="m-4"
      shadow="l"
      padding="4"
      gap="4"
      vertical="center"
    >
      <ToggleButton
        label="EN"
        selected={locale === "en"}
        onClick={() => setLocale("en")}
      />
      <ToggleButton
        label="PT"
        selected={locale === "pt"}
        onClick={() => setLocale("pt")}
      />
    </Flex>
  );
}
