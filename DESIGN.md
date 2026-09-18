# MiniDev Website Design Specification

This document defines the product, visual system, responsive behavior, interactions, content model, and acceptance criteria for the MiniDev marketing website.

The experience may take inspiration from Odoo's clarity, generous spacing, colorful app grid, product-detail storytelling, pricing comparison, and prominent free-trial action. It must remain an original MiniDev design: do not copy Odoo's logo, app icons, illustrations, screenshots, page copy, exact layout, or proprietary assets.

`SKILL.md` defines how an implementation agent should apply this specification.

---

## 1. Product scope

Build a responsive, frontend-only Nuxt website for MiniDev with three primary navigation items:

1. **Home** → `/`
2. **Pricing** → `/pricing`
3. **Help** → `/help`

The header must contain only those three navigation links. Authentication buttons are actions, not menu items.

App cards open detail routes at `/apps/[slug]`. These routes do not add items to the primary navigation, so the header still has exactly three menu links.

### Required user journeys

- A visitor understands MiniDev's value from the first viewport.
- A visitor browses the app grid and opens a detailed page for any app.
- A visitor compares plans and switches between monthly and yearly billing.
- A visitor searches help articles and contacts support through a simulated form.
- A visitor can open **Sign in**, **Sign up**, or **Try free** flows from any page.
- Every flow works with keyboard, touch, mouse, and screen readers.

### Frontend-only boundary

- No database, server API, payment, email delivery, or real authentication.
- Forms validate locally and simulate submission.
- Never imply that a real account, support ticket, or payment was created.
- Successful simulated actions must say **Demo only — no data was sent**.
- Do not store passwords. If a demo session is useful, store only a harmless boolean in `sessionStorage`.

---

## 2. Brand direction

MiniDev should feel capable, approachable, colorful, and fast. Use a warm plum primary color, aqua accent, bright app illustrations, soft off-white surfaces, and dark ink typography.

### Design principles

1. **Clear before clever.** One message and one primary action per section.
2. **Color with purpose.** Most surfaces stay neutral; app icons and key actions carry color.
3. **Soft geometry.** Rounded cards, pill buttons, gentle waves, and low-elevation shadows.
4. **Useful detail.** Each app card leads to a complete, scannable product story.
5. **Responsive by composition.** Reflow content for small screens instead of merely shrinking it.
6. **Original MiniDev identity.** Use `MiniDev` wordmark text and custom geometric icons; never imitate Odoo branding.

### Voice and copy

- Friendly, direct, concise, and confident.
- Use sentence case. Avoid all-caps marketing labels.
- Headings: 3–9 words. Supporting text: one or two short sentences.
- Prefer concrete outcomes: “Track every project in one place.”
- Avoid unsupported claims, fake customer logos, or invented statistics presented as facts.
- Clearly label placeholder prices and demo metrics.

---

## 3. Information architecture

```text
/
├── home sections
├── /pricing
├── /help
└── /apps/[slug]
    ├── /apps/crm
    ├── /apps/projects
    ├── /apps/invoicing
└── additional entries driven by app/data/apps.ts
```

Authentication uses one shared modal rather than routes:

- `signin`
- `signup`
- `trial`

Unknown app slugs must show Nuxt's 404 page with a link back to the app grid.

---

## 4. Design tokens

Define tokens once in `assets/css/main.css` using Tailwind CSS v4 `@theme static`. Components must use semantic tokens rather than raw hex values.

