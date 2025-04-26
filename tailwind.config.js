/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", "class"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#DB4444",
        primary: "#8b0000",
      },
    },
  },
  plugins: [],
};
