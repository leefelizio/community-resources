/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{jsx,js,html}"],
  content: ["./src/*.{html,js,jsx}"],
  prefix: "tw-",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
      screens: {
        "2xl": "1336px",
      },
    },
    extend: {
      colors: {
        "gray-subtle": "#576e9f",
        "orange-washed": "#c08e7e",
        "orange-washed-500": "#967064",
      },
    },
  },
  plugins: [],
};

// HINT - After changes on this file without mode: "jit" run "npm run tw"
