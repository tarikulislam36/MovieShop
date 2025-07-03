/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["app/_layout.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#1f2937", // Gray 900
        secondary: "#f87171", // Red 400
        accent: "#3b82f6", // Blue 500
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}

