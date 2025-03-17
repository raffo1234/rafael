/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      manrope: ["Manrope", "sans-serif"],
      "bebas-neue": ["Bebas Neue", "sans-serif"],
      lobster: ["Lobster", "sans-serif"],
      "nixie-one": ["Nixie One", "sans-serif"],
    },
    extend: {
      animation: {
        fadeOut: "fadeOut 1s ease-out forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 100 },
          "100%": { opacity: 0 },
        },
      },
      colors: {
        yellow: {
          100: "#FEF8DD",
        },
      },
    },
  },
  plugins: [],
};
