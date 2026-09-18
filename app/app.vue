<script setup lang="ts">
const route = useRoute()
const colorMode = useColorMode()
const localeHead = useLocaleHead({ seo: true })
const { public: { siteUrl } } = useRuntimeConfig()
const ogImage = `${siteUrl}/og-image.png`
const pageUrl = computed(() => `${siteUrl}${route.path === '/' ? '' : route.path}`)

useHead(() => ({
  meta: [{ name: 'theme-color', content: colorMode.value === 'dark' ? '#281923' : '#714b67' }]
}))

useHead(() => localeHead.value)

useSeoMeta({
  title: 'Connected tools for growing teams',
  description: 'MiniDev brings projects, sales, support, finance, and team workflows into one responsive workspace.',
  ogTitle: 'MiniDev — connected tools for growing teams',
  ogDescription: 'Explore a clear, connected suite of business tools built for teams that want to move faster.',
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
