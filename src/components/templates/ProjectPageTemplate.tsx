"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ArrowLeft, 
  Github, 
  CheckCircle,
  Layers,
  LucideIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { OtherProjects } from "@/components/sections/OtherProjects";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { createSmoothScrollHandler } from "@/utils/smoothScroll";

export interface ProjectFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "text-primary" | "text-accent";
}

export interface ProjectStat {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export interface TechnicalDetail {
  title: string;
  content: string;
}

export interface ProjectPageData {
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  features: ProjectFeature[];
  stats?: ProjectStat[];
  technicalDetails?: TechnicalDetail[];
  githubUrl?: string;
  demoUrl?: string;
  isCompleted?: boolean;
  pageTitle: string;
  metaDescription: string;
  currentPath?: string; // Add current path for filtering other projects
  imageUrl?: string; // Add optional image URL
  imageAlt?: string; // Add optional image alt text
}

interface ProjectPageTemplateProps {
  data: ProjectPageData;
  children?: React.ReactNode;
}

export default function ProjectPageTemplate({ data, children }: ProjectPageTemplateProps) {
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Set document title and meta description
  useEffect(() => {
    document.title = data.pageTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', data.metaDescription);
    }
  }, [data.pageTitle, data.metaDescription]);

  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-6 left-6 z-40"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cyber-button-enhanced flex items-center space-x-2 px-4 py-2 bg-surface border border-border text-primary hover:bg-primary hover:text-background transition-all duration-300 cyber-cursor-pointer relative"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
            }}
          >
            {/* Fake borders */}
            <div 
              className="absolute top-0 right-0 w-2 h-2 bg-border"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
            />
            <div 
              className="absolute bottom-0 left-0 w-2 h-2 bg-border"
              style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
            />
            <ArrowLeft className="w-4 h-4 relative z-10" />
            <span className="text-sm font-medium relative z-10">Back to Homepage</span>
          </motion.button>
        </Link>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Project Badge */}
            {data.isCompleted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-sm font-mono mb-6"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                PROJECT COMPLETED
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-chakraPetch text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 glow-text"
            >
              {data.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-chakraPetch text-xl md:text-2xl text-accent mb-8"
            >
              {data.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-text max-w-3xl mx-auto leading-relaxed mb-10"
            >
              {data.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {data.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-sm font-mono"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {data.githubUrl && (
                <motion.a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cyber-button-enhanced inline-flex items-center px-8 py-3 bg-primary text-background font-mono font-medium hover:bg-accent transition-all duration-300 cyber-cursor-pointer relative"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                >
                  {/* Fake borders */}
                  <div 
                    className="absolute top-0 right-0 w-3 h-3 bg-primary"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-3 h-3 bg-primary"
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                  />
                  <Github className="w-5 h-5 mr-3 relative z-10" />
                  <span className="relative z-10">View Code</span>
                </motion.a>
              )}
              
              <motion.a
                href="#features"
                onClick={createSmoothScrollHandler("#features")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button-enhanced inline-flex items-center px-8 py-3 border border-primary text-primary font-mono font-medium hover:bg-primary hover:text-background transition-all duration-300 cyber-cursor-pointer relative"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                {/* Fake borders */}
                <div 
                  className="absolute top-0 right-0 w-3 h-3 bg-border"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-3 h-3 bg-border"
                  style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                />
                <Layers className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">View Features</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      {data.imageUrl && (
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="cyber-clip-enhanced bg-surface border border-border p-1 relative"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
              }}
            >
              {/* Fake borders for cut corners */}
              <div 
                className="absolute top-0 right-0 w-4 h-4 bg-border"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />
              <div 
                className="absolute bottom-0 left-0 w-4 h-4 bg-border"
                style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
              />
              
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10" style={{ aspectRatio: 'auto' }}>
                <Image
                  src={data.imageUrl}
                  alt={data.imageAlt || `${data.title} project screenshot`}
                  width={800}
                  height={450}
                  className="w-full h-auto object-contain"
                  priority
                />
                {/* Overlay with project info */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-center w-full">
                    <p className="font-mono text-primary text-sm mb-2">{data.title}</p>
                    <p className="font-mono text-text text-xs">{data.subtitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Stats */}
      {data.stats && (
        <section className="py-16 px-6 bg-surface/30" ref={statsRef}>
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {data.stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-surface/50 border border-border p-6 text-center cyber-cursor-pointer relative"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                    }}
                  >
                    {/* Fake borders */}
                    <div 
                      className="absolute top-0 right-0 w-2 h-2 bg-border"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                    />
                    <div 
                      className="absolute bottom-0 left-0 w-2 h-2 bg-border"
                      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                    />
                    
                    <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-chakraPetch text-2xl font-bold text-primary mb-1">{stat.value}</h3>
                    <p className="text-accent font-medium mb-1">{stat.label}</p>
                    <p className="text-text text-sm">{stat.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section id="features" className="py-20 px-6" ref={featuresRef}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-chakraPetch text-3xl md:text-4xl font-bold text-primary mb-4 glow-text">
              Key Features
            </h2>
            <p className="text-lg text-text max-w-2xl mx-auto">
              Technical capabilities and implementation highlights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-surface/30 border border-border p-8 hover:bg-surface/50 transition-all duration-300 cyber-cursor-pointer relative"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                  }}
                >
                  {/* Fake borders */}
                  <div 
                    className="absolute top-0 right-0 w-3 h-3 bg-border"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-3 h-3 bg-border"
                    style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                  />
                  
                  <IconComponent className={`w-12 h-12 ${feature.color || "text-primary"} mb-4`} />
                  <h3 className="font-chakraPetch text-xl font-bold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      {data.technicalDetails && (
        <section className="py-20 px-6 bg-surface/30">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="font-chakraPetch text-3xl md:text-4xl font-bold text-primary mb-8 glow-text">
                Technical Implementation
              </h2>
              
              <div className="bg-surface/50 border border-border p-8 text-left cyber-cursor-pointer relative"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
                }}
              >
                {/* Fake borders */}
                <div 
                  className="absolute top-0 right-0 w-4 h-4 bg-border"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-4 h-4 bg-border"
                  style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                />
                
                <div className="space-y-6">
                  {data.technicalDetails.map((detail, index) => (
                    <div key={index}>
                      <h3 className="font-chakraPetch text-lg font-bold text-accent mb-2">{detail.title}</h3>
                      <p className="text-text">
                        {detail.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Custom Children Content */}
      {children}

      {/* Other Projects Section */}
      <OtherProjects currentProjectPath={data.currentPath || ""} />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
