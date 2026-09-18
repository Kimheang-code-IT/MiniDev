<script setup lang="ts">
import { comparisonRows, plans, pricingFaqs } from '~/data/plans'

const { open } = useAuthModal()
const { t } = useI18n()
const billing = ref<'monthly' | 'yearly'>('yearly')
const localizedPlans = computed(() => plans.map(plan => ({
  ...plan,
  name: t(`pricing.plans.${plan.id}.name`),
  description: t(`pricing.plans.${plan.id}.description`),
  features: plan.features.map((_, index) => t(`pricing.plans.${plan.id}.features.${index}`))
})))

useSeoMeta({
  title: 'Pricing',
  description: 'Compare MiniDev plans for small, growing, and scaling teams. Demo prices are placeholders.'
})

</script>

<template>
  <div>
    <section class="site-hero-bg pt-28 pb-16 text-center sm:pt-32 lg:pt-40">
      <div class="site-container">
        <h1 class="display-title mx-auto -mt-22 mb-4 max-w-3xl">{{ t('pricing.title') }}</h1>
        <div class="mx-auto mt-8 inline-flex rounded-full bg-zinc-100 p-1 dark:bg-zinc-800" aria-label="Billing period">
          <button type="button" class="min-h-11 rounded-full px-5 text-sm font-semibold" :class="billing === 'monthly' ? 'bg-white text-brand-700 shadow-sm dark:bg-zinc-700 dark:text-brand-200' : 'text-zinc-500'" @click="billing = 'monthly'">{{ t('pricing.monthly') }}</button>
          <button type="button" class="min-h-11 rounded-full px-5 text-sm font-semibold" :class="billing === 'yearly' ? 'bg-white text-brand-700 shadow-sm dark:bg-zinc-700 dark:text-brand-200' : 'text-zinc-500'" @click="billing = 'yearly'">{{ t('pricing.yearly') }} <span class="ml-1 text-accent-700 dark:text-accent-300">{{ t('pricing.save') }}</span></button>
        </div>
      </div>
    </section>

    <section class="pb-20 lg:pb-28">
      <div class="site-container grid gap-6 lg:grid-cols-3">
        <article v-for="plan in localizedPlans" :key="plan.id" class="relative flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 dark:bg-zinc-900" :class="plan.highlighted ? 'ring-2 ring-brand-600 lg:-translate-y-3 lg:shadow-xl' : 'ring-zinc-200 dark:ring-zinc-800'">
          <UBadge v-if="plan.highlighted" class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full">{{ t('pricing.popular') }}</UBadge>
          <h2 class="text-2xl font-bold">{{ plan.name }}</h2>
          <p class="mt-3 min-h-12 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{{ plan.description }}</p>
          <div class="mt-7 flex items-end gap-2">
            <span class="text-5xl font-bold tabular-nums">${{ billing === 'yearly' ? plan.yearly : plan.monthly }}</span>
            <span class="pb-1 text-sm text-zinc-500">{{ t('pricing.perMonth') }}</span>
          </div>
          <UButton v-if="plan.id === 'starter'" to="/signup" class="brand-action mt-7" size="lg" block>{{ t('pricing.getStarted') }}</UButton>
          <UButton v-else class="brand-action mt-7" size="lg" block @click="open('trial')">{{ t('pricing.startTrial') }}</UButton>
          <ul class="mt-7 space-y-3 text-sm">
            <li v-for="feature in plan.features" :key="feature" class="flex gap-3"><UIcon name="i-lucide-circle-check" class="mt-0.5 size-5 shrink-0 text-accent-700 dark:text-accent-300" /><span>{{ feature }}</span></li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section-space">
      <div class="site-container -mt-26">
        <div class="mx-auto max-w-2xl text-center"><h2 class="section-title mt-3">{{ t('pricing.compareTitle') }}</h2></div>
        <div class="mt-10 overflow-x-auto rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <table class="w-full min-w-[680px] border-collapse text-left text-sm">
            <caption class="sr-only">{{ t('pricing.comparison') }}</caption>
            <thead>
              <tr class="border-b border-zinc-200 dark:border-zinc-800">
                <th scope="col" class="p-5">{{ t('pricing.feature') }}</th>
                <th v-for="plan in localizedPlans" :key="plan.id" scope="col" class="p-5 text-center">{{ plan.name }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparisonRows" :key="row.label" class="border-b border-zinc-100 last:border-0 dark:border-zinc-800/80">
                <th scope="row" class="p-5 font-medium">{{ row.label }}</th>
                <td v-for="(value, index) in row.values" :key="`${row.label}-${index}`" class="p-5 text-center text-zinc-600 dark:text-zinc-300">
                  <UIcon v-if="value === true" name="i-lucide-check" class="mx-auto size-5 text-accent-700" aria-label="Included" />
                  <span v-else-if="value === false" aria-label="Not included">—</span>
                  <span v-else>{{ value }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-space bg-brand-50 dark:bg-brand-950/30">
      <div class="site-container grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div><p class="eyebrow">{{ t('pricing.questions') }}</p><h2 class="section-title mt-3">{{ t('pricing.before') }}</h2><p class="mt-4 text-zinc-600 dark:text-zinc-300">{{ t('pricing.notice') }}</p></div>
        <UAccordion :items="pricingFaqs" :ui="{ item: 'border-b border-brand-200 dark:border-brand-800' }" />
      </div>
    </section>
  </div>
</template>
