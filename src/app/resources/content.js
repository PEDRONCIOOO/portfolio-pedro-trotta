import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Pedro",
  lastName: "Trotta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/pedro.jpeg",
  location: "America/Campo_Grande", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
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
    link: "https://www.linkedin.com/in/pedro-forte-853b17323/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:pedroforte1911@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name} Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building the future of scalable platforms.</>,
  subline: (
    <>
      I'm <strong>Pedro Trotta</strong>, Senior Software Engineer at <InlineCode>globoo.io</InlineCode>
      <br />
      With 6+ years of experience, architecting high-performance solutions
      <br />
      for BaaS & Exchange platforms.
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
    display: true,
    title: "Current Role",
    experiences: [
      {
        company: "Globoo.io",
        timeframe: "2025 - Present",
        role: "Senior Full-Stack Engineer",
        achievements: [
          <>
            Architected and deployed microservices on <InlineCode>AWS EKS</InlineCode> with 
            <InlineCode>Docker</InlineCode> and <InlineCode>Kubernetes</InlineCode>, achieving 99.9% uptime 
            and reducing deployment time by 75%.
          </>,
          <>
            Built real-time applications using <InlineCode>Nest.js</InlineCode>, 
            <InlineCode>TypeScript</InlineCode>, and <InlineCode>WebSocket</InlineCode> APIs, 
            serving 100k+ concurrent users with sub-10ms response times.
          </>,
          <>
            Implemented CI/CD pipelines with <InlineCode>Azure Devops</InlineCode> and 
            <InlineCode>AWS CodePipeline</InlineCode>, enabling automated testing and zero-downtime deployments.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/appgloboo.png",
            alt: "App Globoo",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/appgloboo5.png",
            alt: "App Globoo",
            width: 16,
            height: 9,
          }
        ],
      }
    ],
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
        name: "Jungle Gaming",
        logo: "/images/partners/jungle-gaming.svg",
        link: "https://junglegaming.io",
        description: "Architecting high-performance solutions for iGaming & enterprise platforms.",
      },
      {
        name: "Globoo.io",
        logo: "/images/partners/globoo-logo.png",
        link: "https://globoo.io",
        description: "Digital banking & crypto exchange platform, where I lead software engineering initiatives."
      },
      {
        name: "Axia Digital",
        logo: "/images/partners/logo-axia.png",
        link: "https://axiadigitalsolutions.com/",
        description: "Digital solutions, cybersecurity, and blockchain development."
      },
      {
        name: "AsaaS",
        logo: "/images/partners/asaas-logo.webp",
        link: "https://asaas.com/",
        description: "Digital banking & financial software services"
      },
      {
        name: "Brasil Bitcoin",
        logo: "/images/partners/brasil-bitcoin.svg",
        link: "https://brasilbitcoin.com.br/",
        description: "Exchange platform for cryptocurrencies and digital assets."
      },
      {
        name: "Bybit",
        logo: "/images/partners/bybit.png",
        link: "https://bybit.com/",
        description: "Cryptocurrency exchange platform."
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies & Certifications",
    institutions: [
      {
        name: "AWS Certified Solutions Architect",
        description: <>Advanced cloud architecture and services design on Amazon Web Services.</>,
      },
      {
        name: "University of Dom Bosco",
        description: <>Bachelor's in Software Engineering with focus on distributed systems.</>,
      },
      {
        name: "Meta Frontend Developer Professional",
        description: <>Advanced React, JavaScript ES6+, and modern frontend development practices.</>,
      },
      {
        name: "Google Cloud Professional Developer",
        description: <>Cloud-native application development and containerization strategies.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Expertise",
    skills: [
      {
        title: "Frontend Technologies",
        description: <>Building modern, responsive applications with <InlineCode>React</InlineCode>, <InlineCode>Next.js</InlineCode>, <InlineCode>TypeScript</InlineCode>, and <InlineCode>Tailwind CSS</InlineCode>. Expert in state management with <InlineCode>Zustand</InlineCode> and <InlineCode>React Query</InlineCode>.</>,
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
        description: <>Developing scalable backend systems with <InlineCode>Node.js</InlineCode>, <InlineCode>Python FastAPI</InlineCode>, <InlineCode>Express.js</InlineCode>, and <InlineCode>GraphQL</InlineCode>. Database expertise in <InlineCode>PostgreSQL</InlineCode>, <InlineCode>MongoDB</InlineCode>, and <InlineCode>Redis</InlineCode>.</>,
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
        description: <>AWS cloud architecture with <InlineCode>EC2</InlineCode>, <InlineCode>Lambda</InlineCode>, <InlineCode>RDS</InlineCode>, <InlineCode>S3</InlineCode>, and <InlineCode>CloudFormation</InlineCode>. Container orchestration with <InlineCode>Docker</InlineCode> and <InlineCode>Kubernetes</InlineCode>. CI/CD with <InlineCode>GitHub Actions</InlineCode>.</>,
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
        title: "Emerging Technologies",
        description: <>AI/ML integration with <InlineCode>OpenAI API</InlineCode>, <InlineCode>LangChain</InlineCode>, and <InlineCode>TensorFlow</InlineCode>. Blockchain development with <InlineCode>Solidity</InlineCode> and <InlineCode>Web3.js</InlineCode>. Real-time features with <InlineCode>Socket.io</InlineCode> and <InlineCode>WebRTC</InlineCode>.</>,
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
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
