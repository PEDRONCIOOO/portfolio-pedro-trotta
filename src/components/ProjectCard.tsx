"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";
import { VideoPlayer } from "./VideoPlayer";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  videos?: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  videos = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Column
      fillWidth
      gap="s"
      style={{
        background: "var(--neutral-alpha-weak)",
        borderRadius: "var(--radius-l)",
        border: "1px solid var(--neutral-alpha-medium)",
        overflow: "hidden",
        transition: "all 0.2s ease",
        cursor: "pointer"
      }}
    >
      {videos && videos.length > 0 ? (
        <VideoPlayer
          src={videos[0]}
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            objectFit: "cover",
          }}
        />
      ) : (
        <Carousel
          sizes="(max-width: 960px) 100vw, 300px"
          images={images.map((image) => ({
            src: image,
            alt: title,
          }))}
          style={{
            aspectRatio: "16 / 9",
          }}
        />
      )}

      <Column gap="s" padding="l">
        {title && (
          <Heading as="h3" wrap="balance" variant="heading-strong-s">
            {title}
          </Heading>
        )}

        {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="s" reverse />}

        {description?.trim() && (
          <Text
            wrap="balance"
            variant="body-default-xs"
            onBackground="neutral-weak"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden"
            }}
          >
            {description}
          </Text>
        )}

        <Flex gap="12" wrap marginTop="s">
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-xs">Read case study</Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-xs">View project</Text>
            </SmartLink>
          )}
        </Flex>
      </Column>
    </Column>
  );
};
