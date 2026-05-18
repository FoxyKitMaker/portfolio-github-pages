/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js,css}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          base: '#030712',
          card: 'rgba(17, 24, 39, 0.7)',
          border: 'rgba(255, 255, 255, 0.1)'
        },
        light: {
          base: '#f8fafc',
          card: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(0, 0, 0, 0.1)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
