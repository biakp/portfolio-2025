"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-none bg-surface border border-border shadow-lg hover:shadow-xl transition-all duration-300 glow-border hover:bg-primary hover:text-background group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-checked={isDark}
      role="switch"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="group-hover:animate-pulse"
        aria-hidden="true"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-primary group-hover:text-background" />
        ) : (
          <Moon className="w-5 h-5 text-primary group-hover:text-background" />
        )}
      </motion.div>
      <span className="sr-only">
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
    </motion.button>
  );
}
