import type { MiniDevApp } from '~/types'

type AppSeed = Pick<MiniDevApp, 'slug' | 'name' | 'category' | 'summary' | 'description' | 'icon' | 'gradient' | 'relatedSlugs'>

const buildApp = (seed: AppSeed): MiniDevApp => ({
  ...seed,
  benefits: [
    {
      title: `Make ${seed.name.toLowerCase()} feel simple`,
      description: `Bring the important ${seed.category.toLowerCase()} work into one focused view, with clear next steps for everyone.`,
      icon: 'i-lucide-sparkles'
    },
    {
      title: 'Keep your team in sync',
      description: 'Share live context, ownership, and progress without chasing updates across disconnected tools.',
      icon: 'i-lucide-users-round'
    },
    {
      title: 'See what needs attention',
      description: 'Useful filters and lightweight reports help you spot delays and act before they become problems.',
      icon: 'i-lucide-chart-no-axes-combined'
    }
  ],
  features: [
    { title: 'Fast setup', description: 'Start with sensible defaults and adapt them as your workflow grows.', icon: 'i-lucide-zap' },
    { title: 'Flexible views', description: 'Move between list, board, calendar, and summary views.', icon: 'i-lucide-layout-dashboard' },
    { title: 'Smart reminders', description: 'Keep important work moving with clear due dates and alerts.', icon: 'i-lucide-bell-ring' },
    { title: 'Team roles', description: 'Give collaborators the access they need without extra complexity.', icon: 'i-lucide-shield-check' },
    { title: 'Export ready', description: 'Download useful records whenever your team needs a portable copy.', icon: 'i-lucide-download' },
    { title: 'Connected apps', description: 'Link work across the MiniDev suite without entering it twice.', icon: 'i-lucide-blocks' }
  ],
  faqs: [
    { label: `Can I try MiniDev ${seed.name} for free?`, content: 'Yes. The frontend demo lets you explore the trial flow without a credit card. No real account is created.' },
    { label: 'Does this connect with other MiniDev apps?', content: 'The product concept is designed as one connected suite. Integrations shown in this demo are illustrative.' },
    { label: 'Can I use it on a phone or tablet?', content: 'Yes. Every view is designed to reflow for touch devices and smaller screens.' }
  ],
  seo: {
    title: `${seed.name} software`,
    description: seed.description
  }
})

