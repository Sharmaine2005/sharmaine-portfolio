/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- CRITICAL: This allows us to toggle dark mode with a button
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // Your aggressive Red
        darkBg: "#0a0a0a",  // A deep, "futuristic" black (not grey)
        lightBg: "#ffffff",
      },
      fontFamily: {
        // We can add a futuristic font here later if you want
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}