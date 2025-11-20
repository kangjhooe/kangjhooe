import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        primary: "#E8C68E",
        accent: "#61E0BD",
        secondary: "#0A130F",
        "primary-dark": "#A7773A",
        "surface-light": "rgba(18,28,24,0.88)",
        "surface-dark": "rgba(3,7,5,0.95)",
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
      boxShadow: {
        "soft-xl": "0 25px 65px -25px rgba(15,95,63,0.35)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "radial-gradient(circle at 25px 25px, rgba(15,95,63,0.08) 2%, transparent 0)",
        "grid-dark":
          "radial-gradient(circle at 25px 25px, rgba(35,162,111,0.15) 2%, transparent 0)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
