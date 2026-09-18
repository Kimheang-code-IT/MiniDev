<script setup lang="ts">
import { externalLinks, footerData } from '~/data/site'

const { open } = useAuthModal()
const { t } = useI18n()
const year = new Date().getFullYear()

const linkKeys: Record<string, string> = {
  CRM: 'crm', Projects: 'projects', Invoicing: 'invoicing', 'Help Desk': 'helpDesk',
  'Help center': 'helpCenter', Pricing: 'pricing', 'Getting started': 'gettingStarted', 'All applications': 'allApps',
  Home: 'home', Website: 'website', Analytics: 'analytics'
}

const linkLabel = (label: string) => t(`footer.links.${linkKeys[label]}`)
</script>

<template>
  <footer class="bg-[#252734] text-zinc-300">
    <div class="site-container py-10 lg:py-14">
      <div class="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-[0.75fr_0.75fr_0.75fr_1.8fr] lg:gap-10">
        <div>
          <h2 class="text-xl font-medium text-white">{{ t('footer.products') }}</h2>
          <ul class="mt-5 space-y-3 text-sm">
            <li v-for="link in footerData.productLinks" :key="link.to"><NuxtLink :to="link.to" class="transition hover:text-white">{{ linkLabel(link.label) }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-medium text-white">{{ t('footer.resources') }}</h2>
          <ul class="mt-5 space-y-3 text-sm">
            <li v-for="link in footerData.resourceLinks" :key="link.to"><NuxtLink :to="link.to" class="transition hover:text-white">{{ linkLabel(link.label) }}</NuxtLink></li>
          </ul>
          <h3 class="mt-8 text-lg font-medium text-white">{{ t('footer.account') }}</h3>
          <div class="mt-4 flex flex-col items-start gap-3 text-sm">
            <NuxtLink to="/login" class="transition hover:text-white">{{ t('footer.signIn') }}</NuxtLink>
            <NuxtLink to="/signup" class="transition hover:text-white">{{ t('footer.createAccount') }}</NuxtLink>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-medium text-white">{{ t('footer.company') }}</h2>
          <ul class="mt-5 space-y-3 text-sm">
            <li v-for="link in footerData.companyLinks" :key="link.to"><NuxtLink :to="link.to" class="transition hover:text-white">{{ linkLabel(link.label) }}</NuxtLink></li>
          </ul>
          <h3 class="mt-8 text-lg font-medium text-white">{{ t('footer.getStarted') }}</h3>
          <button type="button" class="mt-4 rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700" @click="open('trial')">{{ t('footer.tryFree') }}</button>
        </div>

        <div class="lg:pl-8">
          <div class="flex items-center justify-between gap-4">
            <LanguageSwitcher />
            <ColorModeButton />
          </div>
          <div class="my-7 h-px bg-zinc-600/70" />
          <p class="text-sm leading-7 text-zinc-300">
            {{ t('footer.description') }}
          </p>
          <p class="mt-5 text-sm leading-7 text-zinc-300">
            {{ t('footer.supporting') }}
          </p>
          <div class="mt-7 flex items-center gap-3">
            <a :href="externalLinks.telegram" target="_blank" rel="noopener noreferrer" class="grid size-10 place-items-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white" aria-label="Open Telegram">
              <svg viewBox="0 0 24 24" class="size-5 fill-current" aria-hidden="true"><path d="M21.8 3.4 18.6 19c-.24 1.1-.88 1.37-1.78.85l-4.9-3.61-2.36 2.27c-.26.26-.48.48-.99.48l.35-4.99 9.08-8.2c.4-.35-.09-.55-.61-.2L6.16 12.67l-4.84-1.51c-1.05-.33-1.07-1.05.22-1.56L20.48 2.3c.88-.32 1.65.2 1.32 1.1Z" /></svg>
            </a>
            <a :href="externalLinks.github" target="_blank" rel="noopener noreferrer" class="grid size-10 place-items-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white" aria-label="Open GitHub"><UIcon name="i-lucide-github" class="size-5" /></a>
            <NuxtLink to="/help" class="grid size-10 place-items-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white" aria-label="Contact support"><UIcon name="i-lucide-mail" class="size-5" /></NuxtLink>
            <NuxtLink to="/pricing" class="grid size-10 place-items-center rounded-full text-zinc-300 transition hover:bg-white/10 hover:text-white" aria-label="View pricing"><UIcon name="i-lucide-badge-dollar-sign" class="size-5" /></NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-zinc-700/70">
      <div class="site-container flex min-h-16 flex-col items-center justify-between gap-2 pt-4 pb-24 text-center text-xs text-zinc-400 sm:flex-row sm:py-4 sm:text-left">
        <p>© {{ year }} MiniDev. {{ t('footer.copyright') }}</p>
        <p>{{ t('footer.designed') }}</p>
      </div>
    </div>
  </footer>
</template>
