import { toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { MiniDevApp } from '~/types'

const categoryKeys: Record<string, string> = {
  Sales: 'sales',
  Work: 'work',
  Finance: 'finance',
  Support: 'support',
  Growth: 'growth',
  Commerce: 'commerce',
  Operations: 'operations',
  People: 'people',
  Insights: 'insights',
  Documents: 'documents',
  Productivity: 'productivity',
  Communication: 'communication'
}

export const useLocalizedApp = (app: MaybeRefOrGetter<MiniDevApp>) => {
  const { t, locale } = useI18n()

  return computed<MiniDevApp>(() => {
    const base = toValue(app)
    if (locale.value !== 'km') return base

    const name = t(`apps.${base.slug}`)
    const category = t(`appCategories.${categoryKeys[base.category] ?? 'work'}`)

    return {
      ...base,
      name,
      category,
      summary: t(`appsContent.${base.slug}.summary`),
      description: t(`appsContent.${base.slug}.description`),
      seo: {
        title: t('appDetail.seoTitle', { name }),
        description: t(`appsContent.${base.slug}.description`)
      },
      benefits: base.benefits.map((benefit, index) => ({
        ...benefit,
        title: t(`appDetail.benefits.${index}.title`, { name }),
        description: t(`appDetail.benefits.${index}.description`, { name })
      })),
      features: base.features.map((feature, index) => ({
        ...feature,
        title: t(`appDetail.features.${index}.title`),
        description: t(`appDetail.features.${index}.description`)
      })),
      faqs: base.faqs.map((faq, index) => ({
        ...faq,
        label: t(`appDetail.faqs.${index}.label`, { name }),
        content: t(`appDetail.faqs.${index}.content`, { name })
      }))
    }
  })
}
