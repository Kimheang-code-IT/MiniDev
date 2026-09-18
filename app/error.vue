<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const { t } = useI18n()
const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <UApp>
    <main class="site-top-bg grid min-h-screen place-items-center px-4 text-center">
      <div class="max-w-lg">
        <span class="mx-auto grid size-16 place-items-center rounded-2xl bg-brand-600 text-white"><UIcon name="i-lucide-map-pin-off" class="size-8" /></span>
        <p class="eyebrow mt-6">{{ t('error.label') }} {{ error.statusCode }}</p>
        <h1 class="mt-3 text-4xl font-bold tracking-tight">{{ error.statusCode === 404 ? t('error.notFoundTitle') : t('error.serverTitle') }}</h1>
        <p class="mt-4 text-zinc-600 dark:text-zinc-300">{{ error.statusCode === 404 ? t('error.notFoundText') : t('error.serverText') }}</p>
        <UButton class="brand-action mt-8" size="lg" icon="i-lucide-arrow-left" @click="goHome">{{ t('error.back') }}</UButton>
      </div>
    </main>
  </UApp>
</template>
