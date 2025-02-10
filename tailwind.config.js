/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        red: "#Fa3a3E",
        lightRed: "#D92B7C",
        purple: "#8758A6",
        blue: "#29A5F2",
        grayWhite: "#F2F2F2",
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      screens: {
        // mobile: { max: "480px" },
        // largeMobile: { min: "481px", max: "639px" },
        // tablet: { min: "640px", max: "768px" },
        // ipad: { min: "769px", max: "1024px" },
        // laptop: { min: "1025px", max: "1200px" },
        // desktop: { min: "1201px", max: "1600px" },
        // largeScreen: { min: "1600px" },
      },
      extend: {
        maxWidth: {
          maxContent: "1260px",
          maxContentTab: "650px",
        },
      },
    },
  },
  plugins: [],
};
