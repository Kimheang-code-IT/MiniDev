import type { Plan } from '~/types'

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For a small team building its first shared workspace.',
    monthly: 0,
    yearly: 0,
    features: ['Up to 3 team members', 'Choose 2 MiniDev apps', 'Community help', 'Responsive workspace']
  },
  {
    id: 'growth',
    name: 'Growth',
    description: 'For growing teams that want every core workflow connected.',
    monthly: 24,
    yearly: 19,
    highlighted: true,
    features: ['Up to 25 team members', 'All MiniDev apps', 'Email support', 'Advanced views and exports']
  },
  {
    id: 'scale',
    name: 'Scale',
    description: 'For larger teams that need flexibility and guided setup.',
    monthly: 49,
    yearly: 39,
    features: ['Unlimited team members', 'All MiniDev apps', 'Priority support', 'Workspace onboarding']
  }
]

export const comparisonRows = [
  { labelKey: 'teamMembers', values: ['3', '25', 'unlimited'] },
  { labelKey: 'includedApps', values: ['2', 'all', 'all'] },
  { labelKey: 'customViews', values: ['no', 'yes', 'yes'] },
  { labelKey: 'dataExports', values: ['no', 'yes', 'yes'] },
  { labelKey: 'prioritySupport', values: ['no', 'no', 'yes'] },
  { labelKey: 'guidedOnboarding', values: ['no', 'no', 'yes'] }
] as const
