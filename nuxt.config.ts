// https://v3.nuxtjs.org/api/configuration/nuxt.config
import VueI18nPlugin from '@intlify/vite-plugin-vue-i18n'
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxt/content',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  vite: {
    plugins: [
      VueI18nPlugin({
        defaultSFCLang: 'yaml',
      }),
    ],
  },
  content:{
  },
  css: ['~/assets/css/tailwind.css'],
})
