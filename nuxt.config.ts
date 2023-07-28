// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  devtools: { enabled: true },
  css: ['~/assets/styles/css/tailwind.css', '~/assets/styles/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      environmentInfo: {
        isDevelopment: process.env.NODE_ENV === 'development',
        isProduction: process.env.NODE_ENV === 'production',
      },
    },
  },
  // nitro: {
  //   preset: 'firebase'
  // },
  imports: {
    dirs: ['./stores'],
  },
  modules: ['nuxt-icon', '@nuxt/image', '@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
})
