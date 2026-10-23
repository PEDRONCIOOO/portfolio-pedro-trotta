import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Pedro",
  lastName: "Trotta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Engenheiro de Software Sênior",
  avatar: "/images/pedro.jpeg",
  location: "America/Campo_Grande", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  locationDisplay: "Brasil",
  languages: ["Ingles", "Portugues"],
};

const newsletter = {
  display: true,
  title: <>Inscreva-se na Newsletter de {person.firstName}</>,
  description: (
    <>
      Eu ocasionalmente escrevo sobre IA, tecnologia e compartilho pensamentos sobre a intersecao
      entre criatividade e engenharia.
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
  label: "Inicio",
  title: `Portfolio de ${person.name}`,
  description: `Pedro Trotta - Engenheiro de Software com mais de 6 anos de experiencia em React, Next.js, Node.js, AWS e solucoes cloud-native. Veja projetos, blog e portfolio profissional.`,
  headline: <>Engenharia de software que move o mundo.</>,
  subline: (
    <>
      Eu sou <strong>Pedro Trotta</strong>, Engenheiro de Software Senior com 6+ anos
      de experiencia arquitetando solucoes de alta performance para plataformas enterprise, SaaS e transporte.
    </>
  ),
  ctaText: "Ver Projetos",
  downloadCV: "Baixar CV",
};

const about = {
  label: "Sobre",
  title: "Sobre mim",
  description: `Conheca ${person.name}, ${person.role} de ${person.location}`,
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
    title: "Introducao",
    description: (
      <>
        Pedro e um engenheiro de software full-stack baseado no Brasil, especializado em tecnologias de ponta
        e solucoes cloud-native. Com expertise abrangendo frameworks frontend, arquiteturas backend,
        praticas DevOps e servicos de nuvem AWS, ele transforma requisitos de negocios complexos em
        ecossistemas de software escalaveis e de alta performance que impulsionam a inovacao.
      </>
    ),
  },
  work: {
    display: false,
    title: "Experiência",
    experiences: /** @type {Array<{company: string, timeframe: string, role: string, achievements: any[], images: any[]}>} */ ([]),
  },
  // Nova secao: Parceiros & Afiliados
  partners: {
    display: true,
    title: "Parceiros & Afiliados",
    description: (
      <>
        Eu colaboro com empresas inovadoras e equipes visionarias, entregando solucoes de alto impacto como um parceiro de tecnologia confiavel. Aqui estao algumas das organizacoes com as quais tive o orgulho de trabalhar:
      </>
    ),
    companies: [
      {
        name: "Axia Digital",
        logo: "/images/partners/logo-axia.png",
        link: "https://axiadigitalsolutions.com/",
        description: "Soluções digitais, cibersegurança e desenvolvimento blockchain onde liderei iniciativas de engenharia de software.",
        glowColor: "#00d4ff"
      },
      {
        name: "CVM",
        logo: "/images/partners/cvm.png",
        link: "https://www.gov.br/cvm/pt-br",
        description: "A Comissao de Valores Mobiliarios e a autoridade do mercado de valores mobiliarios no Brasil. Ela regula os mercados de capitais no Brasil e todos os seus participantes.",
        glowColor: "#4ade80"
      },
      {
        name: "Tokeniza",
        logo: "/images/partners/tokeniza.png",
        link: "https://tokeniza.com.br/",
        description: "Arquitetando solucoes de alta performance para solucoes BaaS incluindo PIX globalmente.",
        glowColor: "#ffffff"
      },
      {
        name: "AsaaS",
        logo: "/images/partners/asaas-logo.webp",
        link: "https://asaas.com/",
        description: "Servicos de banco digital e software financeiro",
        glowColor: "#0432ff"
      },
      {
        name: "Brasil Bitcoin",
        logo: "/images/partners/brasil-bitcoin.svg",
        link: "https://brasilbitcoin.com.br/",
        description: "Plataforma de exchange para criptomoedas e ativos digitais.",
        glowColor: "#0babf5"
      },
      {
        name: "Bybit",
        logo: "/images/partners/bybit.png",
        link: "https://bybit.com/",
        description: "Plataforma de exchange de criptomoedas.",
        glowColor: "#fbbf24"
      },
    ],
  },
  studies: {
    display: true,
    title: "Estudos & Certificacoes",
    institutions: [
      {
        name: "CS50: Introduction to Computer Science — Harvard University",
        description: <>Ciência da computação e programação pelo curso referência de Harvard (edX, 2020).</>,
      },
      {
        name: "Certified Scrum Master (CSM) — Scrum Alliance",
        description: <>Gestão ágil de projetos e certificação em metodologia Scrum (2021).</>,
      },
      {
        name: "Power BI Data Analyst — Microsoft Learn",
        description: <>Análise de dados, visualização e business intelligence com Microsoft Power BI (2022).</>,
      },
      {
        name: "Full Stack Web Development — Rocketseat",
        description: <>Desenvolvimento full-stack com React, Node.js e tecnologias web modernas (2022).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Expertise Tecnica",
    skills: [
      {
        title: "Tecnologias Frontend",
        description: <>Construindo aplicações modernas e responsivas com <InlineCode>Angular</InlineCode>, <InlineCode>React</InlineCode>, <InlineCode>Next.js</InlineCode>, <InlineCode>TypeScript</InlineCode> e <InlineCode>Tailwind CSS</InlineCode>. Gerenciamento de estado com <InlineCode>NgRx</InlineCode>, <InlineCode>Zustand</InlineCode> e <InlineCode>React Query</InlineCode>. Bibliotecas de componentes com <InlineCode>Radix UI</InlineCode> e arquitetura de <InlineCode>Micro-frontends</InlineCode>.</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Aplicacao React Moderna",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Dashboard TypeScript",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & APIs",
        description: <>Desenvolvendo sistemas backend escaláveis com <InlineCode>Node.js</InlineCode>, <InlineCode>NestJS</InlineCode>, <InlineCode>Express.js</InlineCode>, <InlineCode>Java</InlineCode> e <InlineCode>Spring Boot</InlineCode>. Expertise em bancos de dados <InlineCode>PostgreSQL</InlineCode>, <InlineCode>MongoDB</InlineCode> e <InlineCode>Redis</InlineCode>. Mensageria com <InlineCode>RabbitMQ</InlineCode>, ORM com <InlineCode>Prisma</InlineCode> e <InlineCode>WebSockets</InlineCode> para tempo real.</>,
        images: [
          {
            src: "/images/projects/project-01/harada-ai.png",
            alt: "Arquitetura de APIs",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/harada-ai2.png",
            alt: "Design de Microsservicos",
            width: 16,
            height: 9,
          },
        ]
      },
      {
        title: "Cloud & DevOps",
        description: <>Arquitetura cloud em <InlineCode>AWS</InlineCode> e <InlineCode>GCP</InlineCode>. Orquestração de containers com <InlineCode>Docker</InlineCode> e <InlineCode>Kubernetes</InlineCode>. Infraestrutura como código com <InlineCode>Terraform</InlineCode>. CI/CD com <InlineCode>GitHub Actions</InlineCode>. Gestão de segredos com <InlineCode>HashiCorp Vault</InlineCode>. Monitoramento & Observabilidade.</>,
        images: [
          {
            src: "/images/projects/project-01/cloud-banner.jpg",
            alt: "Infraestrutura de Nuvem AWS",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Testes & Práticas",
        description: <>Testes automatizados com <InlineCode>Jest</InlineCode> e <InlineCode>Cypress</InlineCode>. Estratégias de testes unitários e de integração. <InlineCode>System Design</InlineCode>, <InlineCode>Code Review</InlineCode> e metodologia <InlineCode>Agile/Scrum</InlineCode>. Arquitetura Event-Driven e padrões de Microsserviços.</>,
        images: [
          {
            src: "/images/projects/project-01/blockchain.jpg",
            alt: "Projeto de Integracao com IA",
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
  title: "Escrevendo sobre design e tecnologia...",
  description: `Leia o que ${person.name} tem feito recentemente`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Trabalho",
  title: "Meus projetos",
  description: `Projetos de design e desenvolvimento por ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galeria",
  title: "Minha galeria de fotos",
  description: `Uma colecao de fotos por ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "Fotografia do portfolio de Pedro Trotta 1",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "Espaco de trabalho de engenharia de software",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "Ambiente de tecnologia e desenvolvimento",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "Configuracao criativa do espaco de trabalho",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "Ambiente de codificacao e ferramentas",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "Vitrine de projetos e desenvolvimento",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "Colaboracao em equipe na engenharia de software",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Inovacao tecnologica e design",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "Fluxo de trabalho e arquitetura de desenvolvimento",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Infraestrutura de nuvem e DevOps",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "Projeto de desenvolvimento full-stack",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "Arquitetura e planejamento de software",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "Portfolio de engenharia de Pedro Trotta",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "Vitrine de desenvolvimento web moderno",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
