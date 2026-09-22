// Courses — shared types, categories and client-safe helpers.
// Course content itself lives in MDX files (same pattern as work/projects):
//   src/app/courses/catalog/<slug>.mdx      -> English (base, holds numbers/prices)
//   src/app/courses/catalog/pt/<slug>.mdx   -> Portuguese (optional, text overrides)
// Free videos use the same format with `free: true` and `video: <url>`.
// Loaded server-side by src/app/utils/courses.ts. Prices are in cents (BRL).

export type CourseLocale = "en" | "pt";
export type LocalizedText = { en: string; pt: string };

export type CourseCategoryId = "ai" | "beginners" | "developers" | "english";
export type CourseStatus = "available" | "presale" | "soon";

export interface CourseCategory {
  id: CourseCategoryId;
  label: LocalizedText;
  description: LocalizedText;
  icon: string;
  color: string;
}

export interface CourseModule {
  title: LocalizedText;
  description: LocalizedText;
  duration?: string; // e.g. "20 min"
}

export interface Course {
  slug: string;
  title: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  categories: CourseCategoryId[];
  level: LocalizedText;
  status: CourseStatus;
  /** Prices in cents. `original` renders as a strikethrough "from" price. */
  price?: { current: number; original?: number; currency: "BRL" };
  lessons: number;
  duration: LocalizedText;
  releaseDate?: string; // ISO date, shown for presale/soon
  highlights: LocalizedText[];
  modules: CourseModule[];
  featured?: boolean;
  publishedAt: string;
  image?: string;
  /** Free content: no price, shown under the "Free" tab */
  free?: boolean;
  /** YouTube URL or direct file (/videos/x.mp4) — used for free videos / previews */
  video?: string;
  /** External checkout (Kiwify, Stripe Payment Link…). Enables the buy button. */
  checkoutUrl?: string;
}

export const courseContact = {
  instagram: "https://www.instagram.com/devtrotta/",
};

export const courseCategories: CourseCategory[] = [
  {
    id: "ai",
    label: { en: "AI", pt: "IA" },
    description: {
      en: "Use artificial intelligence at work and in everyday life.",
      pt: "Use inteligência artificial no trabalho e no dia a dia.",
    },
    icon: "sparkle",
    color: "#00e5ff",
  },
  {
    id: "beginners",
    label: { en: "Beginners", pt: "Iniciantes" },
    description: {
      en: "No tech background required. Start from zero.",
      pt: "Sem precisar saber nada de tecnologia. Comece do zero.",
    },
    icon: "plant",
    color: "#34d399",
  },
  {
    id: "developers",
    label: { en: "Developers", pt: "Programadores" },
    description: {
      en: "Real-world engineering from production systems.",
      pt: "Engenharia de verdade, direto de sistemas em produção.",
    },
    icon: "code",
    color: "#a78bfa",
  },
  {
    id: "english",
    label: { en: "English", pt: "Inglês" },
    description: {
      en: "English for tech careers and international jobs.",
      pt: "Inglês para carreira em tecnologia e vagas internacionais.",
    },
    icon: "translate",
    color: "#fbbf24",
  },
];

export function getCategory(id: CourseCategoryId) {
  return courseCategories.find((category) => category.id === id);
}

export function formatPrice(cents: number, locale: CourseLocale) {
  return new Intl.NumberFormat(locale === "pt" ? "pt-BR" : "en-US", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}
