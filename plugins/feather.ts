import { defineNuxtPlugin } from 'nuxt/app'
import VueFeather from 'vue-feather';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component(VueFeather.name, VueFeather);
})
