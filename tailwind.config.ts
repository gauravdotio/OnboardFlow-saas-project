import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(var(--brand-50, 238 242 255) / <alpha-value>)",
          100: "rgb(var(--brand-100, 224 231 255) / <alpha-value>)",
          200: "rgb(var(--brand-200, 199 210 254) / <alpha-value>)",
          300: "rgb(var(--brand-300, 165 180 252) / <alpha-value>)",
          400: "rgb(var(--brand-400, 129 140 248) / <alpha-value>)",
          500: "rgb(var(--brand-500, 99 102 241) / <alpha-value>)",
          600: "rgb(var(--brand-600, 79 70 229) / <alpha-value>)",
          700: "rgb(var(--brand-700, 67 56 202) / <alpha-value>)",
          800: "rgb(var(--brand-800, 55 48 163) / <alpha-value>)",
          900: "rgb(var(--brand-900, 15 23 42) / <alpha-value>)",
          950: "rgb(var(--brand-950, 10 15 30) / <alpha-value>)",
        },
        navy: {
          50: "#f4f6f9",
          100: "#e9edf3",
          200: "#c7d2e2",
          300: "#95acc9",
          400: "#6081ac",
          500: "#3d5f8c",
          600: "#2d4970",
          700: "#243a59",
          800: "#1d2e46",
          900: "#0c1b2f",
          950: "#070f1b",
        },
        tealAccent: {
          400: "rgb(var(--accent-400, 52 211 153) / <alpha-value>)",
          500: "rgb(var(--accent-500, 16 185 129) / <alpha-value>)",
          600: "rgb(var(--accent-600, 5 150 105) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px -1px rgba(12, 27, 47, 0.06), 0 1px 3px -1px rgba(12, 27, 47, 0.04)",
        "card-hover": "0 12px 28px -4px rgba(12, 27, 47, 0.12), 0 4px 12px -2px rgba(12, 27, 47, 0.08)",
        dropdown: "0 10px 30px -5px rgba(12, 27, 47, 0.15), 0 4px 10px -2px rgba(12, 27, 47, 0.05)",
        mockup: "0 20px 40px -15px rgba(10, 28, 48, 0.2), 0 0 0 1px rgba(12, 27, 47, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s infinite ease-in-out",
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
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
