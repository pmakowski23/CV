import { profile, sidebarSections, work } from "./config";

export const profileBlind = {
  name: "Patryk",
  role: profile.role,
  summary: profile.summary,
} as const;

export const sidebarSectionsBlind = sidebarSections.map((section) =>
  section.title === "Tech stack"
    ? {
        ...section,
        items: ["AI Tooling (Cursor, Agents)", ...section.items],
      }
    : section
);

const [latestRole, ...remainingWork] = work;

export const workBlind = [
  {
    ...latestRole,
    tech: "AI: Cursor AI, Agentic Workflows, Spec-first Development, LLM Pipelines<br>React 19, TanStack Query, React Router, React Hook Form, Zod<br>NestJS, TypeORM, PostgreSQL, Redis, Keycloak, Azure Event Hubs + Avro, Docker",
    bullets: [
      "Practiced spec-first development by defining technical specs and API contracts before implementation, then using AI tooling to generate, validate, and iterate on those specs from requirements.",
      "Adopted agentic AI workflows (Cursor AI and multi-step agents) for rapid prototyping, cross-stack code generation, and complex refactoring.",
      "Integrated AI-assisted code review into the PR workflow to catch edge cases and maintain consistency before final human review.",
      "Leveraged AI to bootstrap unit and integration test scenarios, improving coverage and reducing repetitive test authoring time.",
      "Architected an AI-powered DAG pipeline with LLM-assisted extraction and classification to analyze thousands of standards across organizations.",
      "Built intelligent scraping pipelines with AI-assisted extraction to convert unstructured content into structured datasets.",
      "Designed a modular NestJS backend with fine-grained RBAC via Keycloak; migrated org/project metadata to Keycloak groups, attributes, and realm roles.",
      "Implemented Redis caching and secure token storage with health checks and resilient, observable infrastructure.",
      "Standardized APIs with Swagger/OpenAPI and automated typed client generation for the frontend.",
      "Established an event-driven foundation using Azure Event Hubs with Avro/Schema Registry.",
      "Built a modern React app with role-aware UX, complex RHF+Zod forms (including autosave), and high-performance data views using TanStack Query and virtualization.",
    ],
  },
  ...remainingWork,
];
