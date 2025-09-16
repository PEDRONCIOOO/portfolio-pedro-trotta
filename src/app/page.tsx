import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Grid, Icon } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { CodeTerminal } from "@/components/CodeTerminal";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column fillWidth gap="0" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <Flex fillWidth fillHeight horizontal="center" vertical="center" style={{ minHeight: "100vh" }}>
        <Grid
          columns="2"
          tabletColumns="1"
          mobileColumns="1"
          gap="xl"
          maxWidth="xl"
          fillWidth
        >
          {/* Left Column - Text Content */}
          <Column gap="xl" horizontal="start" vertical="center" fillHeight>
            <Column gap="l">
              <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="s">
                <Heading wrap="balance" variant="display-strong-xl" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  {home.headline}
                </Heading>
              </RevealFx>

              <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
                <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
                  {home.subline}
                </Text>
              </RevealFx>
            </Column>

            <RevealFx translateY="12" delay={0.4} horizontal="start">
              <Flex gap="12" wrap mobileDirection="column">
                <Button
                  id="view-projects"
                  data-border="rounded"
                  href="/work"
                  variant="primary"
                  size="l"
                  arrowIcon
                >
                  {home.ctaText}
                </Button>

                <Button
                  id="download-cv"
                  data-border="rounded"
                  href="/cv/cv-trotta.pdf"
                  variant="secondary"
                  size="l"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Flex gap="8" vertical="center">
                    <Icon name="arrowUpRightFromSquare" size="s" />
                    {home.downloadCV}
                  </Flex>
                </Button>

                <Button
                  id="about"
                  data-border="rounded"
                  href="/about"
                  variant="tertiary"
                  size="l"
                >
                  <Flex gap="8" vertical="center">
                    {about.avatar.display && (
                      <Avatar
                        style={{ marginLeft: "-0.25rem", marginRight: "0.25rem" }}
                        src={person.avatar}
                        size="s"
                      />
                    )}
                    {about.title}
                  </Flex>
                </Button>
              </Flex>
            </RevealFx>

            {/* Technology Icons */}
            <RevealFx translateY="16" delay={0.6} horizontal="start">
              <Flex gap="16" wrap vertical="center">
                <Icon name="react" size="l" onBackground="brand-medium" tooltip="React" />
                <Icon name="nextjs" size="l" onBackground="brand-medium" tooltip="Next.js" />
                <Icon name="typescript" size="l" onBackground="brand-medium" tooltip="TypeScript" />
                <Icon name="nodejs" size="l" onBackground="brand-medium" tooltip="Node.js" />
              </Flex>
            </RevealFx>
          </Column>

          {/* Right Column - Code Terminal */}
          <RevealFx translateY="20" delay={0.8} fillWidth>
            <CodeTerminal />
          </RevealFx>
        </Grid>
      </Flex>

      {/* Content Section */}
      <Column maxWidth="xl" gap="xl" horizontal="center" paddingY="xl">
        {/* Projects Section */}
        <RevealFx translateY="16" delay={1.0}>
          <Column fillWidth gap="xl" horizontal="center">
            <Column gap="m" horizontal="center" paddingX="l">
              <Heading
                as="h2"
                variant="display-strong-xl"
                wrap="balance"
                style={{ textAlign: "center" }}
              >
                Selected{" "}
                <span style={{
                  background: "linear-gradient(135deg, #00e5ff, #00acc1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  work
                </span>
              </Heading>
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                wrap="balance"
                style={{ textAlign: "center", maxWidth: "600px" }}
              >
                From e-commerce giants to crypto exchanges, each project represents a unique challenge conquered
              </Text>
            </Column>
            <Projects />
          </Column>
        </RevealFx>

        {/* Blog Section */}
        {routes["/blog"] && (
          <Flex fillWidth gap="24" mobileDirection="column">
            <Flex flex={1} paddingLeft="l">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Flex>
            <Flex flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Flex>
          </Flex>
        )}

        {/* Newsletter */}
        {newsletter.display && <Mailchimp newsletter={newsletter} />}
      </Column>
    </Column>
  );
}
