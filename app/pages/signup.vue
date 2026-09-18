<script setup lang="ts">
import * as z from 'zod'
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui'

definePageMeta({ layout: 'auth' })

useSeoMeta({
  title: 'Create account',
  description: 'Create an account in the MiniDev frontend demonstration.',
  robots: 'noindex, nofollow'
})

const toast = useToast()
const { t } = useI18n()

const fields = computed<AuthFormField[]>(() => [
  {
    name: 'name',
    type: 'text',
    label: t('auth.fullName'),
    placeholder: t('auth.namePlaceholder'),
    required: true,
    size: 'lg'
  },
  {
    name: 'email',
    type: 'email',
    label: t('auth.workEmail'),
    placeholder: t('auth.emailPlaceholder'),
    required: true,
    size: 'lg'
  },
  {
    name: 'password',
    type: 'password',
    label: t('auth.password'),
    placeholder: 'At least 8 characters',
    required: true,
    size: 'lg'
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: t('auth.confirmPassword'),
    placeholder: t('auth.confirmPlaceholder'),
    required: true,
    size: 'lg'
  },
  {
    name: 'terms',
    type: 'checkbox',
    label: t('auth.terms')
  }
])

const schema = z.object({
  name: z.string().min(2, t('auth.nameRequired')),
  email: z.string().email(t('auth.invalidEmail')),
  password: z.string().min(8, t('auth.passwordLength')),
  confirmPassword: z.string().min(8, t('auth.confirmRequired')),
  terms: z.boolean().refine(value => value, t('auth.termsRequired'))
}).refine(value => value.password === value.confirmPassword, {
  message: t('auth.passwordMismatch'),
  path: ['confirmPassword']
})

type Schema = z.output<typeof schema>

function onSubmit(_payload: FormSubmitEvent<Schema>) {
  toast.add({
    title: t('auth.signupComplete'),
    description: t('auth.signupDescription'),
    color: 'success',
  })
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
      :title="t('auth.signupTitle')"
      :fields="fields"
      :submit="{ label: t('auth.signUp'), size: 'xl', class: 'brand-action block w-full' }"
      @submit="onSubmit"
    />

    <p class="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
      {{ t('auth.haveAccount') }}
      <NuxtLink to="/login" class="font-semibold text-brand-600 hover:underline dark:text-brand-300">{{ t('auth.signIn') }}</NuxtLink>
    </p>
  </UPageCard>
</template>
