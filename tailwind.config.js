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
      airbnb: "#FF5A5F",
    },
    container: {
      padding: "2rem",
    },
  },
  plugins: [],
};
