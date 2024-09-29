const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "hero-image":"url('/src/assets/img/hero-bg.jpg')"
      }
    }
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      dark:{
        layout:{
      radius:{
        small:"3px",
        medium:"6px",
        large:"12px"
      },
      borderWidth:{
        small:"1px",
        medium:"2px",
        large:"3px"
      },
      hoverOpacity:"0.3"
    },
        colors:{
          default:"#A04747",
          primary:{
            DEFAULT: "#BEF264",
            foreground: "#fff",

          },
          focus:"#BEF264"
        }
      }
    }
  })]
};
