<script setup lang="ts">
const gitRevision = import.meta.env.VITE_GIT_REVISION;
</script>

<template>
  <footer class="min-h-10 flex flex-col justify-center p-5">
    <div class="flex flex-col items-center justify-center">
      <social-bar />
      <select v-model="$i18n.locale">
        <option>en</option>
        <option>fr</option>
      </select>
      <div class="text-primary font-mono">
        Made with <span class="animate-pulse">❤️</span> by Maxime Scharwath
      </div>
      <a
        class="text-primary my-1 flex items-center font-mono text-xs"
        href="https://github.com/maxscharwath/website"
      >
        <vue-feather type="github" class="mr-1 w-4" /> {{ gitRevision }}
      </a>
    </div>
  </footer>
</template>
<style lang="scss" scoped></style>
