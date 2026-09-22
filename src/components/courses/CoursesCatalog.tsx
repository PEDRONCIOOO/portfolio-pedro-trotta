"use client";

import { useMemo, useState } from "react";
import {
  Column,
  Flex,
  Grid,
  Heading,
  Icon,
  Line,
  RevealFx,
  Tag,
  Text,
  ToggleButton,
} from "@/once-ui/components";
import { useLocale } from "@/i18n/LocaleContext";
import { translations } from "@/i18n/translations";
import { Course, CourseCategoryId, courseCategories } from "@/app/resources/courses";
import { CourseCard } from "./CourseCard";
import styles from "./Courses.module.scss";

type Filter = "all" | "free" | CourseCategoryId;

const FREE_COLOR = "#22c55e";

export function CoursesCatalog({ courses }: { courses: Course[] }) {
  const { locale } = useLocale();
  const t = translations[locale];
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const map: Record<string, number> = {
      all: courses.length,
      free: courses.filter((c) => c.free).length,
    };
    for (const category of courseCategories) {
      map[category.id] = courses.filter((c) => c.categories.includes(category.id)).length;
    }
    return map;
  }, [courses]);

  const visible = useMemo(
    () =>
      // Already sorted by the loader (featured → status → newest publishedAt)
      courses.filter((c) =>
        filter === "all" ? true : filter === "free" ? c.free : c.categories.includes(filter),
      ),
    [courses, filter],
  );

  const activeCategory = courseCategories.find((c) => c.id === filter);

  return (
    <Column fillWidth gap="xl">
      {/* Hero */}
      <Column fillWidth gap="m" horizontal="center" paddingTop="l">
        <RevealFx translateY="4" horizontal="center">
          <Tag variant="brand" size="l" prefixIcon="courses" label={t["courses.eyebrow"]} />
        </RevealFx>
        <RevealFx translateY="8" delay={0.1} horizontal="center">
          <Heading
            as="h1"
            variant="display-strong-l"
            wrap="balance"
            align="center"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            {t["courses.title"].split(" ").slice(0, -1).join(" ")}{" "}
            <span className={styles.gradientText}>
              {t["courses.title"].split(" ").slice(-1)}
            </span>
          </Heading>
        </RevealFx>
        <RevealFx translateY="12" delay={0.2} horizontal="center">
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            align="center"
            style={{ maxWidth: "640px" }}
          >
            {t["courses.subtitle"]}
          </Text>
        </RevealFx>
      </Column>

      {/* Category filter */}
      <RevealFx translateY="12" delay={0.3} horizontal="center">
        <Column gap="12" horizontal="center" fillWidth>
          <Flex
            className={styles.filters}
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            gap="4"
            role="tablist"
            aria-label={t["courses.eyebrow"]}
          >
            <ToggleButton
              role="tab"
              aria-selected={filter === "all"}
              selected={filter === "all"}
              onClick={() => setFilter("all")}
              prefixIcon="grid"
              label={`${t["courses.filter.all"]} · ${counts.all}`}
            />
            <ToggleButton
              role="tab"
              aria-selected={filter === "free"}
              selected={filter === "free"}
              onClick={() => setFilter("free")}
              label={
                <Flex gap="8" vertical="center">
                  <Icon name="play" size="xs" style={{ color: FREE_COLOR }} />
                  {t["courses.filter.free"]}
                  <Text onBackground="neutral-weak">{counts.free}</Text>
                </Flex>
              }
            />
            <Line vert maxHeight="24" />
            {courseCategories.map((category) => (
              <ToggleButton
                key={category.id}
                role="tab"
                aria-selected={filter === category.id}
                selected={filter === category.id}
                onClick={() => setFilter(category.id)}
                label={
                  <Flex gap="8" vertical="center">
                    <span
                      className={styles.dot}
                      style={{ "--dot-color": category.color } as React.CSSProperties}
                    />
                    {category.label[locale]}
                    <Text onBackground="neutral-weak">{counts[category.id]}</Text>
                  </Flex>
                }
              />
            ))}
          </Flex>
          <Text
            variant="body-default-s"
            onBackground="neutral-weak"
            align="center"
            style={{ minHeight: "1.5em" }}
          >
            {filter === "free"
              ? t["courses.filter.free.description"]
              : (activeCategory?.description[locale] ?? "")}
          </Text>
        </Column>
      </RevealFx>

      {/* Grid */}
      {visible.length > 0 ? (
        <Grid columns="3" tabletColumns="2" mobileColumns="1" gap="l" fillWidth>
          {visible.map((course, index) => (
            <RevealFx key={`${filter}-${course.slug}`} translateY="8" delay={index * 0.05} fillWidth>
              <CourseCard course={course} />
            </RevealFx>
          ))}
        </Grid>
      ) : (
        <Column fillWidth horizontal="center" padding="xl" gap="8">
          <Icon name="courses" size="l" onBackground="neutral-weak" />
          <Text onBackground="neutral-weak" align="center">
            {t["courses.empty"]}
          </Text>
        </Column>
      )}

      {/* How it works */}
      <Column fillWidth gap="l" paddingTop="l">
        <Heading as="h2" variant="display-strong-xs" align="center">
          {t["courses.how.title"]}
        </Heading>
        <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="m" fillWidth>
          {(
            [
              ["infinity", "access"],
              ["mobile", "time"],
              ["shield", "payment"],
            ] as const
          ).map(([icon, key]) => (
            <Column
              key={key}
              padding="l"
              gap="12"
              radius="l"
              background="neutral-alpha-weak"
              border="neutral-alpha-medium"
            >
              <Icon name={icon} size="l" onBackground="brand-medium" />
              <Heading as="h3" variant="heading-strong-s">
                {t[`courses.how.${key}.title`]}
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {t[`courses.how.${key}.description`]}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>
    </Column>
  );
}
