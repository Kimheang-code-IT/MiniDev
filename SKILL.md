---
name: minidev-marketing-site
description: Build or revise the frontend-only MiniDev Nuxt marketing site defined by the adjacent DESIGN.md, including its three-link header, responsive app grid, data-driven app detail routes, pricing, help search, and demo authentication flows. Use for implementation or review work in this MiniDev website repository; do not use for unrelated Nuxt sites or backend authentication work.
---

# MiniDev Marketing Site

Implement and review this repository against [DESIGN.md](DESIGN.md). Read that entire file before changing UI code because it is the source of truth for layout, responsive behavior, interaction states, content boundaries, and completion criteria.

## Product invariants

- Keep exactly three primary header links: **Home**, **Pricing**, and **Help**.
- Treat **Sign in**, **Sign up**, and **Try free** as actions, not navigation menu items.
- App cards must link to real `/apps/[slug]` routes while leaving the three-link header unchanged.
- Remain frontend only. Never add a database, server auth, payment, email, or support API unless the user explicitly expands scope.
- Label simulated form success clearly: **Demo only — no data was sent.**
- Create original MiniDev copy and assets. Do not copy Odoo branding, icons, screenshots, customer material, page text, prices, or exact layouts.

## Repository-aware approach

This repository uses the standard Nuxt 4 application directory: runtime source lives under `app/`, while configuration, documentation, and public assets remain at the repository root. Keep that boundary intact.

The starter currently contains portfolio-specific components, metadata, colors, and content. When implementing the MiniDev site:

- replace portfolio-only page composition and SEO metadata;
- preserve reusable configuration and components only when they fit the MiniDev specification;
- avoid deleting unrelated user work unless it is clearly superseded by this site conversion;
- inspect `git status` and diffs before edits and before delivery.

Use the versions already declared in `package.json`. Do not reinitialize Nuxt or add dependencies unless an existing dependency cannot meet a required behavior.

## Preferred stack

| Concern | Use |
|---|---|
| Framework | Nuxt 4, Vue 3, `<script setup lang="ts">` |
| Components | Nuxt UI 4 |
| Styling | Tailwind CSS 4 through the existing Nuxt UI CSS entrypoint |
| Images | `@nuxt/image` / `NuxtImg` |
| Icons | Existing Iconify packages and `UIcon` |
| Validation | Nuxt UI forms with Zod when available; add Zod only if implementation begins and it is not already installed |
| State | Vue/Nuxt composables; no store library for modal or filter state |
| Content | Typed local data modules |

Do not add a Tailwind v3 JavaScript config. Put theme tokens in `assets/css/main.css` and Nuxt UI defaults in `app.config.ts`.

## Target structure

Adapt names only when the existing repository has an equivalent abstraction.

```text
nuxt.config.ts
app/
├── app.vue
├── app.config.ts
├── error.vue
├── assets/css/main.css
├── components/
│   ├── SiteHeader.vue
│   ├── SiteFooter.vue
│   ├── AuthModal.vue
│   ├── AppGrid.vue
│   └── AppCard.vue
├── composables/useAuthModal.ts
├── data/
│   ├── apps.ts
│   ├── plans.ts
│   └── help.ts
├── pages/
│   ├── index.vue
│   ├── pricing.vue
│   ├── help.vue
│   └── apps/[slug].vue
└── types/index.ts
public/
├── favicon.svg
└── site.webmanifest
```

Prefer a small number of meaningful components over wrappers that only forward classes. Share components when behavior or visual rules are genuinely repeated.

## Implementation sequence

1. Inspect the current tree, configuration, CSS, routes, and working-tree changes.
2. Read `DESIGN.md` fully and map its requirements to existing code.
3. Update global identity: MiniDev metadata, theme tokens, font usage, body colors, skip link, and shared app shell.
4. Build the shared header, footer, responsive drawer, and auth modal first; verify them on every route.
5. Define typed data for apps, plans, help content, and site copy.
6. Build the Home app grid and dynamic app-detail route from the same `apps.ts` source.
7. Build Pricing with one billing state and semantic comparison table.
8. Build Help with URL-synchronized search, result announcement, empty state, and demo contact form.
9. Complete responsive, keyboard, reduced-motion, dark-mode, SEO, and performance passes.
10. Run lint, typecheck, and production build; fix root causes rather than suppressing errors.

