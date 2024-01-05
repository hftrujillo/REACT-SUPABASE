/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cweam': '#FFF5E0',
        'dashing-pink': '#FF6969',
        'soft-red': '#BB2525',
        'navy-sucks': '#141E46'
      }
    },
  },
  plugins: [require("daisyui")],
}