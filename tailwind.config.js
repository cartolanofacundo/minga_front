/** @type {import('tailwindcss').Config} */
//eslint-disable-next-line
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins", "sans-serif"'],
        'roboto': ['"Roboto", "sans-serif"'],
      },
    }
  },
  variants: {},
  plugins: []
}

