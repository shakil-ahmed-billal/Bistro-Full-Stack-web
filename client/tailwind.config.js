
const flowbite = require("flowbite-react/tailwind");
// user flowbite react ui components 

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        'feature': "url('./assets/home/featured.jpg')",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('daisyui'),
  ],
}