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
  { label: 'Team members', values: ['3', '25', 'Unlimited'] },
  { label: 'Included apps', values: ['2', 'All', 'All'] },
  { label: 'Custom views', values: [false, true, true] },
  { label: 'Data exports', values: [false, true, true] },
  { label: 'Priority support', values: [false, false, true] },
  { label: 'Guided onboarding', values: [false, false, true] }
] as const

export const pricingFaqs = [
  { label: 'Are these final MiniDev prices?', content: 'No. Prices on this frontend demonstration are placeholders and must be approved before launch.' },
  { label: 'Can I start without a credit card?', content: 'The demo trial flow does not request payment details and does not create a real account.' },
  { label: 'Can I change plans later?', content: 'The intended product model supports plan changes as a team grows. No billing backend exists in this demo.' },
  { label: 'Which apps are included?', content: 'Growth and Scale show all MiniDev apps. Starter demonstrates a two-app entry plan.' },
  { label: 'Is support included?', content: 'Community, email, and priority support levels are illustrative until the service offering is finalized.' },
  { label: 'What happens after the trial?', content: 'Nothing is provisioned in this frontend-only build. The flow exists to demonstrate the intended experience.' }
]
