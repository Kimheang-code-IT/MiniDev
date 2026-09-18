<script setup lang="ts">
const { locale, setLocale } = useI18n()

const nextLocale = computed(() => locale.value === 'en' ? 'km' : 'en')
const nextLabel = computed(() => locale.value === 'en' ? 'ខ្មែរ' : 'English')

const switchLanguage = async () => {
  await setLocale(nextLocale.value)
}
</script>

<template>
  <UButton
    color="neutral"
    variant="ghost"
    size="sm"
    icon="i-lucide-languages"
    class="shrink-0"
    :aria-label="$t('language.switchTo', { language: nextLabel })"
    @click="switchLanguage"
  >
    <span class="hidden min-[380px]:inline">{{ nextLabel }}</span>
  </UButton>
</template>
