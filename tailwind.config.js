/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        g4AGreen: '#16a34a', // Same hex value as green-600 in Tailwind
      },
    },
  },
  plugins: [],
};
