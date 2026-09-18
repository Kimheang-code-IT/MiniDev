# MiniDev

MiniDev is a responsive, frontend-only product-suite website built with Nuxt 4, Nuxt UI, Tailwind CSS 4, and TypeScript.

## Features

- Home, Pricing, and Help pages
- Responsive app grid with data-driven `/apps/[slug]` detail pages
- Demo Sign in, Sign up, and Try free flows
- Client-side pricing toggle, help search, and validated forms
- Light/dark themes and keyboard-accessible interactions

All authentication, billing, and support actions are demonstrations. No data is sent to a backend.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Product and visual requirements are documented in `DESIGN.md`. Repository-specific implementation guidance is in `SKILL.md`.

## Production (static hosting)

`pnpm build` runs Nuxt with the Nitro `static` preset and outputs a fully prerendered site to `.output/public` (every page, `/apps/*`, `robots.txt`, `sitemap.xml`, and the `_headers` file). Serve it with any static host — Netlify, Cloudflare Pages, GitHub Pages, or a plain file server:

```bash
pnpm build
npx serve .output/public
```

Set `NUXT_PUBLIC_SITE_URL` to the real production origin (for example `https://minidev.com`) before building. It drives canonical URLs, `og:url`, and the sitemap; without it the build falls back to `https://minidev.example.com`.

```bash
NUXT_PUBLIC_SITE_URL=https://minidev.com pnpm build
```

`public/_headers` adds security headers, HSTS, and long-term caching for `/_nuxt/*` and `/icons/*`. Netlify and Cloudflare Pages read this file automatically; other hosts need the equivalent headers configured in their dashboard.

