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
      colors: {
        purple: "#704EE7",
        orange: "#FCCF5A",
        "light-orange": "#FFE5A2",
        pink: "#DFC8FD",
        "light-gray": "#eeeeee",
      },
    },
  },
  plugins: [],
};
