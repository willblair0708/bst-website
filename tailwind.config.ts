import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "var(--font-geist-mono)", "Consolas", "monospace"],
      },
      colors: {
        // Greyscale system from design spec
        "grey-900": "#0A0C10", // Dark canvas
        "grey-800": "#16181D", // Elevated panels
        "grey-700": "#20232B", // Card borders
        "grey-600": "#2F333B", // Dividers
        "grey-500": "#495057", // Disabled text
        "grey-400": "#6C757D", // Placeholder text
        "grey-300": "#A1A7B3", // Dim text (Dark)
        "grey-100": "#F5F8FA", // Panel BG (Light)
        grey: {
          900: "#0A0C10", // Dark canvas
          800: "#16181D", // Elevated panels
          700: "#20232B", // Card borders
          600: "#2F333B", // Dividers
          500: "#495057", // Disabled text
          400: "#6C757D", // Placeholder text
          300: "#A1A7B3", // Dim text (Dark)
          100: "#F5F8FA", // Panel BG (Light)
        },
        // Functional palette
        "accent-pass": "#19A7CE",
        "accent-fail": "#FF6B6B",
        "accent-warn": "#FFB454",
        "accent-merit": "#F3C94C",
        accent: {
          pass: "#19A7CE",
          fail: "#FF6B6B",
          warn: "#FFB454",
          merit: "#F3C94C",
        },
        // Aurora gradient colors
        aurora: {
          primary: "#19A7CE",
          secondary: "#F3C94C",
          tertiary: "#FF6B6B",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontSize: {
        "display-xl": ["28px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-l": ["22px", { lineHeight: "1.25", fontWeight: "600" }],
        "heading-m": ["18px", { lineHeight: "1.35", fontWeight: "600" }],
        "body-m": ["15px", { lineHeight: "1.5", fontWeight: "400" }],
        "body-s": ["13px", { lineHeight: "1.5", fontWeight: "400" }],
        "code": ["13px", { lineHeight: "1.45", fontWeight: "400" }],
      },
      spacing: {
        "sp-1": "4px",
        "sp-2": "8px",
        "sp-3": "12px",
        "sp-4": "16px",
        "sp-5": "20px",
        "sp-6": "24px",
        "sp-8": "32px",
        "sp-10": "40px",
        "sp-12": "48px",
        "sp-16": "64px",
      },
      animation: {
        "aurora": "aurora 90s linear infinite",
        "flip": "flip 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        "slide-in": "slideIn 0.18s ease-out",
        "confetti": "confetti 0.8s ease-out",
      },
      keyframes: {
        aurora: {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-8px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        confetti: {
          "0%": { transform: "scale(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(360deg)", opacity: "0" },
        },
      },
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",
        "8": "repeat(8, minmax(0, 1fr))",
        "4": "repeat(4, minmax(0, 1fr))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;