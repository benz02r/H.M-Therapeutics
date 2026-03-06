/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1D", // Deep Charcoal instead of pure black
        secondary: "#4A4A4D", // Soft Gray for text
        accent: "#C5A059", // A more muted, elegant Champagne/Gold
        accentHover: "#A88544",
        background: "#FAFAFA", // Off-white for a cleaner look
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
};