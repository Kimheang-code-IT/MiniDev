<script setup lang="ts">
import { apps } from '~/data/apps'

const { open } = useAuthModal()
const { t, locale } = useI18n()
const isKhmer = computed(() => locale.value === 'km')

useSeoMeta({
  title: 'All your work on one platform',
  description: () => t('home.seoDescription'),
  ogTitle: 'MiniDev — All your work on one platform',
  ogDescription: () => t('home.seoDescription')
})
</script>

<template>
  <div>
    <section class="site-hero-bg relative flex min-h-[calc(100svh-12rem)] items-center overflow-hidden">
      <div class="site-container relative z-10 text-center">
        <h1
          class="hero-display mx-auto max-w-5xl font-bold tracking-tight text-zinc-950 sm:mb-10 dark:text-white"
          :class="isKhmer
            ? 'text-3xl leading-snug sm:text-5xl lg:text-6xl'
            : 'text-4xl leading-[1.05] tracking-[-0.045em] sm:text-6xl sm:leading-[0.98] lg:text-[5.5rem]'"
        >
          <span class="block">{{ t('home.titleLead') }}</span>
          <span class="hero-highlight relative inline-block">{{ t('home.titleHighlight') }}</span>
        </h1>
        <div class="mt-12 flex flex-col items-center justify-center gap-3 sm:mt-16 sm:flex-row">
          <UButton size="xl" class="brand-action min-w-52 justify-center" @click="open('trial')">
            {{ t('home.primaryAction') }}
          </UButton>
          <UButton to="#apps" size="xl" class="brand-action min-w-52 justify-center">
            {{ t('home.secondaryAction') }}
          </UButton>
        </div>

        <div class="mt-8 flex items-start justify-center gap-3 text-brand-600 sm:mt-10 dark:text-brand-300">
          <UIcon name="i-lucide-move-down-right" class="mt-1 size-6 rotate-12 sm:size-7" aria-hidden="true" />
          <p
            class="hero-display -rotate-3 whitespace-pre-line font-bold"
            :class="isKhmer ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'"
          >
            {{ t('home.priceNote') }}
          </p>
        </div>
      </div>
    </section>

    <section id="apps" class="relative scroll-mt-16 overflow-hidden bg-zinc-100 pb-16 pt-24 sm:pb-20 sm:pt-32 dark:bg-zinc-900">
      <div class="pointer-events-none absolute -top-16 left-1/2 h-30 w-[130%] -translate-x-1/2 rounded-[50%] bg-white dark:bg-zinc-950" />
      <div class="site-container relative">
        <AppGrid :items="apps" />
      </div>
    </section>

    <section class="relative overflow-hidden bg-white py-20 sm:py-28 dark:bg-zinc-950">
      <div class="site-container">
        <h2
          class="hero-display mx-auto max-w-4xl text-center font-bold tracking-tight text-zinc-950 dark:text-white"
          :class="isKhmer ? 'text-2xl leading-snug sm:text-4xl' : 'text-3xl sm:text-5xl'"
        >
          <span class="relative inline-block bg-rose-300/80 px-2">{{ t('home.qualityLead') }}</span>
          <span class="ml-2 decoration-accent-400 underline decoration-8 underline-offset-4">{{ t('home.qualityTail') }}</span>
        </h2>

        <div class="relative mx-auto mt-22 max-w-5xl">
          <div class="absolute -left-20 -top-16 z-0 size-72 rounded-full bg-zinc-100 dark:bg-zinc-900" />
          <ProductMockup :title="t('home.workspace')" class="relative z-10" />
        </div>
      </div>
    </section>

  </div>
</template>
