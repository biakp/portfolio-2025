interface LenisInstance {
  scrollTo: (target: string | number, options?: { duration?: number; easing?: (t: number) => number }) => void;
}

export const smoothScrollTo = (target: string) => {
  const lenisInstance = (window as typeof window & { lenis?: LenisInstance }).lenis;
  
  if (lenisInstance) {
    // Use Lenis for smooth scrolling
    lenisInstance.scrollTo(target, { 
      duration: 2.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  } else {
    // Fallback to native smooth scroll
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
};

export const createSmoothScrollHandler = (target: string) => {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo(target);
  };
};
