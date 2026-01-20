"use client";

import { useRef, useState } from "react";
import { Column, Flex, Text, SmartImage, IconButton } from "@/once-ui/components";
import styles from "./PartnerCard.module.scss";

interface PartnerCardProps {
  name: string;
  logo: string;
  link: string;
  description: string;
  glowColor: string;
}

export function PartnerCard({ name, logo, link, description, glowColor }: PartnerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={styles.card}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        "--glow-color": glowColor,
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
        "--glow-opacity": isHovered ? 1 : 0,
      } as React.CSSProperties}
    >
      <div className={styles.glowEffect} />
      <Column
        padding="l"
        fillWidth
        gap="m"
        className={styles.content}
      >
        <Flex fillWidth horizontal="space-between" vertical="center">
          <SmartImage
            src={logo}
            alt={name}
            width={8}
            height={8}
            radius="s"
            objectFit="contain"
          />
          <IconButton
            href={link}
            icon="arrowUpRight"
            variant="tertiary"
            size="m"
          />
        </Flex>
        <Text
          variant="body-default-s"
          onBackground="neutral-weak"
          style={{ lineHeight: "1.5" }}
        >
          {description}
        </Text>
      </Column>
    </div>
  );
}
