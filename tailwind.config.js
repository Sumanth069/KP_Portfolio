/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fafafa',
        primary: '#4f46e5', // Indigo 600
        secondary: '#06b6d4', // Cyan 500
        textDark: '#1e293b', // Slate 800
        textLight: '#64748b', // Slate 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
