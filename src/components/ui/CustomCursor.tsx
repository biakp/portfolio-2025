"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "text">("default");
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                            window.innerWidth < 768 ||
                            'ontouchstart' in window;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Return early if mobile
    if (isMobile) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText("");
      setCursorType("default");
    };

    window.addEventListener("mousemove", moveCursor);

    // Add event listeners for hoverable elements
    const addCursorListeners = () => {
      // Buttons and links
      const hoverableElements = document.querySelectorAll(
        'a, button, [role="button"], .cyber-cursor-pointer'
      );
      
      hoverableElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
        
        // Add specific cursor types
        if (el.tagName === "A" || el.classList.contains("cyber-cursor-pointer")) {
          el.addEventListener("mouseenter", () => setCursorType("pointer"));
        }
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.addEventListener("mouseenter", () => setCursorType("text"));
        }
      });

      // Special elements with custom text
      const projectCards = document.querySelectorAll('[data-cursor-text]');
      projectCards.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          setCursorText((el as HTMLElement).dataset.cursorText || "");
          setCursorType("pointer");
        });
        el.addEventListener("mouseleave", () => {
          setCursorText("");
          setCursorType("default");
        });
      });
    };

    // Initial setup
    addCursorListeners();

    // Re-run when DOM changes (for dynamic content)
    const observer = new MutationObserver(addCursorListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY, isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  const getCursorVariants = () => {
    switch (cursorType) {
      case "pointer":
        return {
          default: {
            scale: 1,
            backgroundColor: "rgba(69, 93, 255, 0.2)",
            border: "2px solid #455dff",
          },
          hover: {
            scale: 1.2,
            backgroundColor: "rgba(69, 93, 255, 0.3)",
            border: "2px solid #6b7cff",
          },
        };
      case "text":
        return {
          default: {
            scale: 1,
            backgroundColor: "rgba(107, 124, 255, 0.2)",
            border: "2px solid #6b7cff",
          },
          hover: {
            scale: 1.1,
            backgroundColor: "rgba(107, 124, 255, 0.3)",
            border: "2px solid #455dff",
          },
        };
      default:
        return {
          default: {
            scale: 1,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          },
          hover: {
            scale: 1.1,
            backgroundColor: "rgba(69, 93, 255, 0.2)",
            border: "2px solid #455dff",
          },
        };
    }
  };

  const cursorVariants = getCursorVariants();

  return (
    <>
      {/* Hide default cursor only on desktop */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Custom cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={isHovering ? "hover" : "default"}
        variants={cursorVariants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
        }}
      >
        {/* Main cursor dot */}
        <motion.div
          className="w-full h-full rounded-full border backdrop-blur-sm"
          style={{
            clipPath: cursorType === "pointer" 
              ? 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
              : undefined
          }}
        >
          {/* Cyber corners for pointer type */}
          {cursorType === "pointer" && (
            <>
              <div 
                className="absolute top-0 right-0 w-1 h-1 bg-primary"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
              />
              <div 
                className="absolute bottom-0 left-0 w-1 h-1 bg-primary"
                style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
              />
            </>
          )}
        </motion.div>

        {/* Cursor text */}
        {cursorText && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-primary text-background text-xs font-mono whitespace-nowrap rounded"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))'
            }}
          >
            {cursorText}
          </motion.div>
        )}
      </motion.div>

      {/* Cursor trail effect */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5,
        }}
      >
        <div className="w-full h-full rounded-full bg-accent opacity-20" />
      </motion.div>
    </>
  );
}
