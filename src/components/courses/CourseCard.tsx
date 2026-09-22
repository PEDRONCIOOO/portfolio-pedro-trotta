"use client";

import { useRef, useState } from "react";
import classNames from "classnames";
import { Column, Flex, Heading, Icon, SmartLink, Tag, Text } from "@/once-ui/components";
import { useLocale } from "@/i18n/LocaleContext";
import { translations } from "@/i18n/translations";
import { Course, formatPrice, getCategory } from "@/app/resources/courses";
import { CourseCover, courseColors } from "./CourseCover";
import styles from "./Courses.module.scss";

export function CourseCard({ course }: { course: Course }) {
  const { locale } = useLocale();
  const t = translations[locale];
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const href = `/courses/${course.slug}`;

  return (
    <div
      ref={ref}
      className={classNames(styles.card, course.status === "soon" && styles.soon)}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={
        {
          ...courseColors(course),
          "--mouse-x": `${mouse.x}px`,
          "--mouse-y": `${mouse.y}px`,
          "--glow-opacity": hovered ? 0.35 : 0,
        } as React.CSSProperties
      }
    >
      <div className={styles.glow} />
      <SmartLink href={href} unstyled fillWidth aria-label={course.title[locale]}>
        <CourseCover course={course} showTitle={false} />
      </SmartLink>

      <Column className={styles.body} gap="12" padding="l" fillWidth>
        <Flex gap="8" wrap>
          {course.categories.map((id) => {
            const category = getCategory(id);
            return category ? (
              <Tag key={id} size="s" variant="neutral" prefixIcon={category.icon}>
                {category.label[locale]}
              </Tag>
            ) : null;
          })}
        </Flex>

        <Heading as="h3" variant="heading-strong-m" wrap="balance">
          {course.title[locale]}
        </Heading>

        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          wrap="balance"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {course.tagline[locale]}
        </Text>

        <Flex gap="16" wrap textVariant="label-default-s" onBackground="neutral-medium">
          <Flex gap="4" vertical="center">
            <Icon name="play" size="xs" />
            {course.lessons} {t["courses.lessons"]}
          </Flex>
          <Flex gap="4" vertical="center">
            <Icon name="clock" size="xs" />
            {course.duration[locale]}
          </Flex>
          <Flex gap="4" vertical="center">
            <Icon name="squares" size="xs" />
            {course.level[locale]}
          </Flex>
        </Flex>

        <Flex flex={1} />

        <Flex
          fillWidth
          horizontal="space-between"
          vertical="center"
          gap="12"
          paddingTop="12"
          borderTop="neutral-alpha-weak"
        >
          {course.free ? (
            <Tag size="m" variant="success" prefixIcon="play" label={t["courses.free"]} />
          ) : course.price && course.status !== "soon" ? (
            <Flex gap="8" vertical="end" wrap>
              <Text variant="heading-strong-m">{formatPrice(course.price.current, locale)}</Text>
              {course.price.original && (
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  className={styles.priceOld}
                  paddingBottom="2"
                >
                  {formatPrice(course.price.original, locale)}
                </Text>
              )}
            </Flex>
          ) : (
            <Text variant="label-default-s" onBackground="neutral-weak">
              {t["courses.status.soon"]}
            </Text>
          )}
          <SmartLink suffixIcon="arrowRight" href={href} style={{ margin: 0 }}>
            <Text variant="body-default-s">
              {course.free
                ? t["courses.watch"]
                : course.status === "soon"
                  ? t["courses.notify"]
                  : t["courses.details"]}
            </Text>
          </SmartLink>
        </Flex>
      </Column>
    </div>
  );
}
