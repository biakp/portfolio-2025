"use client";

import React from "react";
import ProjectPageTemplate, { ProjectPageData } from "@/components/templates/ProjectPageTemplate";
import { 
  Code,
  Palette,
  Zap,
  Database,
  Calendar,
  User,
  TrendingUp,
  Layers
} from "lucide-react";

const trayEcommerceProjectData: ProjectPageData = {
  title: "Splendore - Tray E-commerce Theme",
  subtitle: "Premium Twig Template with Modern Architecture",
  description: "Splendore is a custom e-commerce theme developed for the Tray platform using Twig templating engine. Built with responsive design, high-performance optimization, and modern web technologies to create elegant online stores with advanced functionality and sophisticated user experiences.",
  imageUrl: "/projects/tray-ecommerce-theme.png",
  imageAlt: "Splendore - Premium Tray e-commerce theme showcasing elegant design and modern functionality",
  techStack: [
    "Twig",
    "Tray Platform",
    "SCSS/CSS3", 
    "JavaScript ES6+",
    "HTML5",
    "REST API",
    "Responsive Design",
    "Performance Optimization"
  ],
  features: [
    {
      icon: Code,
      title: "Splendore Twig Templates",
      description: "Built modular and reusable Twig templates following Tray platform best practices with custom functionality"
    },
    {
      icon: Palette,
      title: "Premium Design System",
      description: "Crafted sophisticated shopping experiences with elegant aesthetics and conversion-focused design"
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "Implemented lazy loading, image optimization, and efficient code structure"
    },
    {
      icon: Database,
      title: "Dynamic Product Catalog",
      description: "Advanced filtering, search functionality, and product variation management"
    }
  ],
  stats: [
    {
      label: "Development Year",
      value: "2023",
      description: "Latest e-commerce standards",
      icon: Calendar
    },
    {
      label: "Project Type",
      value: "E-commerce",
      description: "Premium theme development",
      icon: User
    },
    {
      label: "Performance",
      value: "Optimized",
      description: "Fast loading & conversion focused",
      icon: TrendingUp
    },
    {
      label: "Architecture",
      value: "Modular",
      description: "Reusable Twig components",
      icon: Layers
    }
  ],
  technicalDetails: [
    {
      title: "Technical Highlights",
      content: "Custom Twig templates with inheritance and macros, SCSS architecture with BEM methodology, JavaScript ES6+ with modular approach, and REST API integration for dynamic content."
    },
    {
      title: "Business Impact",
      content: "Improved conversion rates through UX optimization, faster loading times with performance optimization, mobile-first responsive design, and SEO-optimized structure and markup."
    },
    {
      title: "Platform Integration",
      content: "Seamless integration with Tray's native features including payment gateways, inventory management, and customer analytics. Built to enhance conversion rates and provide an exceptional shopping experience."
    }
  ],
  githubUrl: "",
  demoUrl: "#demo",
  isCompleted: true,
  pageTitle: "Splendore - Premium Tray E-commerce Theme | Portfolio",
  metaDescription: "Custom e-commerce theme for Tray platform built with Twig, featuring responsive design, performance optimization, and modern web technologies.",
  currentPath: "/projects/tray-ecommerce"
};

export default function TrayEcommercePage() {
  return <ProjectPageTemplate data={trayEcommerceProjectData} />;
}
