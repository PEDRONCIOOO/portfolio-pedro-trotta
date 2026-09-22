"use client";

import {
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  RevealFx,
  SmartLink,
  Tag,
  Text,
} from "@/once-ui/components";
import { useLocale } from "@/i18n/LocaleContext";
import { translations } from "@/i18n/translations";
import { ReactNode } from "react";
import { Course, courseContact, formatPrice, getCategory } from "@/app/resources/courses";
import { CourseCover, courseColors } from "./CourseCover";
import { CourseVideo } from "./CourseVideo";
import styles from "./Courses.module.scss";

interface CourseDetailProps {
  course: Course;
  /** Rendered MDX body (server-side, per locale) */
  children?: ReactNode;
}

export function CourseDetail({ course, children }: CourseDetailProps) {
  const { locale } = useLocale();
  const t = translations[locale];

  const colors = courseColors(course);
  const isSoon = course.status === "soon";

  return (
    <Column fillWidth gap="xl" style={colors}>
      <SmartLink href="/courses" prefixIcon="chevronLeft" style={{ margin: 0 }}>
        <Text variant="body-default-s">{t["courses.back"]}</Text>
      </SmartLink>

      <RevealFx translateY="8" fillWidth>
        {course.video ? (
          <CourseVideo src={course.video} title={course.title[locale]} />
        ) : (
          <CourseCover course={course} large showTitle={false} />
        )}
      </RevealFx>

      <Flex fillWidth gap="xl" className={styles.detailLayout}>
        {/* Main column */}
        <Column gap="l" flex={2} minWidth={0}>
          <Column gap="12">
            <Flex gap="8" wrap>
              {course.categories.map((id) => {
                const category = getCategory(id);
                return category ? (
                  <Tag key={id} size="m" variant="neutral" prefixIcon={category.icon}>
                    {category.label[locale]}
                  </Tag>
                ) : null;
              })}
            </Flex>
            <Heading as="h1" variant="display-strong-s" wrap="balance">
              {course.title[locale]}
            </Heading>
            <Text variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
              {course.tagline[locale]}
            </Text>
          </Column>

          {children && <Column fillWidth>{children}</Column>}

          <Flex gap="24" wrap textVariant="label-default-m" onBackground="neutral-medium">
            <Flex gap="8" vertical="center">
              <Icon name="play" size="s" onBackground="brand-medium" />
              {course.lessons} {t["courses.lessons"]}
            </Flex>
            <Flex gap="8" vertical="center">
              <Icon name="clock" size="s" onBackground="brand-medium" />
              {course.duration[locale]}
            </Flex>
            <Flex gap="8" vertical="center">
              <Icon name="squares" size="s" onBackground="brand-medium" />
              {course.level[locale]}
            </Flex>
          </Flex>

          {/* Curriculum */}
          <Column gap="m" paddingTop="m">
            <Heading as="h2" variant="heading-strong-l">
              {t["courses.curriculum"]}
            </Heading>
            {course.modules.length > 0 ? (
              <Column gap="8">
                {course.modules.map((module, index) => (
                  <Flex key={index} className={styles.module} padding="16" gap="16" vertical="start">
                    <span className={styles.moduleIndex}>{String(index + 1).padStart(2, "0")}</span>
                    <Column gap="4" flex={1}>
                      <Flex horizontal="space-between" gap="12" vertical="center">
                        <Text variant="heading-strong-s">{module.title[locale]}</Text>
                        {module.duration && (
                          <Flex gap="4" vertical="center" textVariant="label-default-s" onBackground="neutral-weak">
                            <Icon name={isSoon ? "lock" : "play"} size="xs" />
                            {module.duration}
                          </Flex>
                        )}
                      </Flex>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {module.description[locale]}
                      </Text>
                    </Column>
                  </Flex>
                ))}
              </Column>
            ) : (
              <Flex className={styles.module} padding="16" gap="12" vertical="center">
                <Icon name="lock" size="s" onBackground="neutral-weak" />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {t["courses.curriculumSoon"]}
                </Text>
              </Flex>
            )}
          </Column>
        </Column>

        {/* Price card */}
        <Column flex={1} className={styles.aside}>
          <Column className={`${styles.priceCard} ${styles.sticky}`} padding="l" gap="m">
            <Tag
              size="s"
              variant={
                course.free ? "success" : isSoon ? "neutral" : course.status === "presale" ? "brand" : "success"
              }
              label={course.free ? t["courses.free"] : t[`courses.status.${course.status}`]}
            />

            {course.free ? (
              <Text variant="display-strong-s">{t["courses.free"]}</Text>
            ) : course.price && !isSoon ? (
              <Column gap="4">
                {course.price.original && (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {t["courses.from"]}{" "}
                    <span className={styles.priceOld}>{formatPrice(course.price.original, locale)}</span>
                  </Text>
                )}
                <Text variant="display-strong-s">{formatPrice(course.price.current, locale)}</Text>
              </Column>
            ) : (
              <Heading as="p" variant="heading-strong-l">
                {t["courses.status.soon"]}
              </Heading>
            )}

            {course.highlights.length > 0 && (
              <Column gap="8">
                <Text variant="label-strong-s" onBackground="neutral-medium">
                  {t["courses.includes"]}
                </Text>
                {course.highlights.map((h, i) => (
                  <Flex key={i} gap="8" vertical="center">
                    <Icon name="checkCircle" size="s" onBackground="brand-medium" />
                    <Text variant="body-default-s">{h[locale]}</Text>
                  </Flex>
                ))}
              </Column>
            )}

            {course.free ? (
            <Column gap="8" paddingTop="8">
              {course.video && (
                <Button variant="primary" size="l" fillWidth href="#video" prefixIcon="play" data-border="rounded">
                  {t["courses.watchNow"]}
                </Button>
              )}
              <Button
                variant="secondary"
                size="l"
                fillWidth
                href={courseContact.instagram}
                prefixIcon="instagram"
                data-border="rounded"
              >
                {t["courses.followInstagram"]}
              </Button>
              <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                {t["courses.freeNote"]}
              </Text>
            </Column>
            ) : (
            <Column gap="8" paddingTop="8">
              {!isSoon && (
                <Button
                  variant="primary"
                  size="l"
                  fillWidth
                  data-border="rounded"
                  {...(course.checkoutUrl
                    ? { href: course.checkoutUrl, arrowIcon: true }
                    : { disabled: true, prefixIcon: "lock" })}
                >
                  {t["courses.buy"]}
                </Button>
              )}
              <Button
                variant={isSoon ? "primary" : "secondary"}
                size="l"
                fillWidth
                href={courseContact.instagram}
                prefixIcon="instagram"
                data-border="rounded"
              >
                {t["courses.notifyInstagram"]}
              </Button>
              {!isSoon && (
                <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                  {course.checkoutUrl ? t["courses.checkoutSecure"] : t["courses.checkoutSoon"]}
                </Text>
              )}
            </Column>
            )}
          </Column>
        </Column>
      </Flex>
    </Column>
  );
}
