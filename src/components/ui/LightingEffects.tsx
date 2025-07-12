"use client";

import { useEffect, useCallback } from 'react';

export function LightingEffects() {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const interactiveElements = document.querySelectorAll('.interactive-light');
    
    interactiveElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      (element as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
      (element as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
    });
  }, []);

  const handleScroll = useCallback(() => {
    const scrollElements = document.querySelectorAll('.scroll-glow');
    const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    
    scrollElements.forEach((element) => {
      if (scrollProgress > 0.3) {
        element.classList.add('intense');
      } else {
        element.classList.remove('intense');
      }
    });

    // Color transitions on scroll
    const colorElements = document.querySelectorAll('.color-transition');
    colorElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }, []);

  useEffect(() => {
    // Throttle mouse move events for better performance
    let mouseTimeout: NodeJS.Timeout | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!mouseTimeout) {
        mouseTimeout = setTimeout(() => {
          handleMouseMove(e);
          mouseTimeout = null;
        }, 16); // ~60fps
      }
    };

    // Throttle scroll events
    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScroll();
          scrollTimeout = null;
        }, 16); // ~60fps
      }
    };

    document.addEventListener('mousemove', throttledMouseMove, { passive: true });
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial scroll check
    handleScroll();

    return () => {
      document.removeEventListener('mousemove', throttledMouseMove);
      window.removeEventListener('scroll', throttledScroll);
      if (mouseTimeout) clearTimeout(mouseTimeout);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [handleMouseMove, handleScroll]);

  return null;
}
