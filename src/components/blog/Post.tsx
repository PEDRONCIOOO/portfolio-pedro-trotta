"use client";

import { Column, Flex, Heading, SmartImage, SmartLink, Tag, Text } from "@/once-ui/components";
import styles from "./Posts.module.scss";
import { formatDate } from "@/app/utils/formatDate";
import { useLocale } from "@/i18n/LocaleContext";

const tagsPt: Record<string, string> = {
  Career: "Carreira",
  Journal: "Diário",
  Technology: "Tecnologia",
};

interface PostProps {
  post: any;
  ptPost?: any;
  thumbnail: boolean;
}

export default function Post({ post, ptPost, thumbnail }: PostProps) {
  const { locale } = useLocale();
  const isPt = locale === "pt";
  const title = (isPt && ptPost?.metadata.title) || post.metadata.title;
  const tag = post.metadata.tag;
  const tagLabel = isPt ? (tagsPt[tag] ?? ptPost?.metadata.tag ?? tag) : tag;

  return (
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href={`/blog/${post.slug}`}
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="12"
        paddingX="16"
        gap="32"
      >
        {post.metadata.image && thumbnail && (
          <SmartImage
            priority
            maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src={post.metadata.image}
            alt={(isPt ? "Miniatura de " : "Thumbnail of ") + title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            {title}
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt, false, locale)}
          </Text>
          {tag && typeof tag === "string" && (
            <Tag className="mt-8" label={tagLabel} variant="neutral" />
          )}
        </Column>
      </Flex>
    </SmartLink>
  );
}
