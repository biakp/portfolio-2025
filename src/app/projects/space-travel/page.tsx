"use client";

import React from "react";
import ProjectPageTemplate, {
  ProjectPageData,
} from "@/components/templates/ProjectPageTemplate";
import { Code, Smartphone, Zap, Layers, Shield, Palette } from "lucide-react";

const spaceTravelProjectData: ProjectPageData = {
  title: "Space Travel",
  subtitle: "Explore the Cosmos",
  description:
    "Space Travel is a full-stack web application that allows users to document and explore their imaginary space journeys. Built as a comprehensive study project, it demonstrates modern web development practices with a beautiful, space-themed interface.",
  techStack: [
    "React",
    "Vite",
    "Tailwind CSS",
    "Typescript",
    "Mongo DB",
    "Fastify",
    "Ollama  (LLaMA 3.2)",
    "Prisma ORM",
    "NASA API",
    "Insomnia",
    "Zod",
  ],
  features: [
    {
      icon: Zap,
      title: "AI-Powered Journey Logs",
      description:
        "Leverage Ollama (LLaMA 3.2) for generating creative journey narratives, making each space adventure unique and engaging.",
      color: "text-primary",
    },
    {
      icon: Layers,
      title: "Rich Content Management",
      description:
        "Users can create, edit, and organize their space journeys with images, descriptions, all managed via a modern, responsive UI.",
      color: "text-accent",
    },
    {
      icon: Smartphone,
      title: "Responsive & Smooth Experience",
      description: "Built with a desktop-first approach and mobile support.",
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "Space-Themed UI",
      description:
        "Elegant, dark-mode friendly design with cosmic visuals, and a focus on accessibility and visual delight.",
      color: "text-accent",
    },
    {
      icon: Shield,
      title: "Secure & Performant Backend",
      description:
        "Fastify server with Prisma ORM and MongoDB ensures fast, secure data handling. Zod provides robust validation for all API endpoints.",
      color: "text-primary",
    },
    {
      icon: Code,
      title: "API Integrations",
      description:
        "Integrates NASA API for real-time space imagery and facts, enriching the user experience with authentic cosmic data.",
      color: "text-accent",
    },
  ],
  technicalDetails: [
    {
      title: "Architecture & Stack",
      content:
        "React.js 18 with TypeScript for frontend, Vite for rapid development and Tailwind CSS for styling. Backend powered by Fastify, Prisma ORM, and MongoDB. AI features via Ollama (LLaMA 3.2).",
    },
    {
      title: "Data & Validation",
      content:
        "All user input and API data are validated with Zod. Prisma ORM provides type-safe database access. NASA API integration brings real-world space data into the app.",
    },
    {
      title: "Testing & API Design",
      content:
        "API endpoints tested with Insomnia. Modular codebase designed for scalability and maintainability, following modern React best practices.",
    },
    {
      title: "Accessibility",
      content:
        "Semantic HTML, ARIA attributes, and responsive design ensure accessibility.",
    },
  ],
  isCompleted: true,
  pageTitle: "Space Travel - Full Stack Web Application | Beatriz Knabben",
  metaDescription:
    "Space Travel is a full-stack web application that allows users to document and explore their imaginary space journeys. Built as a comprehensive study project, it demonstrates modern web development practices with a beautiful, space-themed interface.",
  currentPath: "/projects/space-travel",
};

export default function SpaceTravelProjectPage() {
  return <ProjectPageTemplate data={spaceTravelProjectData} />;
}
