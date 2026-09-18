<script setup lang="ts">
defineProps<{ slug: string }>()
</script>

<template>
  <svg viewBox="0 0 64 64" class="size-full" fill="none" aria-hidden="true">
    <!-- CRM: overlapping rounded squares -->
    <g v-if="slug === 'crm'">
      <rect x="8" y="14" width="32" height="32" rx="9" fill="#714b67" />
      <rect x="24" y="18" width="32" height="32" rx="9" fill="#0bb9b0" />
    </g>

    <!-- Projects: stacked lanes -->
    <g v-else-if="slug === 'projects'">
      <rect x="10" y="12" width="44" height="12" rx="6" fill="#20d6ca" />
      <rect x="10" y="28" width="32" height="12" rx="6" fill="#714b67" />
      <rect x="10" y="44" width="38" height="12" rx="6" fill="#ffb52e" />
    </g>

    <!-- Invoicing: sheet + coin -->
    <g v-else-if="slug === 'invoicing'">
      <rect x="14" y="8" width="30" height="42" rx="6" fill="#714b67" />
      <rect x="20" y="16" width="18" height="3" rx="1.5" fill="#fbf7fa" />
      <rect x="20" y="23" width="14" height="3" rx="1.5" fill="#fbf7fa" />
      <circle cx="42" cy="44" r="12" fill="#ffb52e" />
      <circle cx="42" cy="44" r="6" fill="#fbf7fa" />
    </g>

    <!-- Help Desk: concentric rings -->
    <g v-else-if="slug === 'help-desk'">
      <circle cx="32" cy="32" r="22" fill="#0bb9b0" />
      <circle cx="32" cy="32" r="13" fill="#fbf7fa" />
      <circle cx="32" cy="32" r="6" fill="#714b67" />
    </g>

    <!-- Website: window with dots -->
    <g v-else-if="slug === 'website'">
      <rect x="8" y="12" width="48" height="40" rx="10" fill="#20d6ca" />
      <rect x="8" y="12" width="48" height="12" rx="10" fill="#714b67" />
      <circle cx="16" cy="18" r="2.5" fill="#ffb52e" />
      <circle cx="24" cy="18" r="2.5" fill="#fbf7fa" />
      <circle cx="32" cy="18" r="2.5" fill="#fbf7fa" />
    </g>

    <!-- Online Store: price tag -->
    <g v-else-if="slug === 'online-store'">
      <path d="M18 12h18l16 16-22 22-16-16V12z" fill="#714b67" />
      <circle cx="28" cy="22" r="4" fill="#ffb52e" />
    </g>

    <!-- Inventory: stacked layers -->
    <g v-else-if="slug === 'inventory'">
      <rect x="12" y="36" width="40" height="14" rx="5" fill="#714b67" />
      <rect x="16" y="24" width="32" height="14" rx="5" fill="#0bb9b0" />
      <rect x="20" y="12" width="24" height="14" rx="5" fill="#ffb52e" />
    </g>

    <!-- Scheduling: calendar cells -->
    <g v-else-if="slug === 'scheduling'">
      <rect x="10" y="10" width="44" height="44" rx="10" fill="#f4eaf1" />
      <rect x="10" y="10" width="44" height="12" rx="10" fill="#714b67" />
      <rect x="16" y="30" width="12" height="8" rx="3" fill="#0bb9b0" />
      <rect x="36" y="30" width="12" height="8" rx="3" fill="#ffb52e" />
      <rect x="16" y="42" width="12" height="8" rx="3" fill="#20d6ca" />
    </g>

    <!-- Time Tracking: open arc -->
    <g v-else-if="slug === 'time-tracking'">
      <circle cx="32" cy="32" r="20" stroke="#714b67" stroke-width="8" />
      <path d="M32 12a20 20 0 0 1 17.3 10" stroke="#0bb9b0" stroke-width="8" stroke-linecap="round" />
      <circle cx="32" cy="32" r="5" fill="#ffb52e" />
    </g>

    <!-- Team: three capsules -->
    <g v-else-if="slug === 'team'">
      <rect x="8" y="22" width="16" height="28" rx="8" fill="#714b67" />
      <rect x="24" y="14" width="16" height="36" rx="8" fill="#0bb9b0" />
      <rect x="40" y="22" width="16" height="28" rx="8" fill="#ffb52e" />
    </g>

    <!-- Documents: offset sheets -->
    <g v-else-if="slug === 'documents'">
      <rect x="18" y="14" width="30" height="38" rx="6" fill="#20d6ca" />
      <rect x="10" y="8" width="30" height="38" rx="6" fill="#714b67" />
      <rect x="16" y="16" width="18" height="3" rx="1.5" fill="#fbf7fa" />
      <rect x="16" y="23" width="14" height="3" rx="1.5" fill="#fbf7fa" />
    </g>

    <!-- Analytics: donut slices -->
    <g v-else-if="slug === 'analytics'">
      <circle cx="32" cy="32" r="20" fill="#714b67" />
      <path d="M32 32 32 12 A20 20 0 0 1 49 43Z" fill="#0bb9b0" />
      <path d="M32 32 49 43 A20 20 0 0 1 18 46Z" fill="#ffb52e" />
      <circle cx="32" cy="32" r="8" fill="#fbf7fa" />
    </g>

    <!-- Sales: rising chevrons -->
    <g v-else-if="slug === 'sales'">
      <path d="M12 44 32 24 52 44" stroke="#714b67" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M18 34 32 20 46 34" stroke="#0bb9b0" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M24 24 32 16 40 24" stroke="#ffb52e" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
    </g>

    <!-- Knowledge: open book -->
    <g v-else-if="slug === 'knowledge'">
      <path d="M10 16c8 4 12 4 22 0v32c-10 4-14 4-22 0V16Z" fill="#714b67" />
      <path d="M32 16c8 4 14 4 22 0v32c-8 4-14 4-22 0V16Z" fill="#0bb9b0" />
      <path d="M32 16v32" stroke="#fbf7fa" stroke-width="3" stroke-linecap="round" />
    </g>

    <!-- Sign: interlocking rings -->
    <g v-else-if="slug === 'sign'">
      <circle cx="24" cy="32" r="14" stroke="#714b67" stroke-width="8" />
      <circle cx="40" cy="32" r="14" stroke="#0bb9b0" stroke-width="8" />
    </g>

    <!-- Subscriptions: nested rings -->
    <g v-else-if="slug === 'subscriptions'">
      <circle cx="32" cy="32" r="20" stroke="#0bb9b0" stroke-width="7" />
      <circle cx="32" cy="32" r="11" stroke="#714b67" stroke-width="7" />
      <circle cx="32" cy="32" r="4" fill="#ffb52e" />
    </g>

    <!-- AI Assistant: spark -->
    <g v-else-if="slug === 'ai-assistant'">
      <path d="M32 6 36 26 56 32 36 38 32 58 28 38 8 32 28 26Z" fill="#714b67" />
      <circle cx="32" cy="32" r="6" fill="#ffb52e" />
    </g>

    <!-- Point of Sale: terminal -->
    <g v-else-if="slug === 'point-of-sale'">
      <rect x="12" y="10" width="40" height="28" rx="8" fill="#714b67" />
      <rect x="18" y="16" width="28" height="16" rx="4" fill="#edfffc" />
      <rect x="24" y="42" width="16" height="6" rx="3" fill="#0bb9b0" />
      <rect x="20" y="50" width="24" height="6" rx="3" fill="#ffb52e" />
    </g>

    <!-- Discuss: offset pills -->
    <g v-else-if="slug === 'discuss'">
      <rect x="8" y="12" width="36" height="22" rx="11" fill="#714b67" />
      <rect x="20" y="30" width="36" height="22" rx="11" fill="#0bb9b0" />
    </g>

    <!-- Field Service: pin -->
    <g v-else-if="slug === 'field-service'">
      <path d="M32 8c-10 0-18 8-18 18 0 14 18 30 18 30s18-16 18-30c0-10-8-18-18-18Z" fill="#714b67" />
      <circle cx="32" cy="26" r="7" fill="#ffb52e" />
    </g>

    <!-- Planning: gantt bars -->
    <g v-else-if="slug === 'planning'">
      <rect x="8" y="14" width="36" height="12" rx="6" fill="#0bb9b0" />
      <rect x="20" y="30" width="36" height="12" rx="6" fill="#714b67" />
      <rect x="14" y="46" width="28" height="12" rx="6" fill="#ffb52e" />
    </g>

    <!-- Purchase: order pad -->
    <g v-else-if="slug === 'purchase'">
      <rect x="14" y="10" width="36" height="44" rx="8" fill="#0bb9b0" />
      <rect x="22" y="6" width="20" height="10" rx="5" fill="#714b67" />
      <rect x="22" y="26" width="20" height="4" rx="2" fill="#fbf7fa" />
      <rect x="22" y="34" width="16" height="4" rx="2" fill="#fbf7fa" />
    </g>

    <!-- Manufacturing: interlocking blocks -->
    <g v-else-if="slug === 'manufacturing'">
      <rect x="8" y="24" width="24" height="24" rx="6" fill="#714b67" />
      <rect x="24" y="8" width="24" height="24" rx="6" fill="#0bb9b0" />
      <rect x="32" y="32" width="24" height="24" rx="6" fill="#ffb52e" />
    </g>

    <!-- Dashboard: mosaic tiles -->
    <g v-else-if="slug === 'dashboard'">
      <rect x="8" y="8" width="28" height="28" rx="8" fill="#714b67" />
      <rect x="40" y="8" width="16" height="16" rx="5" fill="#0bb9b0" />
      <rect x="40" y="28" width="16" height="28" rx="5" fill="#ffb52e" />
      <rect x="8" y="40" width="28" height="16" rx="5" fill="#20d6ca" />
    </g>

    <g v-else>
      <rect x="12" y="12" width="40" height="40" rx="12" fill="#714b67" />
    </g>
  </svg>
</template>
