/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato:"'Lato', sans-serif",
        Playfair:"'Playfair Display', serif",
      }
    },
  },
  plugins: [],
}
