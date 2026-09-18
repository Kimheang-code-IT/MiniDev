export const siteNavigation = [
  { label: 'Home', to: '/' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Help', to: '/help' }
] as const

export const homeHero = {
  titleLead: 'All your work on',
  titleHighlight: 'one platform.',
  subtitle: 'Simple, connected, and built for growing teams.',
  primaryAction: 'Start now — it’s free',
  secondaryAction: 'Explore all apps',
  priceNote: 'From $19 / month\nfor all apps',
  disclaimer: 'No credit card required · Frontend demonstration'
} as const

export const homePage = {
  quality: {
    titleLead: 'Level up',
    titleTail: 'your quality of work',
    quote: 'If you simplify the routine, your team can focus on the work that matters.',
    quoteBy: 'The MiniDev product principle',
    previewMessage: 'I can now prepare the next customer delivery without switching tools.'
  }
} as const

export const footerData = {
  productLinks: [
    { label: 'CRM', to: '/apps/crm' },
    { label: 'Projects', to: '/apps/projects' },
    { label: 'Invoicing', to: '/apps/invoicing' },
    { label: 'Help Desk', to: '/apps/help-desk' }
  ],
  resourceLinks: [
    { label: 'Help center', to: '/help' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Getting started', to: '/help?q=workspace' },
    { label: 'All applications', to: '/#apps' }
  ],
  companyLinks: [
    { label: 'Home', to: '/' },
    { label: 'Website', to: '/apps/website' },
    { label: 'Analytics', to: '/apps/analytics' }
  ],
  description: 'MiniDev is a connected collection of responsive business tools for customer relationships, projects, invoicing, support, teamwork, and more.',
  supportingText: 'Start with the apps you need and keep your growing team in one clear workspace.'
} as const

export const externalLinks = {
  telegram: 'https://t.me/',
  github: 'https://github.com/'
} as const
