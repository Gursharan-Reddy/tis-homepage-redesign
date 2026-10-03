/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0F2C59',
          gold: '#C5A059',
          dark: '#111827',
        }
      },
    },
  },
  plugins: [],
}
