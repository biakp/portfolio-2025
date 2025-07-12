"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Modern cyberpunk portfolio website built with Next.js 15, featuring custom animations, interactive cursor effects, mobile navigation, and responsive design with a futuristic aesthetic.",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Lenis"],
    github: "https://github.com/biakp/portfolio",
    live: "/projects/portfolio-website",
    featured: true,
  },
  {
    id: 2,
    title: "Splendore - Tray E-commerce Theme",
    description: "Premium e-commerce theme developed for the Tray platform using Twig templating engine. Splendore combines elegant design with high-performance optimization and advanced functionality for sophisticated online stores.",
    technologies: ["Twig", "Tray Platform", "SCSS", "JavaScript", "REST API"],
    github: "https://github.com/biakp",
    live: "/projects/tray-ecommerce",
    featured: true,
  },
  {
    id: 3,
    title: "WhatsApp Automation with n8n + Docker",
    description: "Custom WhatsApp messaging workflow using n8n, self-hosted in Docker. Automates message delivery based on Google Sheets data with advanced conditional logic and anti-spam protection.",
    technologies: ["n8n", "Docker", "WhatsApp API", "Google Sheets", "Node.js"],
    github: "https://github.com/biakp",
    live: "/projects/whatsapp-automation",
    featured: true,
  },
  {
    id: 4,
    title: "Shopify E-commerce Development",
    description: "Custom e-commerce storefront for a premium shoe brand using Shopify's Dawn theme. Features advanced Liquid templating, dynamic sections, and performance optimization for a high-end shopping experience.",
    technologies: ["Shopify Liquid", "Dawn Theme", "SCSS", "JavaScript", "Metafields"],
    github: "https://github.com/biakp",
    live: "/projects/shopify-shoe-brand",
    featured: true,
  },
];

interface OtherProjectsProps {
  currentProjectPath: string;
  maxProjects?: number;
}

export function OtherProjects({ currentProjectPath, maxProjects = 2 }: OtherProjectsProps) {
  // Filter out the current project and limit the number of projects shown
  const otherProjects = projects
    .filter(project => project.live !== currentProjectPath)
    .slice(0, maxProjects);

  if (otherProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-6 bg-surface/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-chakraPetch text-3xl md:text-4xl font-bold text-primary mb-4 glow-text">
            Other Projects
          </h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            Explore more of my development work and technical projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-surface/50 border border-border p-6 hover:bg-surface/70 hover:border-primary transition-all duration-300 cyber-cursor-pointer relative h-full"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                {/* Fake borders */}
                <div 
                  className="absolute top-0 right-0 w-3 h-3 bg-border group-hover:bg-primary transition-colors duration-300"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-3 h-3 bg-border group-hover:bg-primary transition-colors duration-300"
                  style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                />
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-chakraPetch text-xl font-bold text-primary group-hover:glow-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-primary hover:text-background text-primary transition-all duration-300 border border-border relative"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                        }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.live}
                      {...(project.live.startsWith('/') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-primary hover:text-background text-primary transition-all duration-300 border border-border relative"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>

                  <p className="text-text mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-xs font-mono"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-accent text-xs font-mono">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
