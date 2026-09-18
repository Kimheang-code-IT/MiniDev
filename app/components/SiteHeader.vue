<script setup lang="ts">
import { siteNavigation } from '~/data/site'

const route = useRoute()
const { open } = useAuthModal()
const { t } = useI18n()
const { isAuthenticated, user, logout } = useDemoAuth()
const mobileOpen = ref(false)
const scrolled = ref(false)
const hidden = ref(false)
let lastScrollY = 0

const isActive = (to: string) => route.path === to
const navigationLabel = (to: string) => t(to === '/' ? 'nav.home' : to === '/pricing' ? 'nav.pricing' : 'nav.help')

const updateScrolled = () => {
  const currentScrollY = window.scrollY
  const scrollDelta = currentScrollY - lastScrollY
  scrolled.value = currentScrollY > 8

  if (currentScrollY <= 80) {
    hidden.value = false
    lastScrollY = currentScrollY
  } else if (scrollDelta > 6) {
    hidden.value = true
    mobileOpen.value = false
    lastScrollY = currentScrollY
  } else if (scrollDelta < -6) {
    hidden.value = false
    lastScrollY = currentScrollY
  }
}

watch(() => route.fullPath, () => {
  mobileOpen.value = false
  hidden.value = false
})

const closeMobile = () => {
  mobileOpen.value = false
}

const signOut = () => {
  logout()
  mobileOpen.value = false
}

onMounted(() => {
  lastScrollY = window.scrollY
  updateScrolled()
  window.addEventListener('scroll', updateScrolled, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', updateScrolled))
</script>

<template>
  <header
    class="site-top-bg fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="[
      scrolled ? 'shadow-md shadow-zinc-950/5 dark:shadow-black/30' : '',
      hidden ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <div class="site-container grid h-16 grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
      <NuxtLink to="/" class="group flex w-fit items-center gap-2 rounded-full font-bold tracking-tight" aria-label="MiniDev home">
        <span class="relative block size-7.5" aria-hidden="true">
          <span class="absolute left-0 top-1 size-5 rounded-full border-5 border-brand-500 transition-transform group-hover:-translate-x-0.5" />
          <span class="absolute bottom-1 right-0 size-5 rounded-full border-5 border-accent-500 transition-transform group-hover:translate-x-0.5" />
        </span>
        <span class="text-xl font-bold text-zinc-700 dark:text-zinc-100">Mini<span class="text-brand-600 dark:text-brand-300">Dev</span></span>
      </NuxtLink>

      <nav class="hidden items-center gap-4 md:flex lg:gap-8" aria-label="Primary navigation">
        <UButton
          v-for="item in siteNavigation"
          :key="item.to"
          :to="item.to"
          color="neutral"
          variant="ghost"
          class="text-[16px] font-semibold"
          :class="isActive(item.to) ? 'text-brand-600 dark:text-brand-300' : 'text-zinc-700 dark:text-zinc-200'"
          :aria-current="isActive(item.to) ? 'page' : undefined"
        >
          {{ navigationLabel(item.to) }}
        </UButton>
      </nav>

      <div class="flex items-center justify-end gap-1 sm:gap-3">
        <ColorModeButton />
        <template v-if="isAuthenticated">
          <span class="hidden max-w-36 truncate text-sm text-zinc-600 lg:inline dark:text-zinc-300">{{ user?.email }}</span>
          <UButton color="neutral" variant="ghost" class="hidden lg:inline-flex" @click="logout">{{ t('auth.signOut') }}</UButton>
        </template>
        <UButton v-else to="/login" class="hidden lg:inline-flex" color="neutral" variant="ghost">{{ t('nav.signIn') }}</UButton>
        <UButton size="sm" class="brand-action hidden px-4 sm:inline-flex" @click="open('trial')">{{ t('nav.tryFree') }}</UButton>
        <USlideover v-model:open="mobileOpen" :title="t('nav.menu')" :description="t('nav.menuDescription')">
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-menu"
            :aria-label="t('nav.openMenu')"
            class="md:hidden"
          />
          <template #body>
            <nav class="flex flex-col gap-2" aria-label="Mobile navigation">
              <UButton
                v-for="item in siteNavigation"
                :key="item.to"
                :to="item.to"
                color="neutral"
                variant="ghost"
                size="lg"
                class="justify-start"
                :aria-current="isActive(item.to) ? 'page' : undefined"
              >
                {{ navigationLabel(item.to) }}
              </UButton>
              <USeparator class="my-3" />
              <template v-if="isAuthenticated">
                <p class="px-3 text-sm text-zinc-500">{{ user?.email }}</p>
                <UButton color="neutral" variant="ghost" size="xl" class="justify-start" @click="signOut">{{ t('auth.signOut') }}</UButton>
              </template>
              <template v-else>
                <UButton to="/login" color="neutral" variant="ghost" size="xl" class="justify-start" @click="closeMobile">{{ t('nav.signIn') }}</UButton>
                <UButton to="/signup" size="xl" class="brand-action justify-start" @click="closeMobile">{{ t('nav.signUp') }}</UButton>
              </template>
            </nav>
          </template>
        </USlideover>
      </div>
    </div>
  </header>
</template>
