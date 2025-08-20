export const profile = {
  name: "Patryk Makowski",
  role: "Tech lead / Fullstack Engineer",
  email: "patryk@pmakowski.dev",
  phone: "+48 517 938 827",
  linkedin: "https://www.linkedin.com/in/patryk-makowski23/",
  location: "Warszawa / Łódź, Poland",
  avatarUrl: "/avatar.jpg",
  summary:
    "Experienced technology leader with a strong background in managing and executing user-centric projects. Skilled in fullstack development, with a passion for creating innovative, user-friendly applications. Proven ability to foster collaborative team environments, implement agile methodologies, and drive productivity.",
} as const;

export const sidebarSections = [
  {
    title: "Tech stack",
    items: [
      "HTML | CSS | SASS",
      "JS | TS",
      "React | Node.js",
      "Gatsby | Next.js | Remix",
      "Express | Socket.io",
      "TRPC",
      "REST | GraphQL",
      "Jest | Jenkins",
      "Git | Github Actions",
      "Docker",
      "Wordpress | Headless",
      "AWS | Azure",
    ],
  },
  {
    title: "Soft skills",
    items: [
      "Team leadership",
      "Project planning",
      "Stakeholder communication",
      "Conflict resolution",
      "Strategic thinking",
      "Decision-making",
      "Problem solving",
      "Ownership & accountability",
      "Agile facilitation (Scrum/Kanban)",
      "Technical proficiency",
    ],
  },
  {
    title: "Languages",
    items: ["English - C1", "Polish - Native"],
  },
];

export const work = [
  {
    period: "2025 Now",
    company: "Massive rocket",
    role: "Senior Fullstack Developer",
    tech: "React 19, TanStack Query, React Router, React Hook Form, Zod<br>NestJS, TypeORM, PostgreSQL, Redis, Keycloak, Azure Event Hubs + Avro, Docker",
    bullets: [
      "Designed a modular NestJS backend with fine-grained RBAC via Keycloak; migrated org/project metadata to Keycloak groups, attributes, and realm roles",
      "Implemented Redis caching and secure token storage with health checks and resilient, observable infrastructure",
      "Standardized APIs with Swagger/OpenAPI and automated typed client generation for the frontend",
      "Established an event-driven foundation using Azure Event Hubs with Avro/Schema Registry",
      "Built a modern React app with role-aware UX, complex RHF+Zod forms (incl. autosave), and high-performance data views using TanStack Query and virtualization",
    ],
  },
  {
    period: "2025 2025 3mo.",
    company: "Cloudflight",
    role: "Senior Developer",
    tech: "React, SASS, WebComponents, Monorepo, CI/CD",
    bullets: [
      "Helped create a Component library using React, SASS and WebComponents library Lit.js for B2B clients",
    ],
  },
  {
    period: "2022 2024",
    company: "SINOM",
    role: "Technical team lead",
    tech: "AWS, Agile, React, Tailwind, Node, Graphql, Express, CI/CD",
    bullets: [
      "Managed the project from conception to completion, ensuring timely delivery and meeting all stakeholder requirements",
      "Implemented agile methodologies and fostered a collaborative team environment to drive productivity and elevate team performance (An increase of 40% over the last six months)",
      "Developed key features with collaboration with the team",
      "Conducted regular code reviews and maintained high coding standards to ensure application quality",
    ],
  },
  {
    period: "2021 2023",
    company: "Bambit",
    role: "React developer",
    tech: "React native, TS, React, SCSS, REST, NextJs, CI/CD",
    bullets: [
      "Implemented custom and external APIs to enhance website functionalities",
      "Maintained a proactive approach to problem-solving and troubleshooting to ensure seamless project delivery",
      "Coordinated closely with designers to align visual and functional aspects of websites",
      "Demonstrated strong client communication skills by regularly presenting project updates and addressing feedback",
    ],
  },
  {
    period: "2022 2022",
    company: "Codema",
    role: "Frontend developer",
    tech: "TS, React, Jest, E2E, SCSS",
    bullets: [
      "Outsourced to Teamsharq, delivering high-quality development solutions",
      "Increased user retention by 30% within 6 months",
      "Ensured seamless operation throughout the development cycle",
      "Enhanced user interfaces by applying advanced React concepts",
    ],
  },
  {
    period: "2021 2022",
    company: "Procter & Gamble",
    role: "React Native",
    tech: "Salesforce, React native Agile, Scrum, Architecture, Design",
    bullets: [
      "Designed tailored Salesforce solutions aligned with specific business requirements and objectives",
      "Identified and resolved a Salesforce licensing issue, leading to an annual cost saving of hundreds of thousands of PLN for the company within the first 3 months of work",
      "Enhanced app performance and user experience through optimization techniques",
      "Managed data integration between React Native and Salesforce applications for seamless functionality",
    ],
  },
  {
    period: "2019 Now",
    company: "Freelancer",
    tech: "React, CSS, WordPress, Node, Client negotiations, Project management, CI/CD",
    bullets: [
      "Created solutions tailored to unique client requirements, primarily in the e-commerce domain.",
      "Led a team of developers and designers, ensuring cohesive and efficient project delivery for e-commerce projects.",
      "Orchestrated the structure of e-commerce projects, constructed data models, and devised the most suitable tech stack to meet business objectives.",
      "Transformed business needs into comprehensive project specifications through direct collaboration with clients, with a strong emphasis on e-commerce solutions.",
    ],
  },
];
