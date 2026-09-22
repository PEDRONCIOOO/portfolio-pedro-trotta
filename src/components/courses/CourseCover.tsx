"use client";

import classNames from "classnames";
import Image from "next/image";
import { Icon, Tag } from "@/once-ui/components";
import { useLocale } from "@/i18n/LocaleContext";
import { translations } from "@/i18n/translations";
import { Course, getCategory } from "@/app/resources/courses";
import styles from "./Courses.module.scss";

interface CourseCoverProps {
  course: Course;
  large?: boolean;
  showTitle?: boolean;
}

const statusVariant = {
  available: "success",
  presale: "brand",
  soon: "neutral",
} as const;

export function courseColors(course: Course) {
  const primary = getCategory(course.categories[0]);
  const secondary = getCategory(course.categories[1] ?? course.categories[0]);
  return {
    "--course-color": primary?.color ?? "var(--brand-solid-strong)",
    "--course-color-2": secondary?.color ?? primary?.color,
  } as React.CSSProperties;
}

export function CourseCover({ course, large = false, showTitle = true }: CourseCoverProps) {
  const { locale } = useLocale();
  const t = translations[locale];
  const category = getCategory(course.categories[0]);

  return (
    <div
      className={classNames(
        styles.cover,
        large && styles.coverLarge,
        !showTitle && styles.coverCentered,
        course.image && styles.coverHasImage,
      )}
      style={courseColors(course)}
      role="img"
      aria-label={course.title[locale]}
    >
      <Tag
        className={styles.coverStatus}
        size="s"
        variant={course.free ? "success" : statusVariant[course.status]}
        prefixIcon={course.free ? "play" : course.status === "soon" ? "clock" : undefined}
        label={course.free ? t["courses.free"] : t[`courses.status.${course.status}`]}
      />
      {course.image ? (
        <Image
          className={styles.coverImage}
          src={course.image}
          alt={course.title[locale]}
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 1200px" : "(max-width: 768px) 100vw, 400px"}
          priority={large}
        />
      ) : (
        <>
          {showTitle && <span className={styles.coverTitle}>{course.title[locale]}</span>}
          <Icon className={styles.coverIcon} name={category?.icon ?? "courses"} />
        </>
      )}
    </div>
  );
}
