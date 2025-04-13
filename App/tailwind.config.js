//old tailwind v3 config

//const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/* @type {import('tailwindcss').Config} 
export default {
  content: [
    "index.html",
    "src//*.{js,ts,jsx,tsx,html,css}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'), flowbiteReact],
}*/


import flowbiteReact from 'flowbite-react/dist/plugin';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html,css}',
    './.flowbite-react/class-list.json',
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    extend: {},
  },
  plugins: ["@tailwindcss/postcss",flowbite, flowbiteReact],
};
