/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      gradientColorStops: {
        "blue-82": "#5285D2D1",
        "purple-0": "#C629FD00",
        "purple-100": "#C629FD1A",
        "yellow-li": "#FFF50508",
        "yellow-dr": "#FFF5051A",
        "yellow-50": "#FFF505",
      },
      fontSize: {
        xs: ".75rem",
        base: "1.25rem",
      },
      animation: {
        marquee: "marquee 50s linear infinite",
        marquee2: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default tailwindConfig;