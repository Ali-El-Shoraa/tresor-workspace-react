/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      padding: "1rem",
    },

    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: "repeat(auto-fit, minmax(350px, 1fr))",
      },
    },
  },
  plugins: [
    require("postcss-nesting"), // إضافة هذا
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
