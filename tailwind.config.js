/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Circular-light": ["Circular light", "-apple-system", "Segoe UI"],
        "Circular-medium": ["Circular medium", "-apple-system", "Segoe UI"],
        "Circular-bold": ["Circular bold", "-apple-system", "Segoe UI"],
        "Circular-black": ["Circular black", "-apple-system", "Segoe UI"],
      },
      colors: {
        airbnb: "#FF385C",
        "text-primary": "#222222",
        "text-secondary": "#717171",
        "bg-secondary": "#f7f7f7",
      },
    },
    container: {
      padding: "2rem",
    },
  },
  plugins: [],
};
