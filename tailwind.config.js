const colors = require('tailwindcss/colors');

module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '375px',
      'xl': '1440px'
    },
    colors:{
      'violet': 'hsl(257, 40%, 49%)',
      'soft-magenta': 'hsl(300, 69%, 71%)',
      white: colors.white
    },
    fontFamily:{
      headings: ['Poppins', 'sans-serif'],
      body: ['Open Sans', 'sans-serif']
    },
    fontSize:{
      'sm': '16px',
      'base': '18px',
      'xl': '24px',
      '4xl': '40px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
