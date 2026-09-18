<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()
const localeHead = useLocaleHead({ seo: true })
const { t } = useI18n()
const { public: { siteUrl } } = useRuntimeConfig()
const ogImage = `${siteUrl}/og-image.png`
const pageUrl = computed(() => `${siteUrl}${route.path === '/' ? '' : route.path}`)

useHead(() => ({
  meta: [{ name: 'theme-color', content: colorMode.value === 'dark' ? '#281923' : '#714b67' }]
}))

useHead(() => localeHead.value)

useSeoMeta({
  title: () => t('seo.homeTitle'),
  description: () => t('seo.homeDescription'),
  ogTitle: () => `${t('seo.homeTitle')} | MiniDev`,
  ogDescription: () => t('seo.homeDescription'),
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  ogSiteName: 'MiniDev',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
