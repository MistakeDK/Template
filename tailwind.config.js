const { nextui } = require("@nextui-org/react");
const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1921px",
      "4xl": "2881px"
    },
    fontFamily: {
      sans: ['"Inter-24pt", sans-serif']
    },
    extend: {}
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark"
    }),
    // How to use - https://iconify.design/docs/usage/css/tailwind/iconify/
    // Making some customizations - "https://iconify.design/docs/usage/css/tailwind/iconify/prefixes.html#examples" when needed
    addIconSelectors(["solar"])
  ]
};
