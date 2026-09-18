<template>
  <div class="min-h-screen">
    <a href="#main-content" class="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0">Skip to content</a>
    <SiteHeader />
    <main id="main-content" class="pt-16">
      <slot />
    </main>
    <SiteFooter />
    <TelegramButton />
    <AuthModal />
  </div>
</template>