```css
@import "tailwindcss";
@import "@nuxt/ui";

@theme static {
  --font-sans: "Poppins", "Kantumruy Pro", system-ui, sans-serif;

  --color-brand-50: #fbf7fa;
  --color-brand-100: #f4eaf1;
  --color-brand-200: #e8d5e2;
  --color-brand-300: #d4b4c9;
  --color-brand-400: #b584a5;
  --color-brand-500: #956384;
  --color-brand-600: #714b67;
  --color-brand-700: #5d3d55;
  --color-brand-800: #4c3346;
  --color-brand-900: #3f2b3a;
  --color-brand-950: #281923;

  --color-accent-50: #edfffc;
  --color-accent-100: #c8fff7;
  --color-accent-200: #92fcef;
  --color-accent-300: #52eee0;
  --color-accent-400: #20d6ca;
  --color-accent-500: #0bb9b0;
  --color-accent-600: #068f8b;
  --color-accent-700: #087270;
  --color-accent-800: #0b5b5a;
  --color-accent-900: #0d4b4a;
  --color-accent-950: #022d2e;

  --color-canvas: #ffffff;
  --color-canvas-soft: #f7f7f9;
  --color-ink: #171927;

  --container-site: 75rem;
  --radius-card: 1rem;
  --radius-panel: 1.5rem;
  --shadow-card: 0 16px 40px rgb(23 25 39 / 0.10);
  --ease-brand: cubic-bezier(.22, .61, .36, 1);
}
```

