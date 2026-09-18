<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

const goHome = () => clearError({ redirect: '/' })
</script>

<template>
  <UApp>
    <main class="site-top-bg grid min-h-screen place-items-center px-4 text-center">
      <div class="max-w-lg">
        <span class="mx-auto grid size-16 place-items-center rounded-2xl bg-brand-600 text-white"><UIcon name="i-lucide-map-pin-off" class="size-8" /></span>
        <p class="eyebrow mt-6">Error {{ error.statusCode }}</p>
        <h1 class="mt-3 text-4xl font-bold tracking-tight">{{ error.statusCode === 404 ? 'This page is not here.' : 'Something went wrong.' }}</h1>
        <p class="mt-4 text-zinc-600 dark:text-zinc-300">{{ error.statusCode === 404 ? 'The MiniDev app or page may have moved.' : 'Please return home and try again.' }}</p>
        <UButton class="brand-action mt-8" size="lg" icon="i-lucide-arrow-left" @click="goHome">Back to MiniDev</UButton>
      </div>
    </main>
  </UApp>
</template>
