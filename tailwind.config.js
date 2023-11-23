/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#352F44',
        purpleGray: '#5C5470'
      }
    },
  },
  plugins: [],
}