Wire Nuxt UI aliases in `app/app.config.ts`:

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'brand',
      secondary: 'accent',
      success: 'accent',
      neutral: 'zinc'
    }
  }
})
```

### Semantic usage

| Purpose | Light | Dark |
|---|---|---|
| Page | `bg-white text-zinc-950` | `dark:bg-zinc-950 dark:text-zinc-50` |
| Muted section | `bg-zinc-50` | `dark:bg-zinc-900/60` |
| Primary tint | `bg-brand-50` | `dark:bg-brand-950/35` |
| Body copy | `text-zinc-600` | `dark:text-zinc-300` |
| Border | `border-zinc-200` | `dark:border-zinc-800` |
| Success/check | `text-accent-700` | `dark:text-accent-300` |

App icons may use additional colors, but each palette must be defined in `data/apps.ts` as approved semantic class strings. Do not construct Tailwind class names dynamically.

---

## 5. Typography and spacing

| Role | Classes |
|---|---|
| Hero heading | `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.06]` |
| Page heading | `text-4xl lg:text-5xl font-bold tracking-tight` |
| Section heading | `text-3xl lg:text-4xl font-bold tracking-tight` |
| Card heading | `text-lg lg:text-xl font-semibold` |
| Lead | `text-lg lg:text-xl leading-relaxed text-zinc-600 dark:text-zinc-300` |
| Body | `text-[15px] lg:text-base leading-relaxed` |
| Caption | `text-sm text-zinc-500 dark:text-zinc-400` |
| Price | `text-5xl lg:text-6xl font-bold tabular-nums` |

- Main container: `mx-auto w-full max-w-[75rem] px-4 sm:px-6 lg:px-8`.
- Standard section: `py-16 sm:py-20 lg:py-28`.
- Hero: `pt-28 sm:pt-32 lg:pt-40 pb-16 lg:pb-24`.
- Text measure: `max-w-2xl`; long-form help text: `max-w-prose`.
- Minimum touch target: 44×44px.

---

## 6. Shared shell

### Header

Desktop composition:

```text
[ MiniDev ]       Home   Pricing   Help              Sign in   [ Try it free ]
```

- Sticky at the top, 64px high, above all page content.
- Transparent over the top of a page; becomes white/90 with blur, subtle border, and small shadow after scrolling 12px.
- `MiniDev` is a text or original SVG wordmark linked to `/`.
- The only nav links are Home, Pricing, and Help.
- Active route: brand-colored text plus a 2px underline; app-detail routes leave all three inactive.
- **Sign in** is a neutral ghost action.
- **Sign up** remains available inside the authentication modal and mobile drawer rather than adding a third desktop action.
- **Try free** is the single solid primary action.
- Do not make auth actions look like navigation links to additional pages.

At widths below 768px:

- Show wordmark, compact **Try free** button, and a labelled menu button.
- Open a `USlideover` from the right.
- Put Home, Pricing, and Help first; then a divider; then Sign in and Sign up.
- Close on route change, Escape, backdrop click, or link selection.
- Lock body scroll while open and return focus to the menu button on close.

### Footer

- Use a charcoal full-width surface with the MiniDev wordmark centered above the content.
- Arrange Product, Resources, Company, and a wider brand-summary column on desktop; stack cleanly on mobile.
- Link to real app routes and support pages, include language/theme controls, a divider, concise company copy, social/contact icons, and copyright.
- Keep a fixed Telegram button at the lower-right corner with an accessible label, safe external-link attributes, and a configurable destination URL.

### Buttons

- Primary buttons are pill shaped, visually dominant, and limited to one per local action group.
- Secondary buttons use outline or soft variants.
- Hover may lift 1px; pressed state returns to baseline.
- All buttons have visible focus rings and loading/disabled states.

---

## 7. App grid and app detail behavior

The supplied image is the composition reference: colorful icons on small white tiles, app names underneath, a very light gray field, consistent alignment, and generous row/column gaps. Recreate that rhythm with original MiniDev icons and content.

### App grid

- Use 12–18 MiniDev apps from `app/data/apps.ts`.
- Suggested apps: CRM, Projects, Invoicing, Help Desk, Website Builder, Online Store, Inventory, Scheduling, Time Tracking, Team, Documents, Analytics.
- Entire card is one `NuxtLink` to `/apps/[slug]`; do not nest links or buttons inside it.
- Visual card: white 88–104px icon tile, original geometric SVG/icon, and app name below. Keep summaries on detail pages so the gallery retains its airy icon-first rhythm.
- Default: no strong border; use a faint ring and soft ambient shadow on the icon tile.
- Hover/focus: tile lifts 4px, shadow increases, name changes to brand color, and a small arrow appears.
- Focus ring must surround the whole clickable card.
- Cards must retain equal visual height within each row.

Responsive columns:

| Viewport | Columns | Notes |
|---|---:|---|
| ≥1280px | 6 | Closest to the supplied desktop reference |
| 1024–1279px | 5 | Maintain minimum 140px card width |
| 768–1023px | 4 | Reduce horizontal gap |
| 480–767px | 3 | 80px icon tile |
| <480px | 2 | Never use horizontal page scroll |

### Detail route `/apps/[slug]`

Every app uses the same data-driven template:

1. Breadcrumb: Home / Apps / App name.
2. Hero: icon, category, H1, outcome-focused lead, **Try free**, and **View pricing**.
3. Product preview: original CSS/SVG dashboard mockup or local image with meaningful alt text.
4. Three key benefits: alternating text and media rows.
5. Feature grid: six concise features with icons.
6. “Works with MiniDev” related-app strip with three app links.
7. App-specific FAQ: three to five accordion items.
8. Closing CTA: **Start free trial** and **Back to all apps**.

Behavior:

- Card selection navigates to a real URL so back/forward, refresh, sharing, and SEO work.
- On mobile, the detail page stacks media below text and keeps no fixed sidebars.
- Preserve scroll position when returning to Home if Nuxt's router supports it.
- Add `aria-current="page"` to the last breadcrumb item.
- Use `useSeoMeta` from app data for title, description, and social preview.
- Pre-render known slugs during static generation.

---

## 8. Authentication and free-trial modal

Use one accessible `UModal`, controlled through `useAuthModal()`. It supports three modes:

```ts
type AuthMode = 'signin' | 'signup' | 'trial'
```

- **Sign in** opens `signin`.
- **Sign up** opens `signup`.
- **Try free** opens `trial`.
- Tabs may switch between Sign in and Sign up; trial uses the sign-up form with trial-specific heading and consent copy.

### Sign in fields

- Email
- Password
- Remember me checkbox
- Forgot password link marked as a demo action

### Sign up fields

- Full name
- Work email
- Password
- Confirm password
- Terms checkbox with placeholder legal links

### Trial fields

- Full name
- Work email
- Company name
- Team size select
- Country select
- Optional preselected app from `?app=slug` or the app detail page

### Validation and feedback

- Use Zod with `UForm` and `UFormField`.
- Labels remain visible; placeholders are examples, not labels.
- Validate on blur and submit; move focus to the first invalid field.
- Show password visibility toggle with an accessible name.
- Simulate an 800ms submission, then show a toast: **Demo only — no data was sent.**
- Disable repeat submission while loading.
- Modal has a title and description, traps focus, closes with Escape, and restores trigger focus.
- Never place real OAuth logos unless their brand guidelines and actual integrations are approved.

---

## 9. Page blueprints

### Home `/`

1. **Hero** — original headline, one-sentence lead, price/value chip, **Try free**, and **Explore apps**. Add an original dashboard composition; do not use an Odoo screenshot.
2. **Trust strip** — neutral capability labels or verified customer logos only. If no real customers are provided, use text such as “Built for small teams” rather than fake brands.
3. **App grid** — heading “One workspace, every tool.” Show all app cards from the shared data model.
4. **Feature stories** — three alternating rows about connected data, fast setup, and team visibility.
5. **Workflow band** — three steps: choose apps, customize workspace, start working.
6. **Proof** — use clearly labelled demo metrics or replace metrics with product principles.
7. **Testimonial** — include only if a real approved quote exists; otherwise use a founder note.
8. **Closing CTA** — short heading, **Try free**, and **View pricing**.

### Pricing `/pricing`

1. **Page intro** — “Simple pricing for growing teams.”
2. **Billing toggle** — monthly/yearly segmented control; yearly shows a clearly defined saving badge.
3. **Plan cards** — Starter, Growth, and Scale. Highlight Growth. All numbers live in `data/plans.ts` and are labelled as placeholders until approved.
4. **Feature comparison** — semantic table with `<caption>`, column headers, row headers, visible included/excluded states, and its own horizontal scroll container below 768px.
5. **App inclusion grid** — show which MiniDev apps are included; cards can link to detail pages.
6. **FAQ** — six to eight pricing questions.
7. **CTA band** — **Start free trial**.

Monthly/yearly state must be reactive, keyboard accessible, and reflected consistently in every displayed price. Do not copy Odoo's current prices or plan promises.

### Help `/help`

1. **Search hero** — “How can we help?” with a large search input and suggested queries.
2. **Categories** — Getting started, Account, Billing, Apps, Integrations, and Privacy & security.
3. **Popular articles** — filter by title, summary, category, and keywords as the user types.
4. **Empty state** — explain that nothing matched and offer **Clear search** and **Contact support**.
5. **Support channels** — live-chat demo, email form, and documentation. Do not claim that chat is online unless it really is.
6. **Contact form** — name, email, topic, message; frontend validation and demo-only success toast.

Search behavior:

- Debounce by 150–250ms or filter immediately for the small local dataset.
- Announce result count through an `aria-live="polite"` region.
- Persist the query in `?q=` so results can be shared and browser history behaves naturally.
- Escape clears suggestions, not the entire page.

---

## 10. Responsive behavior

| Area | Desktop | Tablet | Mobile |
|---|---|---|---|
| Header | Inline nav and all auth actions | Inline nav, smaller gaps | Drawer; Try free stays visible |
| Hero | Two columns | Two balanced columns | Text first, media second |
| App grid | 5–6 columns | 3–4 columns | 2–3 columns |
| Detail benefits | Alternating two columns | Two columns | Single column |
| Pricing cards | Three columns | Two plus wrap | Single column; featured first |
| Comparison | Full table | Scroll container | Scroll container with first column readable |
| Forms | Two columns where useful | One/two columns | One column, full-width actions |

Test at 320, 375, 768, 1024, 1280, and 1536px. There must be no unintended horizontal page scrolling.

---

## 11. Motion

Use motion to clarify state, not decorate every section.

- Hero entrance: opacity + 12px translate, staggered once on initial load.
- Cards: 200ms lift and shadow transition.
- Modal, slideover, accordion, and toast: Nuxt UI transitions.
- Route transitions: subtle fade, 150–200ms; avoid large sliding pages.
- Honor `prefers-reduced-motion`; disable transforms and non-essential animation.
- Never delay interaction while an entrance animation finishes.

---

## 12. Data model

Keep content out of page templates.

```ts
export interface MiniDevApp {
  slug: string
  name: string
  category: string
  summary: string
  description: string
  icon: string
  iconClasses: string
  heroImage?: string
  benefits: Array<{
    title: string
    description: string
    image?: string
  }>
  features: Array<{
    title: string
    description: string
    icon: string
  }>
  integrations: string[]
  relatedSlugs: string[]
  faqs: Array<{ label: string; content: string }>
  seo: { title: string; description: string }
}
```

Related slugs must resolve to real records. Icon names and class strings must be explicit so Tailwind includes them in the build.

Suggested files:

```text
app/data/apps.ts
app/data/plans.ts
app/data/help.ts
app/types/index.ts
```

---

## 13. Accessibility, SEO, and performance

### Accessibility

- Target WCAG 2.2 AA.
- Maintain 4.5:1 contrast for normal text and 3:1 for large text/UI boundaries.
- Use landmarks: header, nav, main, section, footer.
- One H1 per route and logical heading order.
- Visible `:focus-visible` states on every interactive element.
- No interaction available only on hover.
- Decorative icons use `aria-hidden="true"`; meaningful images have useful alt text.
- Use semantic links for navigation and buttons for actions.
- Provide a skip-to-content link.

### SEO

- Unique title and description for Home, Pricing, Help, and every app route.
- Canonical URLs based on the actual MiniDev production domain, not the current portfolio domain.
- Open Graph image must be a MiniDev asset.
- Add Organization and WebSite JSON-LD only with verified business data.
- App pages may use SoftwareApplication JSON-LD only when claims and pricing are real.

### Performance

- Target Lighthouse: Performance ≥90, Accessibility ≥95, Best Practices ≥95, SEO ≥95 on representative mobile hardware.
- Use `NuxtImg` for raster media with dimensions, responsive sizes, and lazy loading below the fold.
- Prefer local SVG/CSS illustrations for app icons and mockups.
- Avoid loading a large animation library for simple transitions.
- Keep initial hero image optimized and prevent layout shift.

---

## 14. Completion criteria

- [ ] Header contains exactly Home, Pricing, and Help as navigation links.
- [ ] Sign in and Try free open from the desktop header; Sign up remains available through the modal and mobile drawer.
- [ ] Home app grid matches the supplied image's airy rhythm without copying its icons.
- [ ] Every app card is keyboard accessible and opens a working `/apps/[slug]` page.
- [ ] Direct loading, refresh, back, forward, and unknown-slug behavior work for app pages.
- [ ] Pricing toggle updates all prices and placeholder amounts are clearly identified.
- [ ] Help search filters local content, updates `?q=`, announces results, and has an empty state.
- [ ] All forms validate and clearly state that submission is a demo.
- [ ] Layout is verified at all required viewport widths with no page-level overflow.
- [ ] Light and dark modes have complete contrast-safe states if the theme toggle remains enabled.
- [ ] No Odoo logos, icons, screenshots, copy, customer claims, or exact page clones are present.
- [ ] `pnpm lint`, `pnpm typecheck`, and `pnpm build` pass.

---

## 15. Reference notes

The reference site uses an app-suite narrative, dedicated app pages, pricing comparison, responsive layouts, and strong free-trial calls to action. Borrow those product-design ideas only. MiniDev must use its own identity, content, and visual assets.
