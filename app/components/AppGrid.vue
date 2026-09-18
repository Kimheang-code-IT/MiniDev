<script setup lang="ts">
import type { MiniDevApp } from '~/types'

defineProps<{ items: MiniDevApp[] }>()
</script>

<template>
  <div class="grid grid-cols-2 justify-items-center gap-x-3 gap-y-8 min-[480px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
    <AppCard v-for="app in items" :key="app.slug" :app="app" />
  </div>
</template>
