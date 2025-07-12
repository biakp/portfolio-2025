"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useState, useEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setShowLoading(true);
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

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
    ease: "easeInOut" as const,
    duration: 0.6,
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate={showLoading ? "initial" : "in"}
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Cyber transition overlay */}
      <AnimatePresence>
        {showLoading && (
          <motion.div
            key={`overlay-${pathname}`}
            className="fixed inset-0 z-[9999] bg-background pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
          {/* Solid background to hide content */}
          <div className="absolute inset-0 bg-background" />
          
          {/* Cyber grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="cyber-grid h-full" />
          </div>
          
          {/* Loading indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              />
              <motion.p
                className="font-chakraPetch text-primary text-lg font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                LOADING...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
