import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Course,
  CourseCategoryId,
  CourseStatus,
  LocalizedText,
  courseCategories,
} from "@/app/resources/courses";

// Same pattern as work/projects: one dated MDX per course, optional PT twin in /pt.
const COURSES_DIR = path.join(process.cwd(), "src", "app", "courses", "catalog");
const COURSES_DIR_PT = path.join(COURSES_DIR, "pt");

export type CourseEntry = Course & {
  content: { en: string; pt?: string };
};

type Frontmatter = Record<string, any>;

const statusOrder: Record<CourseStatus, number> = { available: 0, presale: 1, soon: 2 };
const validCategories = new Set(courseCategories.map((c) => c.id));

function readDir(dir: string) {
  if (!fs.existsSync(dir)) return new Map<string, { data: Frontmatter; content: string }>();
  const entries = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf-8"));
      return [path.basename(file, ".mdx"), { data, content }] as const;
    });
  return new Map(entries);
}

function text(en: unknown, pt: unknown): LocalizedText {
  const base = typeof en === "string" ? en : "";
  return { en: base, pt: typeof pt === "string" && pt ? pt : base };
}

function list<T>(en: T[] | undefined, pt: T[] | undefined, map: (e: T, p?: T) => any) {
  return (en ?? []).map((item, i) => map(item, pt?.[i]));
}

function toCourse(slug: string, en: Frontmatter, pt: Frontmatter = {}): Course {
  const categories = ((en.categories ?? []) as string[]).filter((c) =>
    validCategories.has(c as CourseCategoryId),
  ) as CourseCategoryId[];

  return {
    slug,
    publishedAt: en.publishedAt ?? "",
    image: en.image || undefined,
    featured: Boolean(en.featured),
    free: Boolean(en.free),
    video: en.video || undefined,
    checkoutUrl: en.checkoutUrl || undefined,
    status: (en.free
      ? "available"
      : ["available", "presale", "soon"].includes(en.status)
        ? en.status
        : "soon") as CourseStatus,
    categories: categories.length ? categories : ["beginners"],
    title: text(en.title, pt.title),
    tagline: text(en.summary, pt.summary),
    description: text(en.description ?? en.summary, pt.description ?? pt.summary),
    level: text(en.level, pt.level),
    duration: text(en.duration, pt.duration),
    lessons: Number(en.lessons ?? en.modules?.length ?? 0),
    price:
      !en.free && typeof en.price === "number"
        ? {
            current: en.price,
            original: typeof en.originalPrice === "number" ? en.originalPrice : undefined,
            currency: "BRL",
          }
        : undefined,
    releaseDate: en.releaseDate || undefined,
    highlights: list<string>(en.highlights, pt.highlights, (e, p) => text(e, p)),
    modules: list<Frontmatter>(en.modules, pt.modules, (e, p) => ({
      title: text(e.title, p?.title),
      description: text(e.description, p?.description),
      duration: e.duration,
    })),
  };
}

export function getCourses(): CourseEntry[] {
  const en = readDir(COURSES_DIR);
  const pt = readDir(COURSES_DIR_PT);

  return Array.from(en.entries())
    .filter(([, file]) => file.data.draft !== true)
    .map(([slug, file]) => {
      const ptFile = pt.get(slug);
      return {
        ...toCourse(slug, file.data, ptFile?.data),
        content: { en: file.content, pt: ptFile?.content },
      };
    })
    .sort(
      (a, b) =>
        Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
        statusOrder[a.status] - statusOrder[b.status] ||
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getCourse(slug: string) {
  return getCourses().find((course) => course.slug === slug);
}
