import { Column } from "@/once-ui/components";
import { CoursesCatalog } from "@/components/courses/CoursesCatalog";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { getCourses } from "@/app/utils/courses";

const title = `Cursos — ${person.name}`;
const description =
  "Cursos práticos de IA, programação e inglês para tech por Pedro Trotta, engenheiro de software sênior.";

export async function generateMetadata() {
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent("Cursos")}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://${baseURL}/courses`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/courses`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Courses() {
  // Strip MDX bodies — the catalog only needs metadata
  const courses = getCourses().map(({ content, ...course }) => course);

  return (
    <Column maxWidth="l" fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: title,
            description,
            url: `https://${baseURL}/courses`,
            itemListElement: courses.map((course, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Course",
                name: course.title.pt,
                description: course.description.pt,
                url: `https://${baseURL}/courses/${course.slug}`,
                provider: { "@type": "Person", name: person.name },
              },
            })),
          }),
        }}
      />
      <CoursesCatalog courses={courses} />
    </Column>
  );
}