export const apps: MiniDevApp[] = [
  buildApp({ slug: 'crm', name: 'CRM', category: 'Sales', summary: 'Turn conversations into lasting customer relationships.', description: 'A clear pipeline for leads, follow-ups, and customer context your whole team can use.', icon: 'i-lucide-handshake', gradient: 'from-fuchsia-500 to-brand-600', relatedSlugs: ['sales', 'help-desk', 'analytics'] }),
  buildApp({ slug: 'projects', name: 'Projects', category: 'Work', summary: 'Plan work, assign owners, and keep delivery moving.', description: 'Organize projects from first brief to final handoff with shared priorities and progress.', icon: 'i-lucide-kanban-square', gradient: 'from-cyan-400 to-blue-600', relatedSlugs: ['time-tracking', 'team', 'documents'] }),
  buildApp({ slug: 'invoicing', name: 'Invoicing', category: 'Finance', summary: 'Create polished invoices and follow every payment.', description: 'Prepare clear invoices, track their status, and keep a tidy record of what is due.', icon: 'i-lucide-receipt-text', gradient: 'from-amber-400 to-orange-600', relatedSlugs: ['sales', 'analytics', 'documents'] }),
  buildApp({ slug: 'help-desk', name: 'Help Desk', category: 'Support', summary: 'Give every customer question a clear owner.', description: 'Collect, organize, and resolve support requests from one calm team workspace.', icon: 'i-lucide-life-buoy', gradient: 'from-emerald-400 to-teal-700', relatedSlugs: ['crm', 'team', 'documents'] }),
  buildApp({ slug: 'website', name: 'Website', category: 'Growth', summary: 'Shape a fast, modern home for your business.', description: 'Plan and publish responsive pages with reusable sections and a consistent brand system.', icon: 'i-lucide-panels-top-left', gradient: 'from-violet-500 to-indigo-700', relatedSlugs: ['online-store', 'analytics', 'crm'] }),
  buildApp({ slug: 'online-store', name: 'Online Store', category: 'Commerce', summary: 'Present products beautifully on every screen.', description: 'Create a smooth storefront experience from product discovery through checkout concepts.', icon: 'i-lucide-shopping-bag', gradient: 'from-rose-400 to-pink-700', relatedSlugs: ['website', 'inventory', 'sales'] }),
  buildApp({ slug: 'inventory', name: 'Inventory', category: 'Operations', summary: 'Know what is available and what needs action.', description: 'Keep stock movement, availability, and reorder priorities visible to the right people.', icon: 'i-lucide-package-open', gradient: 'from-orange-400 to-red-600', relatedSlugs: ['online-store', 'sales', 'analytics'] }),
  buildApp({ slug: 'scheduling', name: 'Scheduling', category: 'Work', summary: 'Coordinate people and time without the overlap.', description: 'Arrange appointments, shifts, and shared availability in a flexible calendar.', icon: 'i-lucide-calendar-days', gradient: 'from-sky-400 to-cyan-700', relatedSlugs: ['team', 'projects', 'time-tracking'] }),
  buildApp({ slug: 'time-tracking', name: 'Time Tracking', category: 'Work', summary: 'Capture time without interrupting the work.', description: 'Log effort against projects and turn activity into useful planning insight.', icon: 'i-lucide-timer', gradient: 'from-blue-500 to-brand-700', relatedSlugs: ['projects', 'invoicing', 'analytics'] }),
  buildApp({ slug: 'team', name: 'Team', category: 'People', summary: 'Keep team information useful and easy to find.', description: 'Bring roles, availability, and shared team context into one respectful workspace.', icon: 'i-lucide-users', gradient: 'from-pink-400 to-purple-700', relatedSlugs: ['scheduling', 'projects', 'documents'] }),
  buildApp({ slug: 'documents', name: 'Documents', category: 'Work', summary: 'Organize the files that keep work moving.', description: 'Create a clear home for shared documents, approvals, and the latest version of every file.', icon: 'i-lucide-files', gradient: 'from-teal-400 to-emerald-700', relatedSlugs: ['projects', 'team', 'help-desk'] }),
  buildApp({ slug: 'analytics', name: 'Analytics', category: 'Insights', summary: 'Turn activity into decisions your team can use.', description: 'Bring key signals together in calm dashboards built for quick understanding.', icon: 'i-lucide-chart-column-big', gradient: 'from-yellow-400 to-brand-600', relatedSlugs: ['crm', 'sales', 'inventory'] }),
  buildApp({ slug: 'sales', name: 'Sales', category: 'Sales', summary: 'Move from quote to close with less busywork.', description: 'Prepare offers, track decisions, and keep the full customer journey connected.', icon: 'i-lucide-badge-dollar-sign', gradient: 'from-indigo-400 to-purple-700', relatedSlugs: ['crm', 'invoicing', 'analytics'] }),
  buildApp({ slug: 'knowledge', name: 'Knowledge', category: 'Work', summary: 'Turn shared know-how into an organized team resource.', description: 'Write, organize, and discover the guidance your team needs to work consistently.', icon: 'i-lucide-book-marked', gradient: 'from-cyan-400 to-teal-600', relatedSlugs: ['documents', 'team', 'projects'] }),
  buildApp({ slug: 'sign', name: 'Sign', category: 'Documents', summary: 'Move agreements forward with a simple signing flow.', description: 'Prepare documents, request signatures, and keep agreement status easy to follow.', icon: 'i-lucide-signature', gradient: 'from-sky-400 to-blue-700', relatedSlugs: ['documents', 'crm', 'sales'] }),
  buildApp({ slug: 'subscriptions', name: 'Subscriptions', category: 'Finance', summary: 'Keep recurring customer plans organized.', description: 'Track subscription terms, renewals, and recurring revenue from one clear view.', icon: 'i-lucide-refresh-cw', gradient: 'from-orange-400 to-accent-600', relatedSlugs: ['invoicing', 'crm', 'analytics'] }),
  buildApp({ slug: 'ai-assistant', name: 'AI Assistant', category: 'Productivity', summary: 'Use helpful prompts to move routine work faster.', description: 'Draft, summarize, and organize everyday business information with guided assistance.', icon: 'i-lucide-bot', gradient: 'from-amber-400 to-brand-600', relatedSlugs: ['knowledge', 'documents', 'analytics'] }),
  buildApp({ slug: 'point-of-sale', name: 'Point of Sale', category: 'Commerce', summary: 'Keep in-person selling quick and clear.', description: 'Present products, capture orders, and connect store activity with the rest of your workspace.', icon: 'i-lucide-store', gradient: 'from-orange-400 to-rose-600', relatedSlugs: ['inventory', 'sales', 'online-store'] }),
  buildApp({ slug: 'discuss', name: 'Discuss', category: 'Communication', summary: 'Keep useful conversations close to the work.', description: 'Give teams focused channels for decisions, updates, and shared context.', icon: 'i-lucide-messages-square', gradient: 'from-orange-400 to-red-500', relatedSlugs: ['team', 'projects', 'knowledge'] }),
  buildApp({ slug: 'field-service', name: 'Field Service', category: 'Operations', summary: 'Coordinate work that happens away from the office.', description: 'Schedule visits, assign people, and keep field activity connected to customers and projects.', icon: 'i-lucide-navigation', gradient: 'from-amber-400 to-purple-600', relatedSlugs: ['scheduling', 'projects', 'crm'] }),
  buildApp({ slug: 'planning', name: 'Planning', category: 'Work', summary: 'Balance schedules, priorities, and team capacity.', description: 'Plan upcoming work visually and spot availability before commitments overlap.', icon: 'i-lucide-calendar-range', gradient: 'from-amber-400 to-accent-600', relatedSlugs: ['scheduling', 'team', 'projects'] }),
  buildApp({ slug: 'purchase', name: 'Purchase', category: 'Operations', summary: 'Keep purchasing decisions and supplier activity clear.', description: 'Organize requests, orders, and supplier context in a consistent workflow.', icon: 'i-lucide-credit-card', gradient: 'from-teal-400 to-brand-700', relatedSlugs: ['inventory', 'invoicing', 'analytics'] }),
  buildApp({ slug: 'manufacturing', name: 'Manufacturing', category: 'Operations', summary: 'Plan production with a clear view of materials and work.', description: 'Coordinate production steps, availability, and progress from one connected workspace.', icon: 'i-lucide-factory', gradient: 'from-emerald-400 to-orange-500', relatedSlugs: ['inventory', 'planning', 'analytics'] }),
  buildApp({ slug: 'dashboard', name: 'Dashboard', category: 'Insights', summary: 'Put the most useful signals in one place.', description: 'Create focused summaries for the numbers, tasks, and trends your team watches most.', icon: 'i-lucide-layout-dashboard', gradient: 'from-blue-500 to-rose-500', relatedSlugs: ['analytics', 'sales', 'projects'] })
]

export const getAppBySlug = (slug: string) => apps.find(app => app.slug === slug)
