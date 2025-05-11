/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        terminal: '#00FF00',
        background: '#000000',
        retrogray: '#c0c0c0',
      },
    },
  },
  plugins: [],
}