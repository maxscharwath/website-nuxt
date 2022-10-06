import type { RouterOptions } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterOptions> {
  scrollBehavior: (to) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  }
}
