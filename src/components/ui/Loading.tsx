"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 border border-primary border-t-transparent rounded-full"></div>
        <motion.div
          className="absolute inset-2 border border-accent border-b-transparent rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
      <motion.p
        className="absolute mt-20 text-primary font-chakraPetch"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        INITIALIZING...
      </motion.p>
    </div>
  );
}

export function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-8">
      <motion.div
        className="w-8 h-8 border border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
