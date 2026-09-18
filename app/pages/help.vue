<script setup lang="ts">
import { supportChannels } from '~/data/help'

const { t } = useI18n()
const channelKeys = ['chat', 'email', 'guides'] as const
const localizedSupportChannels = computed(() => supportChannels.map((channel, index) => ({
  ...channel,
  title: t(`help.channels.${channelKeys[index]}.title`),
  text: t(`help.channels.${channelKeys[index]}.text`),
  action: t(`help.channels.${channelKeys[index]}.action`)
})))

useSeoMeta({
  title: 'Help',
  description: 'Search MiniDev help topics, explore common questions, and try the frontend support form.'
})
</script>

<template>
  <div>
    <section class="site-hero-bg pt-24 pb-10 sm:pt-28 sm:pb-14 lg:pt-36 lg:pb-16">
      <div class="site-container text-center">
        <h1 class="display-title mx-auto max-w-4xl text-balance text-3xl leading-tight sm:text-5xl lg:text-6xl">
          {{ t('help.title') }}
        </h1>
      </div>
    </section>

    <section class="section-space pt-0 sm:pt-2">
      <div class="site-container">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          <UCard
            v-for="channel in localizedSupportChannels"
            :key="channel.title"
            class="h-full"
            :ui="{ body: 'flex h-full flex-col p-5 sm:p-6' }"
          >
            <UIcon :name="channel.icon" class="size-6 text-brand-600 sm:size-7 dark:text-brand-300" />
            <h3 class="mt-4 text-base font-semibold sm:text-lg">{{ channel.title }}</h3>
            <p class="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{{ channel.text }}</p>
            <UButton to="#contact" color="primary" variant="link" class="mt-3 min-h-11 justify-start px-0">
              {{ channel.action }}
            </UButton>
          </UCard>
        </div>
      </div>
    </section>
  </div>
</template>
