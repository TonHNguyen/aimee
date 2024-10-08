/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // Adjust this if needed based on your project structure
  theme: {
    extend: {},
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
  },
  plugins: [
    ('@tailwindcss/filters'), // Import the filters plugin correctly
  ],
}
