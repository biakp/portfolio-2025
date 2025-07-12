import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // New custom color scheme
        background: '#151515',
        surface: '#1f1f1f',
        primary: '#455dff',
        secondary: '#5a6fff',
        accent: '#6b7cff',
        text: '#f9f9f9',
        muted: '#e2e8f0', // Changed from #a1a1aa to a proper white/light gray
        border: '#455dff',

        // Legacy color system for compatibility
        foreground: "hsl(var(--foreground))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        // Display fonts for titles/UI
        orbitron: ['Orbitron', 'sans-serif'],
        syneMono: ['Syne Mono', 'monospace'],
        unicaOne: ['Unica One', 'cursive'],
        chakraPetch: ['Chakra Petch', 'sans-serif'],

        // Body fonts for descriptions/labels
        spaceMono: ['Space Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        ibmPlexMono: ['IBM Plex Mono', 'monospace'],

        // Default system
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "matrix": "matrix 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #455dff, 0 0 10px #455dff, 0 0 15px #455dff" },
          "100%": { boxShadow: "0 0 10px #455dff, 0 0 20px #455dff, 0 0 30px #455dff" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px #455dff" },
          "50%": { boxShadow: "0 0 20px #455dff, 0 0 30px #455dff" },
        },
        matrix: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
