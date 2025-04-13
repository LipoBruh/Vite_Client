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


import flowbite from 'flowbite/plugin';
import flowbiteReact from 'flowbite-react/plugin/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html,css}',
    './.flowbite-react/class-list.json',
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite, flowbiteReact],
};
