<script setup lang="ts">
import type { MiniDevApp } from '~/types'

defineProps<{ app: MiniDevApp }>()

const { t } = useI18n()
</script>

<template>
  <NuxtLink
    :to="`/apps/${app.slug}`"
    class="group flex min-w-0 flex-col items-center rounded-md px-1 py-2 text-center focus-visible:outline-brand-600"
  >
    <span class="grid size-22 place-items-center rounded-md bg-white p-3.5 shadow-[0_8px_24px_rgba(23,25,39,0.08)] ring-1 ring-zinc-200/60 transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_14px_32px_rgba(113,75,103,0.18)] sm:size-26 sm:p-4 dark:ring-white/10">
      <AppMark :slug="app.slug" class="size-full" />
    </span>
    <span class="mt-3 flex items-center gap-1 text-sm font-semibold text-zinc-800 group-hover:text-brand-600 sm:text-[15px] dark:text-zinc-100 dark:group-hover:text-brand-300">
      {{ t(`apps.${app.slug}`) }}
      <UIcon name="i-lucide-arrow-up-right" class="size-3.5 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
    </span>
  </NuxtLink>
</template>
