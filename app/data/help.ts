import type { HelpArticle } from '~/types'

export const helpCategories = [
  { name: 'Getting started', icon: 'i-lucide-rocket', description: 'Set up your first workspace and invite your team.' },
  { name: 'Account', icon: 'i-lucide-circle-user-round', description: 'Manage profile, access, and preferences.' },
  { name: 'Billing', icon: 'i-lucide-credit-card', description: 'Understand plans, invoices, and billing cycles.' },
  { name: 'Apps', icon: 'i-lucide-layout-grid', description: 'Learn the essentials of every MiniDev app.' },
  { name: 'Integrations', icon: 'i-lucide-plug-zap', description: 'Connect workflows across your toolset.' },
  { name: 'Privacy & security', icon: 'i-lucide-shield-check', description: 'Review access and data protection concepts.' }
]

export const helpArticles: HelpArticle[] = [
  { id: 'workspace', title: 'Create your first workspace', summary: 'Choose a name, set preferences, and prepare your workspace.', category: 'Getting started', keywords: ['setup', 'start', 'workspace'] },
  { id: 'invite', title: 'Invite and manage teammates', summary: 'Add collaborators and understand the available roles.', category: 'Account', keywords: ['team', 'member', 'role'] },
  { id: 'apps', title: 'Choose the right MiniDev apps', summary: 'Build a focused toolkit around the way your team works.', category: 'Apps', keywords: ['tools', 'modules', 'features'] },
  { id: 'billing', title: 'Switch your billing cycle', summary: 'Understand the monthly and yearly options in the demo.', category: 'Billing', keywords: ['plan', 'price', 'yearly'] },
  { id: 'export', title: 'Export your workspace data', summary: 'Learn where exports appear and what they contain.', category: 'Privacy & security', keywords: ['download', 'data', 'backup'] },
  { id: 'connect', title: 'Connect work across apps', summary: 'See how related MiniDev apps share useful context.', category: 'Integrations', keywords: ['connect', 'workflow', 'sync'] },
  { id: 'mobile', title: 'Use MiniDev on a mobile device', summary: 'Navigate the responsive workspace on phones and tablets.', category: 'Getting started', keywords: ['phone', 'tablet', 'responsive'] },
  { id: 'password', title: 'Reset your password', summary: 'Review the password reset flow represented in this frontend demo.', category: 'Account', keywords: ['signin', 'login', 'security'] }
]

export const supportChannels = [
  { icon: 'i-lucide-messages-square', title: 'Chat demo', text: 'Preview the intended real-time support experience.', action: 'Open chat demo' },
  { icon: 'i-lucide-mail', title: 'Email support', text: 'Use the form below to demonstrate a support request.', action: 'Write a message' },
  { icon: 'i-lucide-book-open', title: 'Product guides', text: 'Search the local help library for fast answers.', action: 'Browse guides' }
] as const
