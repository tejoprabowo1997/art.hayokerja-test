// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Penyalur ART Terpercaya | HayoKerja',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'Penyalur ART Terpercaya | HayoKerja',
        },
        {
          name: 'og:title',
          content: 'Penyalur ART Terpercaya | HayoKerja',
        },
        {
          name: 'og:description',
          content: 'Penyalur ART Terpercaya | HayoKerja',
        },
        {
          name: 'og:image',
          content: 'https://www.hayokerja.com/logo.png',
        },
        {
          name: 'og:url',
          content: 'https://www.hayokerja.com/logo.png',
        },
        {
          name: 'twitter:title',
          content: 'Penyalur ART Terpercaya | HayoKerja',
        },
        {
          name: 'twitter:description',
          content: 'Penyalur ART Terpercaya | HayoKerja',
        },
        {
          name: 'twitter:image',
          content: 'https://www.hayokerja.com/logo.png',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'favicon.ico',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap',
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in',
    },
  },
  imports: {
    dirs: ['./stores'],
  },
  css: ['~/assets/styles/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-quasar-ui',
  ],
  tailwindcss: {
    cssPath: '~/assets/styles/css/tailwind.css',
    injectPosition: 'last',
    viewer: false,
    configPath: 'tailwind.config.ts',
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  quasar: {
    extras: {
      fontIcons: ['material-icons'],
      animations: 'all',
    },
    config: {
      brand: {
        primary: '#00602b', // Hijau Materialize
        secondary: '#FFC107', // Kuning Materialize
        accent: '#9C27B0', // Ungu Materialize
        dark: '#1E1E1E', // Hitam Materialize
        negative: '#F44336', // Merah Materialize
        warning: '#FF9800', // Oranye Materialize
        positive: '#027435', // Hijau Materialize
      },
    },
    plugins: ['Loading', 'Notify', 'AppFullscreen', 'Dialog'],
  },
});
