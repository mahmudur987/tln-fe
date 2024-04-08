/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1F9F90",
        "secondary-color": "#D9F1EE",
        "neutral-color": "#757575",
        primary1: "#1F9F90",
        primary2: "#222222",
        primary3: "#FFBB38",
        secondary1: "#EF262C",
        secondary2: "#797979",
        secondary3: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
