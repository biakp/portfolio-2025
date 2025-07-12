"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Coffee, Heart, Terminal, Cpu, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/biakp", label: "GitHub", color: "hover:text-accent" },
    { icon: Linkedin, href: "https://linkedin.com/in/biakp", label: "LinkedIn", color: "hover:text-primary" },
    { icon: Mail, href: "mailto:beatriz.knabbenp@gmail.com", label: "Email", color: "hover:text-primary" },
  ];

  const techStack = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "TypeScript", icon: Terminal },
    { name: "Tailwind", icon: Cpu },
  ];

  return (
    <footer className="relative footer-glow border-t border-border overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-5 footer-grid">
        <div className="cyber-grid h-full" />
      </div>
      
      {/* Data Stream Animation */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground glow-text-subtle mb-2">
                <span className="text-primary">&gt;</span> Beatriz Knabben<span className="animate-pulse">_</span>
              </h3>
              <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-accent mb-4" />
              <p className="text-muted leading-relaxed max-w-md">
                Frontend developer crafting modern, responsive interfaces with cutting-edge technologies. 
                Passionate about creating exceptional digital experiences.
              </p>
            </div>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="cyber-clip-enhanced flex items-center space-x-2 px-3 py-1 bg-background/50 border border-border text-sm text-muted hover:text-primary hover:border-primary transition-all duration-300 relative"
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
                  <tech.icon className="w-3 h-3 relative z-10" />
                  <span className="relative z-10">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4 glow-text-subtle">Navigation</h4>
            <div className="space-y-2">
              {['About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 4, color: 'rgb(69, 93, 255)' }}
                  className="block text-muted hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4 glow-text-subtle">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-3 text-muted ${social.color} transition-all duration-300 group social-link`}
                >
                  <div className="p-2 rounded bg-background/50 border border-border group-hover:border-primary group-hover:glow-border transition-all duration-300">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted">
              <span>© {currentYear} Beatriz Knabben</span>
              <span className="text-primary">•</span>
              <span>All rights reserved</span>
            </div>

            {/* Made with Love */}
            <motion.div 
              className="flex items-center space-x-2 text-muted"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm">Crafted with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: ['rgb(161, 161, 170)', 'rgb(107, 124, 255)', 'rgb(161, 161, 170)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-current" />
              </motion.div>
              <span className="text-sm">and</span>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  color: ['rgb(161, 161, 170)', 'rgb(69, 93, 255)', 'rgb(161, 161, 170)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Coffee className="w-4 h-4" />
              </motion.div>
            </motion.div>

            {/* Status Indicator */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full status-pulse"
              />
              <span className="text-sm text-muted">Available for work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
    </footer>
  );
}
