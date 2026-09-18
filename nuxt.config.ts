import { apps } from './app/data/apps'

const siteUrl = (process.env.NUXT_PUBLIC_SITE_URL || 'https://minidev.example.com').replace(/\/$/, '')

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  runtimeConfig: {
    public: {
      siteUrl
    }
  },
  nitro: {
    preset: process.env.VERCEL ? 'vercel' : 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/pricing',
        '/help',
        ...apps.map(app => `/apps/${app.slug}`),
        '/robots.txt',
        '/sitemap.xml'
      ]
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    baseUrl: siteUrl,
    langDir: 'locales',
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'km', name: 'ខ្មែរ', language: 'km-KH', file: 'km.json' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'minidev_locale',
      fallbackLocale: 'en',
      redirectOn: 'root'
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | MiniDev',
      meta: [
        { name: 'theme-color', content: '#714b67' },
        { name: 'color-scheme', content: 'light dark' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Khmer:wght@400;700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap'
        }
      ]
    }
  }
})
