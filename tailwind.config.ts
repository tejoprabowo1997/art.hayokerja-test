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
      animation: {
        wave: 'wave 0.5s ease-in-out',
        click: 'click 0.3s',
        shadowPulse: 'shadowPulse 2s infinite',
        shake: 'shake 0.5s ease-in-out',
        slideInLeft: 'slideInLeft 0.5s ease-in-out',
        slideOutRight: 'slideOutRight 0.5s ease-in-out',
        slideInRight: 'slideInRight 0.5s ease-in-out',
        slideOutLeft: 'slideOutLeft 0.5s ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        click: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        shadowPulse: {
          '0%': { boxShadow: '0 0 0 0px rgba(255, 99, 71, 0.7)' },
          '70%': { boxShadow: '0 0 0 15px rgba(255, 99, 71, 0)' },
          '100%': { boxShadow: '0 0 0 0px rgba(255, 99, 71, 0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
