"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { createSmoothScrollHandler } from "@/utils/smoothScroll";

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

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-background matrix-bg data-stream-vertical">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-chakraPetch text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-12 glow-text glitch holographic-text" data-text="&gt; DIGITAL ARCHIVES_">
            &gt; DIGITAL ARCHIVES_
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative overflow-hidden cyber-cursor-pointer ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                data-cursor-text="View Project"
              >
                <Link 
                  href={project.live}
                  className="block"
                  {...(project.live.startsWith('/') ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <div className={`cyber-clip bg-surface border border-border p-6 hover:shadow-2xl hover:border-primary glow-border-hover transition-all duration-300 h-full cyber-panel mouse-glow ${project.featured ? 'floating-glow neon-border' : 'dynamic-border'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-mono text-xl font-semibold text-primary group-hover:glow-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="cyber-clip-enhanced p-2 hover:bg-primary hover:text-background text-primary transition-all duration-300 border border-border relative"
                          style={{
                            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                          }}
                        >
                          {/* Small fake borders */}
                          <div 
                            className="absolute top-0 right-0 w-1.5 h-1.5 bg-border"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                          />
                          <div 
                            className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-border"
                            style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                          />
                          <ExternalLink className="w-4 h-4 relative z-10" />
                        </motion.div>
                      </div>
                    </div>

                    <p className="text-text group-hover:text-accent mb-6 leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="cyber-clip-enhanced px-3 py-1 bg-background text-primary group-hover:bg-primary group-hover:text-background text-sm border border-border transition-all duration-300 font-mono relative"
                          style={{
                            clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                          }}
                        >
                          {/* Small fake borders */}
                          <div 
                            className="absolute top-0 right-0 w-1.5 h-1.5 bg-border group-hover:bg-background opacity-60"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                          />
                          <div 
                            className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-border group-hover:bg-background opacity-60"
                            style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                          />
                          <span className="relative z-10">{tech}</span>
                        </span>
                      ))}
                    </div>

                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              onClick={createSmoothScrollHandler("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button inline-flex items-center px-8 py-3 border border-primary text-primary font-mono hover:bg-primary hover:text-background transition-all duration-300 glow-border hover:glow-text cyber-cursor-pointer"
              data-cursor-text="Let's Talk"
            >
              DISCUSS YOUR PROJECT
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
