"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { createSmoothScrollHandler } from "@/utils/smoothScroll";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-background dark:matrix-bg cyber-grid data-stream-multi light-zone-primary energy-field"
      aria-label="Hero section - Introduction"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-chakraPetch font-light mb-6 text-text ethereal-glow"
          >
            <span style={{ color: '#6b7cff' }} aria-hidden="true">[</span> 
            <span className="sr-only">Beatriz Knabben</span>
            <span aria-hidden="true">BEATRIZ KNABBEN</span>
            <span style={{ color: '#6b7cff' }} aria-hidden="true">]</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-text dark:text-text light:text-light-text mb-8 font-spaceMono font-bold tracking-wider typing-animation"
            role="heading"
            aria-level={2}
          >
            FRONT-END DEVELOPER &amp; DIGITAL SOLUTIONS SPECIALIST
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted dark:text-muted light:text-light-muted mb-12 max-w-2xl mx-auto leading-relaxed font-inter"
          >
            Specialized in creating modern, responsive interfaces using technologies such as React, Next.js, 
            TypeScript, and Tailwind CSS. Also experienced in e-commerce solutions, social media management, 
            and automation tools.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            role="group"
            aria-label="Main action buttons"
          >
            <motion.a
              href="#projects"
              onClick={createSmoothScrollHandler("#projects")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button-enhanced inline-flex items-center px-8 py-3 bg-primary text-background font-syneMono font-bold hover:bg-secondary transition-all duration-300 shadow-lg relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background border border-primary"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
              aria-label="View my projects"
            >
              {/* Fake borders for cut corners - matching primary color */}
              <div 
                className="absolute top-0 right-0 w-3 h-3 bg-primary"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />
              <div 
                className="absolute bottom-0 left-0 w-3 h-3 bg-primary"
                style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
              />
              
              {/* Border overlay */}
              <div 
                className="absolute inset-0 border border-primary pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              />
              
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-secondary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" aria-hidden="true"></div>
            </motion.a>
            
            <motion.a
              href="#contact"
              onClick={createSmoothScrollHandler("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button-enhanced inline-flex items-center px-8 py-3 border border-primary text-primary font-syneMono font-bold hover:bg-primary hover:text-background transition-all duration-300 relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
              }}
              aria-label="Contact me"
            >
              {/* Fake borders for cut corners - matching primary color */}
              <div 
                className="absolute top-0 right-0 w-3 h-3 bg-primary"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />
              <div 
                className="absolute bottom-0 left-0 w-3 h-3 bg-primary"
                style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
              />
              
              {/* Border overlay */}
              <div 
                className="absolute inset-0 border border-primary pointer-events-none"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              />
              
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-primary transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" aria-hidden="true"></div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6"
            role="group"
            aria-label="Social media links"
          >
            {[
              { icon: Github, href: "https://github.com/biakp", label: "GitHub profile" },
              { icon: Linkedin, href: "https://linkedin.com/in/biakp", label: "LinkedIn profile" },
              { icon: Mail, href: "mailto:beatriz.knabbenp@gmail.com", label: "Send email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-none border border-border text-primary hover:bg-surface hover:border-primary transition-all duration-300 glow-border group relative mouse-glow interactive-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                aria-label={social.label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <social.icon className="w-5 h-5 group-hover:animate-pulse" aria-hidden="true" />
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" aria-hidden="true"></div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={createSmoothScrollHandler("#about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="block p-2 rounded-none hover:bg-surface transition-all duration-300 border border-transparent hover:border-primary group mouse-glow interactive-light focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-6 h-6 text-primary group-hover:animate-bounce" aria-hidden="true" />
          <span className="sr-only">Scroll down to learn more</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
