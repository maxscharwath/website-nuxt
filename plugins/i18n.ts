import { createI18n } from 'vue-i18n'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    globalInjection: true,
    messages: {}
  })

  vueApp.use(i18n)
})
