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
    },
    colors: {
      airbnb: "#FF385C",
      "text-primary": "#484848",
      "text-secondary": "#767676",
      "text-white": "#ffffff",
    },
    container: {
      padding: "2rem",
    },
  },
  plugins: [],
};
