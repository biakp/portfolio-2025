'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SectionDividerProps {
  variant?: 'circuit' | 'matrix' | 'neural' | 'quantum' | 'data-stream';
  className?: string;
}

export function SectionDivider({ variant = 'circuit', className = '' }: SectionDividerProps) {
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const variants = {
    circuit: (
      <div className={`relative w-full h-24 overflow-hidden section-divider circuit-grid ${className}`}>
        {/* Main circuit line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-y-1/2" />
        
        {/* Circuit nodes */}
        <motion.div 
          className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary rounded-full quantum-particle transform -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent rounded-full quantum-particle transform -translate-y-1/2"
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary rounded-full quantum-particle transform -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        
        {/* Circuit branches */}
        <div className="absolute top-1/2 left-1/4 w-0.5 h-8 bg-gradient-to-b from-primary to-transparent transform translate-y-2" />
        <div className="absolute top-1/2 left-1/4 w-0.5 h-8 bg-gradient-to-t from-primary to-transparent transform -translate-y-6" />
        <div className="absolute top-1/2 right-1/4 w-0.5 h-6 bg-gradient-to-b from-primary to-transparent transform translate-y-1" />
        
        {/* Data flow animation */}
        <motion.div
          className="absolute top-1/2 left-0 w-2 h-2 bg-accent rounded-full quantum-particle transform -translate-y-1/2"
          animate={{ x: [0, screenWidth, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </div>
    ),
    
    matrix: (
      <div className={`relative w-full h-24 overflow-hidden section-divider ${className}`}>
        {/* Matrix grid */}
        <div className="absolute inset-0 opacity-20 circuit-grid">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="absolute w-full h-0.5 bg-primary" style={{ top: `${(i + 1) * 12.5}%` }} />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="absolute h-full w-0.5 bg-primary" style={{ left: `${(i + 1) * 8.33}%` }} />
          ))}
        </div>
        
        {/* Central data stream */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent transform -translate-y-1/2" />
        
        {/* Animated matrix particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full quantum-particle matrix-particle"
            style={{ top: '50%', left: `${10 + i * 15}%` }}
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    ),
    
    neural: (
      <div className={`relative w-full h-24 overflow-hidden section-divider ${className}`}>
        {/* Neural network nodes */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 96">
          {/* Connections */}
          <motion.path
            d="M100,48 Q200,20 300,48 T500,48 T700,48"
            stroke="rgba(69, 93, 255, 0.5)"
            strokeWidth="2"
            fill="none"
            className="neural-connection"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.path
            d="M100,48 Q200,76 300,48 T500,48 T700,48"
            stroke="rgba(107, 124, 255, 0.3)"
            strokeWidth="1"
            fill="none"
            className="neural-connection"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Neural nodes */}
          {[100, 300, 500, 700].map((x, i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={48}
              r="4"
              fill="rgba(69, 93, 255, 0.8)"
              className="quantum-particle"
              animate={{ 
                r: [4, 6, 4],
                fill: ["rgba(69, 93, 255, 0.8)", "rgba(107, 124, 255, 1)", "rgba(69, 93, 255, 0.8)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </svg>
      </div>
    ),
    
    quantum: (
      <div className={`relative w-full h-24 overflow-hidden section-divider ${className}`}>
        {/* Quantum field */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
        
        {/* Quantum particles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full quantum-particle"
            style={{ 
              left: `${20 + i * 15}%`,
              top: '50%',
              background: `linear-gradient(45deg, rgb(69, 93, 255), rgb(107, 124, 255))`
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3],
              rotate: [0, 360],
              y: [-15, 15, -15]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Quantum entanglement lines */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    ),
    
    'data-stream': (
      <div className={`relative w-full h-24 overflow-hidden section-divider ${className}`}>
        {/* Stream lines */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-y-1/2" />
        <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" style={{ top: 'calc(50% + 8px)' }} />
        <div className="absolute left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" style={{ top: 'calc(50% - 8px)' }} />
        
        {/* Data packets */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 w-4 h-2 bg-accent rounded-sm quantum-particle data-packet transform -translate-y-1/2"
            initial={{ x: -20 }}
            animate={{ x: screenWidth }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Binary code backdrop */}
        <div className="absolute inset-0 opacity-10 font-mono text-xs text-primary overflow-hidden">
          <motion.div
            animate={{ x: [-100, 100] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100
          </motion.div>
        </div>
      </div>
    )
  };

  return (
    <div className="relative py-8">
      {variants[variant]}
    </div>
  );
}
