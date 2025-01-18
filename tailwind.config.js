/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFC300',
        gray500: '#797979',
        gray200: '#D0D0D0',
        gray100: '#F6F6F6',
        placeHolder: '#b3b3b3',
      },
    },
  },
  plugins: [],
};
