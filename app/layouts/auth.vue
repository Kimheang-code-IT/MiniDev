<template>
  <div class="site-top-bg relative grid min-h-screen place-items-center overflow-hidden px-4 py-12">
    <div class="soft-grid absolute inset-0 opacity-50" aria-hidden="true" />
    <div class="absolute right-5 top-5 z-10 flex items-center gap-2">
      <LanguageSwitcher />
      <ColorModeButton />
    </div>

    <main id="main-content" class="relative z-10 w-full max-w-md">
      <slot />
    </main>
  </div>
</template>
