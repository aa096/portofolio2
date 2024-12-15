/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B1AA9D",
        secondary: "#6F6C67"
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "portfolio": "url('/images/portfolio.png')",
      },
      screens: {
        'sl': "880px"
      }
    },
  },
  plugins: [],
}

