<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { queryContent } from '#imports'
const { t, locale } = useI18n();
const educations = await queryContent(locale.value, '_educations').find()
</script>

<i18n lang="yaml">
en:
  title: Education
fr:
  title: Éducation
</i18n>

<template>
  <CoreSection class="text-blue-300">
    <CoreSectionTitle>{{ t("title") }}</CoreSectionTitle>
    <CoreSelectTab :list="educations">
      <template #tab="{ item }">
        {{ item.title }}
      </template>
      <template #selected="{ item }">
        <div class="flex flex-col">
            <span class="text-lg font-bold text-blue-200">{{item.title }}</span>
          <span class="text-sm text-blue-300">{{ item.range }}</span>
          <span class="text-primary font-mono text-sm">{{item.degree }}</span>
          <span class="text-sm text-blue-300">{{ item.location }}</span>
          <article class="mt-4">
            <CoreMarkdown :value="item" />
          </article>
        </div>
      </template>
    </CoreSelectTab>
  </CoreSection>
</template>
<style lang="scss" scoped></style>
