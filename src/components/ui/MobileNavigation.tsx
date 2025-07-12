"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { createSmoothScrollHandler } from "@/utils/smoothScroll";

interface MobileNavigationProps {
  activeSection: string;
}

export function MobileNavigation({ activeSection }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Close menu when clicking on a link
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    // Extract href from the event target to create smooth scroll handler
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      createSmoothScrollHandler(href)(e);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-3 bg-surface border border-border text-primary hover:bg-primary hover:text-background transition-all duration-300 cyber-cursor-pointer"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle mobile menu"
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
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <Menu className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "tween",
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="md:hidden fixed top-0 right-0 h-full w-80 bg-surface border-l border-border z-40 overflow-hidden"
              style={{
                clipPath: 'polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)'
              }}
            >
              {/* Cyber grid background */}
              <div className="absolute inset-0 opacity-5">
                <div className="cyber-grid h-full" />
              </div>

              {/* Menu Header */}
              <div className="p-6 border-b border-border">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="font-chakraPetch text-2xl font-bold text-primary glow-text"
                >
                  &gt; NAVIGATION_
                </motion.h2>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className={`group relative font-mono text-lg transition-all duration-300 p-4 border border-border hover:border-primary cyber-cursor-pointer ${
                      activeSection === item.href.slice(1)
                        ? "text-primary bg-primary/10 border-primary"
                        : "text-text hover:text-primary"
                    }`}
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                    }}
                  >
                    {/* Fake borders */}
                    <div 
                      className="absolute top-0 right-0 w-1.5 h-1.5 bg-border group-hover:bg-primary"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                    />
                    <div 
                      className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-border group-hover:bg-primary"
                      style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
                    />
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary glow-bg"
                      />
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* Footer */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 p-4 border border-border"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                }}
              >
                <p className="font-mono text-sm text-muted">
                  {`// System Online`}
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-primary">READY</span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
