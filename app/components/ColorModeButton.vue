<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n()

const nextTheme = computed(() => (colorMode.value === 'dark' ? 'light' : 'dark'))

const switchTheme = () => {
  colorMode.preference = nextTheme.value
}

const startViewTransition = (event: MouseEvent) => {
  const doc = document as Document & {
    startViewTransition?: (callback: () => void) => { ready: Promise<void> }
  }

  if (!doc.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )

  const transition = doc.startViewTransition(() => {
    switchTheme()
  })

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 600,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  }).catch(() => {})
}
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      color="neutral"
      variant="ghost"
      :icon="nextTheme === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
      :aria-label="t('a11y.switchTheme')"
      @click="startViewTransition"
    />
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 9999;
}

::view-transition-old(root) {
  z-index: 1;
}
</style>
