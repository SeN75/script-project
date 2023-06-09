/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/assets/src/*.scss",
    "./src/index.html",
    "./src/**/*.{scss, ts, html}",
    "./src/app/views/**/*.{scss, ts, html}",
  ],
  theme: {
    screens: {
      sm: "0",
      md: "640px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
    fontFamily: {
      f1: ['Janna LT, Arial, sans-serif'],
      f2: ['Righteous', 'cursive']
    }
  },
  plugins: [],
}
