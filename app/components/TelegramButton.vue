<script setup lang="ts">
import { externalLinks } from '~/data/site'

const { t } = useI18n()
</script>

<template>
  <UTooltip :text="t('a11y.openTelegram')" :delay-duration="150">
    <a
      :href="externalLinks.telegram"
      target="_blank"
      rel="noopener noreferrer"
      class="telegram-float group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-brand-600 text-white shadow-[0_12px_32px_rgba(113,75,103,0.42)] transition duration-200 hover:-translate-y-1 hover:bg-brand-700 focus-visible:outline-white sm:bottom-7 sm:right-7 sm:size-16"
      :aria-label="t('a11y.contactTelegram')"
    >
      <span class="absolute inset-0 rounded-full border border-white/25" aria-hidden="true" />
      <svg viewBox="0 0 24 24" class="relative size-7 fill-current sm:size-8" aria-hidden="true">
        <path d="M21.8 3.4 18.6 19c-.24 1.1-.88 1.37-1.78.85l-4.9-3.61-2.36 2.27c-.26.26-.48.48-.99.48l.35-4.99 9.08-8.2c.4-.35-.09-.55-.61-.2L6.16 12.67l-4.84-1.51c-1.05-.33-1.07-1.05.22-1.56L20.48 2.3c.88-.32 1.65.2 1.32 1.1Z" />
      </svg>
    </a>
  </UTooltip>
</template>