If the request is only for documentation or review, do not implement the site. Report gaps against the specification with precise file references.

## Data-driven app pages

Use one `MiniDevApp` type and one `app/data/apps.ts` collection for both the Home grid and `/apps/[slug]`.

- Resolve the route slug from the collection.
- Throw `createError({ statusCode: 404, statusMessage: 'App not found' })` when missing.
- Derive related apps from `relatedSlugs`; never duplicate complete app records inside another record.
- Ensure every related slug exists and avoid self-references.
- Derive SEO metadata from the selected app.
- For static output, configure prerender routes from the known slug list if Nuxt does not discover them automatically.
- Keep icon names and color classes as explicit literals; do not build Tailwind class names through string interpolation.

Do not use a modal as the only app-detail experience. Real routes are required for direct links, history, refresh, and SEO.

## Shared authentication modal

Create a single `useAuthModal()` composable with shared state:

```ts
type AuthMode = 'signin' | 'signup' | 'trial'

interface OpenAuthOptions {
  mode: AuthMode
  appSlug?: string
}
```

The composable exposes `isOpen`, `mode`, optional selected app, `open()`, and `close()`. Opening from an app detail page may preselect that app for the trial form.

Use Nuxt UI's accessible modal and form primitives. Keep state local and ephemeral. Do not persist passwords, tokens, or submitted personal data. A fake delay and toast are enough for the demo.

## Responsive and interaction rules

- Start with the 320px layout, then add `sm`, `md`, `lg`, and `xl` enhancements.
- Never solve overflow by hiding arbitrary content or applying `overflow-x-hidden` to the page.
- The app grid follows the column matrix in `DESIGN.md`; the whole card is one link.
- Mobile menu and modal must trap/restore focus through Nuxt UI behavior.
- Hover effects must have equivalent focus-visible states.
- Use links for navigation and buttons for actions.
- Preserve minimum 44px touch targets.
- Honor reduced motion for every custom animation.

## Content and visual rules

- Use `MiniDev` as the working wordmark unless approved brand assets exist.
- Use original geometric app icons from a consistent system; Lucide symbols inside colored shapes are acceptable for the first implementation.
- Avoid fake customer logos and fake testimonials. Use capability labels or a founder note when approved proof is unavailable.
- Keep prices in `data/plans.ts` and visibly mark unapproved prices as placeholders.
- Keep page copy in typed data when reused or mapped; short one-off headings may remain in the page.
- Never introduce raw Odoo names such as `odoo-*` in design tokens, component names, or user-facing copy.

## Nuxt UI guidance

Prefer `UButton`, `UCard`, `UBadge`, `UInput`, `UTextarea`, `UForm`, `UFormField`, `UModal`, `UTabs`, `UAccordion`, `USelectMenu`, `USeparator`, `USlideover`, `UCheckbox`, `UIcon`, and `useToast()` where they fit.

- Put global component styling in `app/app.config.ts` so Nuxt 4 loads it from the application directory.
- Use `ui` props for instance-specific styling.
- Use semantic component colors such as `color="primary"`.
- Wrap the application in `UApp` so overlays and toasts work.
- Keep modal titles and descriptions populated for accessible labelling.
- Do not hand-roll focus traps, accordions, or overlay dismissal.

## Quality gates

Run the relevant commands from the repository root:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Also verify manually:

- exactly three header nav links at desktop and mobile sizes;
- active navigation behavior on the three primary routes and no false active link on app pages;
- every app card route, unknown slug, and related-app link;
- Sign in and Try free opening from the desktop header, with Sign up available through the modal and mobile drawer;
- keyboard-only use of header, drawer, app grid, modal, forms, pricing toggle, comparison table, search, and accordions;
- layout at 320, 375, 768, 1024, 1280, and 1536px;
- no unintended page-level horizontal scrolling;
- light/dark colors if the existing color-mode feature remains enabled;
- no real network request from demo forms;
- no Odoo-owned visual or written assets.

When browser automation is available, use it for route, viewport, keyboard, and console-error checks. Do not treat a successful build alone as proof that the responsive UI is correct.

## Delivery report

Summarize:

- what changed;
- routes and behaviors implemented;
- checks run and their results;
- any placeholder prices, copy, or imagery still awaiting approval;
- any intentionally deferred backend work.

Do not claim real authentication, account creation, trial provisioning, contact delivery, or payment processing for this frontend-only build.
