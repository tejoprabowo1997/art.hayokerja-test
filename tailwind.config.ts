/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00602b', // Biru Materialize
        secondary: '#FFC107', // Kuning Materialize
        success: '#4CAF50', // Hijau Materialize
        warning: '#FF9800', // Oranye Materialize
        danger: '#F44336', // Merah Materialize
        info: '#00BCD4', // Cyan Materialize
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
