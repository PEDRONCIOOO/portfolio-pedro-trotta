"use client";

import React, { useState, useEffect } from "react";
import { Flex, Text } from "@/once-ui/components";
import styles from "./CodeTerminal.module.scss";

const CodeTerminal: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const codeContentRef = React.useRef<HTMLDivElement>(null);

  const renderCodeLine = (line: string, lineNumber: number) => {
    let processedLine = line
      .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
      .replace(/\b(interface|async|function|const|await|return|export|class|extends|implements|import|from|type|enum)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b(Developer|SeniorEngineer|TechStack|CloudArchitect|string|boolean|number)\b/g, '<span class="type">$1</span>')
      .replace(/(\w+)(?=\s*:)/g, '<span class="property">$1</span>')
      .replace(/\b(true|false)\b(?![^<]*>)/g, '<span class="boolean">$1</span>')
      .replace(/(\w+)(?=\()/g, '<span class="function">$1</span>')
      .replace(/(\/\/.*$)/g, '<span class="comment">$1</span>')
      .replace(/\b(\d+)\b(?![^<]*<\/span>)/g, '<span class="number">$1</span>');

    return processedLine;
  };

  const fullCode = [
    "// Pedro Trotta - Senior Software Engineer Profile",
    "",
    "interface SeniorEngineer {",
    '  name: "Pedro Trotta";',
    '  role: "Senior Full-Stack Engineer";',
    '  company: "Globoo";',
    '  location: "Campo Grande - MS";',
    '  experience: "6+ years";',
    "}",
    "",
    "class TechStack {",
    "  frontend = {",
    '    frameworks: ["React", "Next.js", "Nest.js", "TypeScript"],',
    '    styling: ["Tailwind CSS", "SCSS", "Styled Components"],',
    '    state: ["Zustand", "React Query", "Context API"]',
    "  };",
    "",
    "  backend = {",
    '    languages: ["Node.js", "Python", "TypeScript"],',
    '    frameworks: ["Express.js", "FastAPI", "GraphQL"],',
    '    databases: ["PostgreSQL", "MongoDB", "Redis"]',
    "  };",
    "",
    "  cloud = {",
    '    aws: ["EC2", "Lambda", "RDS", "S3", "CloudFormation"],',
    '    containers: ["Docker", "Kubernetes", "EKS"],',
    '    cicd: ["GitHub Actions", "AWS CodePipeline"]',
    "  };",
    "",
    "  emerging = {",
    '    ai: ["OpenAI API", "LangChain", "TensorFlow"],',
    '    blockchain: ["Solidity", "Web3.js"],',
    '    realtime: ["Socket.io", "WebRTC", "WebSocket"]',
    "  };",
    "}",
    "",
    "async function buildScalablePlatforms() {",
    "  const microservices = await deployOnKubernetes();",
    "  const frontend = createReactApplications();",
    "  const apis = designRESTfulEndpoints();",
    "",
    "  return {",
    "    performance: microservices.uptime > 99.9,",
    "    scalability: frontend.users > 500000,",
    "    reliability: apis.responseTime < 10",
    "  };",
    "}",
    "",
    "export const pedroTrotta: SeniorEngineer = {",
    "  passionate: true,",
    '  expertise: "iGaming & Enterprise Platforms",',
    '  achievements: ["99.9% uptime", "500K+ users", "75% faster deployments"],',
    '  certifications: ["AWS Solutions Architect", "Professional Frontend Dev"]',
    "};"
  ];

  useEffect(() => {
    if (!isTyping) return;

    const timer = setTimeout(() => {
      if (currentLineIndex < fullCode.length) {
        const currentLine = fullCode[currentLineIndex];

        if (currentCharIndex < currentLine.length) {
          // Typing current line
          const partialLine = currentLine.substring(0, currentCharIndex + 1);
          setDisplayedLines(prev => {
            const newLines = [...prev];
            newLines[currentLineIndex] = partialLine;
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Line complete, move to next line
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          if (currentLineIndex + 1 < fullCode.length) {
            setDisplayedLines(prev => [...prev, ""]);
          }
          // Auto scroll to bottom when line is complete
          setTimeout(() => {
            if (codeContentRef.current) {
              codeContentRef.current.scrollTop = codeContentRef.current.scrollHeight;
            }
          }, 10);
        }
      } else {
        // Typing complete
        setIsTyping(false);
      }
    }, Math.random() * 30 + 20); // Random speed between 20-50ms for realistic typing

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentLineIndex, isTyping, fullCode]);

  // Initialize first line
  useEffect(() => {
    if (displayedLines.length === 0) {
      setDisplayedLines([""]);
    }
  }, []);

  return (
    <Flex
      className={styles.terminal}
      direction="column"
      fillWidth
      fillHeight
      radius="l"
      border="neutral-alpha-weak"
      background="neutral-strong"
      overflow="hidden"
    >
      {/* Terminal Header */}
      <Flex
        paddingX="16"
        paddingY="12"
        background="neutral-alpha-weak"
        horizontal="space-between"
        vertical="center"
      >
        <Flex gap="8" vertical="center">
          <Flex gap="4">
            <div className={styles.terminalButton} style={{backgroundColor: '#ff5f57'}}></div>
            <div className={styles.terminalButton} style={{backgroundColor: '#ffbd2e'}}></div>
            <div className={styles.terminalButton} style={{backgroundColor: '#28ca42'}}></div>
          </Flex>
          <Text variant="body-default-s" onBackground="neutral-weak">
            developer.ts
          </Text>
        </Flex>
        <Text variant="body-default-xs" onBackground="neutral-weak">
          TypeScript
        </Text>
      </Flex>

      {/* Terminal Content */}
      <Flex
        direction="column"
        padding="20"
        fillHeight
        gap="2"
        className={styles.codeContent}
        ref={codeContentRef}
      >
        {displayedLines.map((line, index) => (
          <Flex key={index} gap="16" vertical="center">
            <Text
              variant="body-default-xs"
              className={styles.lineNumber}
            >
              {String(index + 1).padStart(2, ' ')}
            </Text>
            <div
              className={styles.codeLine}
              dangerouslySetInnerHTML={{
                __html: line ? renderCodeLine(line, index + 1) : ' '
              }}
            />
          </Flex>
        ))}

        {/* Cursor - show only when typing and at current line */}
        {isTyping && (
          <Flex gap="16" vertical="center" className={styles.cursor}>
            <Text
              variant="body-default-xs"
              className={styles.lineNumber}
            >
              {String(displayedLines.length).padStart(2, ' ')}
            </Text>
            <div className={styles.codeLine}>
              <span className={styles.blinkingCursor}>|</span>
            </div>
          </Flex>
        )}
      </Flex>

      {/* Terminal Footer */}
      <Flex
        paddingX="16"
        paddingY="8"
        background="neutral-alpha-weak"
        horizontal="space-between"
        vertical="center"
        className={styles.footer}
      >
        <Text variant="body-default-xs" onBackground="neutral-weak">
          TypeScript
        </Text>
        <Flex gap="12">
          <Text variant="body-default-xs" onBackground="neutral-weak">
            UTF-8
          </Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            Ln 25, Col 2
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { CodeTerminal };