/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx}"],
  prefix: 'tw-',
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}
// After changes on this file, re-run the command below to rebuild TW
// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
