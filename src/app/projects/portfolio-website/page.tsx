"use client";

import React from "react";
import ProjectPageTemplate, { ProjectPageData } from "@/components/templates/ProjectPageTemplate";
import { 
  Smartphone,
  Zap,
  Palette,
  Code,
  MousePointer,
  Navigation
} from "lucide-react";

const portfolioProjectData: ProjectPageData = {
  title: "Portfolio Website",
  subtitle: "Cyberpunk Developer Portfolio",
  description: "A modern, interactive portfolio website built with Next.js 15 and featuring a cyberpunk aesthetic. Includes custom animations, mobile navigation, page transitions, interactive cursor effects, and a responsive design system with dark mode support.",
  techStack: [
    "Next.js 15",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Lenis Scroll",
    "Lucide Icons",
    "App Router",
    "React Hooks"
  ],
  features: [
    {
      icon: Palette,
      title: "Cyberpunk UI",
      description: "Custom cyberpunk aesthetic with cut-corner elements, neon glows, and consistent color scheme throughout the entire interface.",
      color: "text-primary"
    },
    {
      icon: MousePointer,
      title: "Interactive Custom Cursor",
      description: "Dynamic cursor system that responds to hoverable elements with smooth animations, text display, and contextual states for enhanced user interaction.",
      color: "text-accent"
    },
    {
      icon: Navigation,
      title: "Mobile Navigation & Transitions",
      description: "Responsive hamburger menu for mobile devices with smooth slide-in animations and seamless page transitions between routes.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Smooth Scrolling & Animations",
      description: "Lenis-powered smooth scrolling combined with Framer Motion animations for fluid, professional user experience across all interactions.",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect functionality and visual consistency across desktop, tablet, and mobile devices with adaptive layouts.",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Modern Tech Stack",
      description: "Built with Next.js 15 App Router, TypeScript for type safety, and modern React patterns following current best practices and performance optimization.",
      color: "text-accent"
    }
  ],
  technicalDetails: [
    {
      title: "Architecture & Performance",
      content: "Built with Next.js 15 App Router for optimal performance and SEO. TypeScript ensures type safety, while Tailwind CSS provides utility-first styling with custom cyberpunk components and responsive design patterns."
    },
    {
      title: "Interactive Features",
      content: "Custom cursor system with mouse tracking and hover states, mobile navigation with backdrop blur effects, smooth page transitions using Framer Motion, and Lenis for butter-smooth scrolling experience."
    },
    {
      title: "Design System",
      content: "Consistent cyberpunk aesthetic with custom clip-path geometries, animations, and a carefully crafted color palette that maintains accessibility while delivering a futuristic visual experience."
    }
  ],
  githubUrl: "https://github.com/biakp/portfolio-2025",
  demoUrl: "https://beatrizknabben.dev",
  isCompleted: true,
  pageTitle: "Portfolio Website - Cyberpunk Developer Portfolio | Beatriz Knabben",
  metaDescription: "Modern cyberpunk portfolio website built with Next.js 15, TypeScript, and Framer Motion. Features custom animations, interactive cursor, mobile navigation, and responsive design.",
  currentPath: "/projects/portfolio-website"
};

export default function PortfolioProjectPage() {
  return <ProjectPageTemplate data={portfolioProjectData} />;
}
