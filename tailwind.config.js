/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // https://v2.tailwindcss.com/docs/background-image#background-images
      backgroundImage: theme => ({
        'hero-pattern': "url('pattern-bg.png')",
      }),
    },
  },
  plugins: [],
};
