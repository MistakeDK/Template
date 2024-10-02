
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "hero-image":"url('/src/assets/img/hero-bg.jpg')"
      },
      keyframes:{
        fade:{
          'from':{opacity:'0.4'},
          'to':{opacity:'1'}
        },
        slideRight:{
          'from':{
            transform:'translateX(100%)'
          },
          'to':{
            transform:'translateX(0%)'
          }
        },
        slideLeft:{
          'from':{
            transform:'translateX(-100%)',
          },
          'to':{
            transform:'translateX(0%)'
          }
        }
      },
      animation:{
        fade:'fade 1s linear',
        slideLeft:'slideLeft .5s ease-in-out backward',
        slideRight:'slideRight .5s ease-in-out forward'
      }
    }
  },
  darkMode: "class",
  plugins: [nextui( )]
};
