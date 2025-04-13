
/*old tailwind v3

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
  */


//post css manages browser compatibility of styles
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';


export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};
