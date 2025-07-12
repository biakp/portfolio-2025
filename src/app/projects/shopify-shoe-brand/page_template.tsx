"use client";

import React from "react";
import ProjectPageTemplate, { ProjectPageData } from "@/components/templates/ProjectPageTemplate";
import { 
  Code,
  Smartphone,
  Zap,
  Layers,
  Shield,
  Palette
} from "lucide-react";

const shopifyProjectData: ProjectPageData = {
  title: "Shopify E-commerce",
  subtitle: "Premium Shoe Brand Store",
  description: "A custom Shopify e-commerce website for a premium shoe brand. Built with Liquid templating, SCSS, and vanilla JavaScript, featuring mobile-first design, performance optimization, and seamless user experience across all devices.",
  techStack: [
    "Shopify Liquid",
    "Dawn Theme",
    "SCSS",
    "Vanilla JavaScript",
    "Shopify Metafields",
    "Responsive Design",
    "Performance Optimization",
    "Mobile-First"
  ],
  features: [
    {
      icon: Code,
      title: "Custom Liquid Development",
      description: "Deep customization of Shopify's Dawn theme using Liquid templating, SCSS, and vanilla JavaScript with theme events for optimal performance.",
      color: "text-primary"
    },
    {
      icon: Layers,
      title: "Dynamic Sections & Blocks",
      description: "Implemented flexible CMS-like control system enabling easy content management for product pages and homepage layouts.",
      color: "text-accent"
    },
    {
      icon: Zap,
      title: "Metafields Integration",
      description: "Utilized Shopify metafields to manage custom content including product specifications, materials, and model variations.",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Applied mobile-first principles ensuring seamless experience across all devices with responsive design techniques.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Performance Optimization",
      description: "Implemented lazy loading, asset cleanup, and responsive image techniques using srcset for optimal loading times.",
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Premium UX",
      description: "Delivered a minimalist, high-end user experience focused on visual consistency and elegant design patterns.",
      color: "text-accent"
    }
  ],
  technicalDetails: [
    {
      title: "Theme Architecture",
      content: "Custom theme architecture with modular code structure, dynamic collection filtering with size availability indicators, and structured navigation system for enhanced user experience."
    },
    {
      title: "Performance & Compatibility",
      content: "Cross-browser compatibility ensuring consistent visual appearance, maintainable codebase designed for future extensibility, and advanced use of Shopify's templating architecture."
    },
    {
      title: "Project Confidentiality",
      content: "This storefront is private and not publicly accessible, but demonstrates advanced use of Shopify's Liquid templating and theme architecture to deliver a tailored, elegant online shopping experience."
    }
  ],
  githubUrl: "https://github.com/biakp",
  isCompleted: true,
  pageTitle: "Shopify E-commerce Development | Beatriz Knabben",
  metaDescription: "Custom Shopify e-commerce website for premium shoe brand. Built with Liquid, SCSS, and vanilla JavaScript with mobile-first design and performance optimization."
};

export default function ShopifyProjectPage() {
  return <ProjectPageTemplate data={shopifyProjectData} />;
}
