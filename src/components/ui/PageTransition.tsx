"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      y: -20,
      scale: 1.02,
    },
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.4,
  };

  // Cyber loading overlay
  const overlayVariants = {
    initial: {
      scaleY: 1,
    },
    animate: {
      scaleY: 0,
    },
    exit: {
      scaleY: 1,
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Cyber transition overlay */}
      <AnimatePresence>
        <motion.div
          key={`overlay-${pathname}`}
          className="fixed inset-0 z-50 bg-gradient-to-b from-primary to-accent pointer-events-none"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.6,
            ease: "circOut",
          }}
          style={{ originY: 1 }}
        >
          {/* Cyber grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="cyber-grid h-full" />
          </div>
          
          {/* Loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 border-2 border-background border-t-transparent rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p
                className="font-chakraPetch text-background text-lg font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                LOADING...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
