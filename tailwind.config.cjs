/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        galaxy: "url('./public/Fundo.png')",
      },
    },
  },
  plugins: [],
};
