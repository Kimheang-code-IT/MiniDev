<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()
const { t } = useI18n()
const { isOpen, selectedApp, close } = useAuthModal()
const loading = ref(false)

const schema = z.object({
  name: z.string().min(2, t('auth.nameRequired')),
  email: z.string().email(t('auth.invalidEmail')),
  company: z.string().min(2, t('auth.companyRequired')),
  teamSize: z.string().min(1, t('auth.teamSizeRequired')),
  country: z.string().min(1, t('auth.countryRequired'))
})
const countryItems = computed(() => ['cambodia', 'singapore', 'thailand', 'vietnam', 'other'].map(key => t(`auth.countries.${key}`)))
const state = reactive({ name: '', email: '', company: '', teamSize: '', country: '' })

type TrialSchema = z.output<typeof schema>

const description = computed(() => t('trial.description'))

const submit = async (_event: FormSubmitEvent<TrialSchema>) => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 800))
  loading.value = false
  close()
  toast.add({
    title: t('trial.complete'),
    description: t('auth.demoOnly'),
    color: 'success',
    icon: 'i-lucide-circle-check'
  })
}
</script>

<template>
  <UModal v-model:open="isOpen" :title="t('trial.title')" :description="description" :ui="{ content: 'sm:max-w-lg' }">
    <template #body>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="submit">
        <div v-if="selectedApp" class="flex items-center gap-2 rounded-xl bg-brand-50 p-3 text-sm text-brand-800 dark:bg-brand-950/50 dark:text-brand-200">
          <UIcon name="i-lucide-sparkles" class="size-4" />
          {{ t('trial.selected') }} <strong class="capitalize">{{ t(`apps.${selectedApp}`) }}</strong>
        </div>
        <UFormField :label="t('trial.fullName')" name="name" required><UInput v-model="state.name" autocomplete="name" size="lg" /></UFormField>
        <UFormField :label="t('trial.workEmail')" name="email" required><UInput v-model="state.email" type="email" autocomplete="email" size="lg" placeholder="you@company.com" /></UFormField>
        <UFormField :label="t('trial.company')" name="company" required><UInput v-model="state.company" autocomplete="organization" size="lg" /></UFormField>
        <div class="grid gap-4 sm:grid-cols-2">
          <UFormField :label="t('trial.teamSize')" name="teamSize" required><USelect v-model="state.teamSize" :items="['1–5', '6–25', '26–100', '101+']" :placeholder="t('trial.chooseSize')" size="lg" /></UFormField>
          <UFormField :label="t('trial.country')" name="country" required><USelect v-model="state.country" :items="countryItems" :placeholder="t('trial.chooseCountry')" size="lg" /></UFormField>
        </div>
        <UButton type="submit" block size="lg" class="brand-action" :loading="loading">{{ t('trial.action') }}</UButton>
        <p class="text-center text-xs text-zinc-500">{{ t('trial.note') }}</p>
      </UForm>
    </template>
  </UModal>
</template>
