import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Pedro",
  lastName: "Trotta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Software Engineer",
  avatar: "/images/pedro.jpeg",
  location: "America/Campo_Grande", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  locationDisplay: "Brasil",
  languages: ["English", "Portuguese"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about ai, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PEDRONCIOOO",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/pedro-trotta-853b17323/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/pedronkiooo",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/devtrotta",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@devtrotta",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:contato@trotta.dev",
  },
];

const home = {
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Pedro Trotta - Software Engineer with 6+ years of experience in React, Next.js, Node.js, AWS, and cloud-native solutions. View projects, blog, and professional portfolio.`,
  headline: <>Engineering software that moves the world.</>,
  subline: (
    <>
      I'm <strong>Pedro Trotta</strong>, a Senior Software Engineer with 6+ years
      of experience architecting high-performance solutions for enterprise, SaaS & transportation platforms.
    </>
  ),
  ctaText: "View Projects",
  downloadCV: "Download CV",
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/pedro-trotta",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Pedro is a Brazilian-based full-stack software engineer specializing in cutting-edge technologies 
        and cloud-native solutions. With expertise spanning frontend frameworks, backend architectures, 
        DevOps practices, and AWS cloud services, he transforms complex business requirements into 
        scalable, high-performance software ecosystems that drive innovation.
      </>
    ),
  },
  work: {
    display: false,
    title: "Experience",
    experiences: /** @type {Array<{company: string, timeframe: string, role: string, achievements: any[], images: any[]}>} */ ([]),
  },
  // Nova seção: Parceiros & Afiliados
  partners: {
    display: true,
    title: "Partners & Affiliates",
    description: (
      <>
        I collaborate with innovative companies and visionary teams, delivering high-impact solutions as a trusted technology partner. Here are some of the organizations I’ve proudly worked with:
      </>
    ),
    companies: [
      {
        name: "Axia Digital",
        logo: "/images/partners/logo-axia.png",
        link: "https://axiadigitalsolutions.com/",
        description: "Digital solutions, cybersecurity, and blockchain development where I led software engineering initiatives.",
        glowColor: "#00d4ff"
      },
      {
        name: "CVM",
        logo: "/images/partners/cvm.png",
        link: "https://www.gov.br/cvm/pt-br",
        description: "The Securities and Exchange Commission of Brazil is the securities market authority in Brazil. It regulates the capital markets in Brazil and all of its participants.",
        glowColor: "#4ade80"
      },
      {
        name: "Tokeniza",
        logo: "/images/partners/tokeniza.png",
        link: "https://tokeniza.com.br/",
        description: "Architecting high-performance solutions for baas solutions including PIX globally.",
        glowColor: "#ffffff"
      },
      {
        name: "AsaaS",
        logo: "/images/partners/asaas-logo.webp",
        link: "https://asaas.com/",
        description: "Digital banking & financial software services",
        glowColor: "#0432ff"
      },
      {
        name: "Brasil Bitcoin",
        logo: "/images/partners/brasil-bitcoin.svg",
        link: "https://brasilbitcoin.com.br/",
        description: "Exchange platform for cryptocurrencies and digital assets.",
        glowColor: "#0babf5"
      },
      {
        name: "Bybit",
        logo: "/images/partners/bybit.png",
        link: "https://bybit.com/",
        description: "Cryptocurrency exchange platform.",
        glowColor: "#fbbf24"
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies & Certifications",
    institutions: [
      {
        name: "CS50: Introduction to Computer Science — Harvard University",
        description: <>Foundational computer science and programming through Harvard's flagship course (edX, 2020).</>,
      },
      {
        name: "Certified Scrum Master (CSM) — Scrum Alliance",
        description: <>Agile project management and Scrum methodology certification (2021).</>,
      },
      {
        name: "Power BI Data Analyst — Microsoft Learn",
        description: <>Data analysis, visualization, and business intelligence with Microsoft Power BI (2022).</>,
      },
      {
        name: "Full Stack Web Development — Rocketseat",
        description: <>Full-stack development with React, Node.js, and modern web technologies (2022).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Frontend Technologies",
        description: <>Building modern, responsive applications with <InlineCode>Angular</InlineCode>, <InlineCode>React</InlineCode>, <InlineCode>Next.js</InlineCode>, <InlineCode>TypeScript</InlineCode>, and <InlineCode>Tailwind CSS</InlineCode>. State management with <InlineCode>NgRx</InlineCode>, <InlineCode>Zustand</InlineCode>, and <InlineCode>React Query</InlineCode>. Component libraries with <InlineCode>Radix UI</InlineCode> and <InlineCode>Micro-frontends</InlineCode> architecture.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Modern React Application",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "TypeScript Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & APIs",
        description: <>Developing scalable backend systems with <InlineCode>Node.js</InlineCode>, <InlineCode>NestJS</InlineCode>, <InlineCode>Express.js</InlineCode>, <InlineCode>Java</InlineCode>, and <InlineCode>Spring Boot</InlineCode>. Database expertise in <InlineCode>PostgreSQL</InlineCode>, <InlineCode>MongoDB</InlineCode>, and <InlineCode>Redis</InlineCode>. Messaging with <InlineCode>RabbitMQ</InlineCode>, ORM with <InlineCode>Prisma</InlineCode>, and <InlineCode>WebSockets</InlineCode> for real-time features.</>,
        images: [
          {
            src: "/images/projects/project-01/harada-ai.png",
            alt: "API Architecture",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/harada-ai2.png",
            alt: "Microservices Design",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        title: "Cloud & DevOps",
        description: <>Cloud architecture on <InlineCode>AWS</InlineCode> and <InlineCode>GCP</InlineCode>. Container orchestration with <InlineCode>Docker</InlineCode> and <InlineCode>Kubernetes</InlineCode>. Infrastructure as code with <InlineCode>Terraform</InlineCode>. CI/CD with <InlineCode>GitHub Actions</InlineCode>. Secrets management with <InlineCode>HashiCorp Vault</InlineCode>. Monitoring & Observability.</>,
        images: [
          {
            src: "/images/projects/project-01/cloud-banner.jpg",
            alt: "AWS Cloud Infrastructure",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Testing & Practices",
        description: <>Automated testing with <InlineCode>Jest</InlineCode> and <InlineCode>Cypress</InlineCode>. Unit & Integration testing strategies. <InlineCode>System Design</InlineCode>, <InlineCode>Code Review</InlineCode>, and <InlineCode>Agile/Scrum</InlineCode> methodology. Event-Driven Architecture and Microservices patterns.</>,
        images: [
          {
            src: "/images/projects/project-01/blockchain.jpg",
            alt: "AI Integration Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "Pedro Trotta portfolio photography 1",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "Software engineering workspace",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "Technology and development environment",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "Creative workspace setup",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "Coding environment and tools",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "Project showcase and development",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "Team collaboration in software engineering",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Technology innovation and design",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "Development workflow and architecture",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Cloud infrastructure and DevOps",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "Full-stack development project",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "Software architecture and planning",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "Pedro Trotta engineering portfolio",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "Modern web development showcase",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
