"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MobileNavigation } from "./MobileNavigation";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.slice(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update focus for screen readers
      targetElement.focus({ preventScroll: true });
    }
  };
  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-surface/90 backdrop-blur-lg rounded-none px-6 py-3 shadow-lg"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-syneMono font-normal transition-all duration-300 hover:text-primary hover:glow-text animated-underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm px-2 py-1 cyber-cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? "text-primary glow-text"
                    : "text-muted"
                }`}
                aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
                aria-label={`Navigate to ${item.name} section`}
              >
                [ {item.name.toUpperCase()} ]
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-none shadow-lg"
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Navigation */}
      <MobileNavigation activeSection={activeSection} />
    </>
  );
}
