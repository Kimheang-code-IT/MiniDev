export interface AppBenefit {
  title: string
  description: string
  icon: string
}

export interface MiniDevApp {
  slug: string
  name: string
  category: string
  summary: string
  description: string
  icon: string
  gradient: string
  benefits: AppBenefit[]
  features: AppBenefit[]
  relatedSlugs: string[]
  faqs: Array<{ label: string, content: string }>
  seo: { title: string, description: string }
  video?: string
  poster?: string
}

export interface Plan {
  id: string
  name: string
  description: string
  monthly: number
  yearly: number
  highlighted?: boolean
  features: string[]
}

export interface HelpArticle {
  id: string
  title: string
  summary: string
  category: string
  keywords: string[]
}
