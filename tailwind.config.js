/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#0D0D0D",
        cardBg: "#121212",
        cardBorder: "rgba(255, 255, 255, 0.10)",
        primary: {
          DEFAULT: "#FF6B00",
          light: "#FF8A00",
          dark: "#D95A00",
          glow: "rgba(255, 107, 0, 0.35)",
        },
        accent: {
          orange: "#FF6B00",
          amber: "#FF8A00",
        },
        slate: {
          300: "#D4D4D4",
          400: "#B8B8B8",
          500: "#888888",
          700: "#2E2E2E",
          800: "#1E1E1E",
          900: "#121212",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "system-ui", "sans-serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
