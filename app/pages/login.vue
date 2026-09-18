<script setup lang="ts">
import * as z from 'zod'
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui'

definePageMeta({ layout: 'auth' })

const { t } = useI18n()

useSeoMeta({
  title: () => t('auth.signIn'),
  description: () => t('auth.demoHint'),
  robots: 'noindex, nofollow'
})

const toast = useToast()
const { login } = useDemoAuth()
const loading = ref(false)

const fields = computed<AuthFormField[]>(() => [
  {
    name: 'email',
    type: 'email',
    label: t('auth.email'),
    placeholder: t('auth.emailPlaceholder'),
    required: true,
    size: 'lg'
  },
  {
    name: 'password',
    type: 'password',
    label: t('auth.password'),
    placeholder: t('auth.passwordPlaceholder'),
    required: true,
    size: 'lg'
  },
  {
    name: 'remember',
    type: 'checkbox',
    label: t('auth.remember'),
    size: 'xl'
  }
])

const schema = z.object({
  email: z.email(t('auth.invalidEmail')),
  password: z.string().min(8, t('auth.passwordLength')),
  remember: z.boolean().optional()
})

type LoginSchema = z.output<typeof schema>

async function completeDemoLogin(email: string) {
  login(email)
  toast.add({
    title: t('auth.loginComplete'),
    description: t('auth.demoOnly'),
    color: 'success',
    icon: 'i-lucide-circle-check'
  })
  await navigateTo('/')
}

async function showProviderDemo() {
  if (loading.value) return
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 400))
  loading.value = false
  await completeDemoLogin('google.demo@minidev.app')
}

async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  if (loading.value) return
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 400))
  loading.value = false
  await completeDemoLogin(event.data.email)
}
</script>

<template>
  <UPageCard class="w-full shadow-2xl shadow-brand-950/10">
    <NuxtLink to="/" class="group mx-auto mb-7 flex w-fit items-center gap-2 rounded-lg" :aria-label="t('auth.backHome')">
      <span class="relative block size-10" aria-hidden="true">
        <span class="absolute left-0 top-1 size-7 rounded-full border-[5px] border-brand-500 transition-transform group-hover:-translate-x-0.5" />
        <span class="absolute bottom-1 right-0 size-7 rounded-full border-[5px] border-accent-500 transition-transform group-hover:translate-x-0.5" />
      </span>
      <span class="text-3xl font-bold tracking-tight text-zinc-800 dark:text-white">Mini<span class="text-brand-600 dark:text-brand-300">Dev</span></span>
    </NuxtLink>

    <UAuthForm
      :schema="schema"
      :title="t('auth.loginTitle')"
      :fields="fields"
      :loading="loading"
      :submit="{ label: t('auth.signIn'), size: 'xl', class: 'brand-action block w-full' }"
      @submit="onSubmit"
    />

    <p class="mt-3 text-center text-xs text-zinc-500">
      {{ t('auth.demoHint') }}
    </p>

    <USeparator class="mt-6" :label="t('auth.or')" />

    <UButton
      block
      size="xl"
      color="neutral"
      variant="outline"
      class="mt-4"
      :loading="loading"
      @click="showProviderDemo"
    >
      <template #leading>
        <img src="/icons/google.svg" alt="" class="size-5" width="20" height="20">
      </template>
      {{ t('auth.google') }}
    </UButton>

    <p class="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
      {{ t('auth.noAccount') }}
      <NuxtLink to="/signup" class="font-semibold text-brand-600 hover:underline dark:text-brand-300">{{ t('auth.signUp') }}</NuxtLink>
    </p>
  </UPageCard>
</template>
