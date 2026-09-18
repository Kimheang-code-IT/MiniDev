<script setup lang="ts">
import { getAppBySlug } from '~/data/apps'

const route = useRoute()
const { open } = useAuthModal()
const { t } = useI18n()
const product = computed(() => getAppBySlug(String(route.params.slug)))

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'App not found' })
}

const productName = computed(() => t(`apps.${product.value!.slug}`))

useSeoMeta({
  title: () => productName.value,
  description: () => product.value!.seo.description,
  ogTitle: () => `${productName.value} | MiniDev`,
  ogDescription: () => product.value!.seo.description
})
</script>

<template>
  <div v-if="product">
    <section class="site-hero-bg relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-36 lg:pb-24">
      <div class="site-container">
        <div class="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span :class="['grid size-16 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-xl', product.gradient]"><UIcon :name="product.icon" class="size-9" /></span>
            <p class="eyebrow mt-6">{{ product.category }}</p>
            <h1 class="display-title mt-3">{{ productName }}</h1>
            <p class="body-lead mt-5">{{ product.description }}</p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row"><UButton size="xl" class="brand-action" @click="open('trial', product.slug)">{{ t('product.tryFree', { name: productName }) }}</UButton><UButton to="/pricing" size="xl" class="brand-action">{{ t('product.viewPricing') }}</UButton></div>
            <p class="mt-4 text-sm text-zinc-500">{{ t('product.demoNote') }}</p>
          </div>
          <ProductMockup :title="`MiniDev ${productName}`" demo :video="product.video" :poster="product.poster" />
        </div>
      </div>
    </section>

    <section class="section-space">
      <div class="site-container space-y-16 lg:space-y-24">
        <article v-for="(benefit, index) in product.benefits" :key="benefit.title" class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div :class="index % 2 ? 'lg:order-2' : ''">
            <span class="grid size-12 place-items-center rounded-2xl bg-brand-100 text-brand-700 dark:bg-brand-950 dark:text-brand-200"><UIcon :name="benefit.icon" class="size-6" /></span>
            <h2 class="section-title mt-6">{{ benefit.title }}</h2>
            <p class="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">{{ benefit.description }}</p>
          </div>
          <div class="rounded-3xl bg-zinc-50 p-5 dark:bg-zinc-900" :class="index % 2 ? 'lg:order-1' : ''"><ProductMockup :title="benefit.title" :seed="index + 1" /></div>
        </article>
      </div>
    </section>

    <section class="section-space">
      <div class="site-container">
        <div class="mx-auto max-w-2xl text-center"><h2 class="section-title mt-3">{{ t('product.featuresTitle') }}</h2></div>
        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article v-for="feature in product.features" :key="feature.title" class="rounded-2xl bg-white p-6 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800">
            <UIcon :name="feature.icon" class="size-6 text-brand-600 dark:text-brand-300" /><h3 class="mt-4 text-lg font-semibold">{{ feature.title }}</h3><p class="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ feature.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-space bg-brand-50 dark:bg-brand-950/30">
      <div class="site-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div><p class="eyebrow">{{ t('product.questions') }}</p><h2 class="section-title mt-3">{{ t('product.about', { name: productName }) }}</h2></div>
        <UAccordion :items="product.faqs" :ui="{ item: 'border-b border-brand-200 dark:border-brand-800' }" />
      </div>
    </section>
  </div>
</template>
