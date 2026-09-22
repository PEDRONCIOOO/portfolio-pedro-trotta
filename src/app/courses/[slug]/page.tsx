import { notFound } from "next/navigation";
import { Column } from "@/once-ui/components";
import { CourseDetail } from "@/components/courses/CourseDetail";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { getCourse, getCourses } from "@/app/utils/courses";
import { CustomMDX } from "@/components/mdx";
import { LocaleContent } from "@/components/LocaleContent";

interface CourseParams {
  params: { slug: string };
}

export function generateStaticParams() {
  return getCourses().map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params: { slug } }: CourseParams) {
  const course = getCourse(slug);
  if (!course) return;

  const title = `${course.title.pt} — ${person.name}`;
  const description = course.description.pt;
  const ogImage = course.image
    ? `https://${baseURL}${course.image}`
    : `https://${baseURL}/og?title=${encodeURIComponent(course.title.pt)}`;

  return {
    title,
    description,
    alternates: { canonical: `https://${baseURL}/courses/${course.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/courses/${course.slug}`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export default function CoursePage({ params: { slug } }: CourseParams) {
  const course = getCourse(slug);
  if (!course) notFound();
  const { content, ...courseData } = course;

  return (
    <Column maxWidth="l" fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title.pt,
            description: course.description.pt,
            url: `https://${baseURL}/courses/${course.slug}`,
            inLanguage: "pt-BR",
            provider: { "@type": "Person", name: person.name, url: `https://${baseURL}` },
            ...(course.price && course.status !== "soon"
              ? {
                  offers: {
                    "@type": "Offer",
                    price: (course.price.current / 100).toFixed(2),
                    priceCurrency: course.price.currency,
                    availability:
                      course.status === "presale"
                        ? "https://schema.org/PreOrder"
                        : "https://schema.org/InStock",
                  },
                }
              : {}),
          }),
        }}
      />
      <CourseDetail course={courseData}>
        <LocaleContent locale="en">
          <CustomMDX source={content.en} />
        </LocaleContent>
        <LocaleContent locale="pt">
          <CustomMDX source={content.pt ?? content.en} />
        </LocaleContent>
      </CourseDetail>
    </Column>
  );
}
