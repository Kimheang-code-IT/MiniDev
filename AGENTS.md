# Repository Guidelines

## Project Structure & Module Organization

This repository is a Nuxt 4 frontend. Application code lives in `app/`:

- `app/pages/` contains route components (`index.vue`, `pricing.vue`, `help.vue`, and `apps/[slug].vue`).
- `app/components/` contains reusable layout, card, modal, and navigation components.
- `app/data/` is the source of truth for editable site content, plans, help articles, and app definitions.
- `app/composables/` contains shared Vue state and interaction logic.
- `app/assets/css/main.css` defines Tailwind theme tokens and global styles.
- `public/` stores static assets served without processing.

Keep page components focused on composition. Move reusable UI into components and content collections into `app/data/`.

## Build, Test, and Development Commands

Use pnpm with a supported Node version from `package.json`.

- `pnpm install` installs dependencies and prepares Nuxt types.
- `pnpm dev` starts the local development server.
- `pnpm build` creates a production build.
- `pnpm preview` serves the production build locally.
- `pnpm lint` checks Vue, TypeScript, and configuration files.
- `pnpm typecheck` runs Nuxt/Vue TypeScript validation.
- `pnpm lint:fix` applies safe automatic lint fixes.

There is currently no automated test suite. Before opening a pull request, run `pnpm lint`, `pnpm typecheck`, and manually verify the responsive navigation, app detail links, modals, and forms.

## Coding Style & Naming Conventions

Use Vue 3 Composition API with `<script setup lang="ts">`. Follow the existing two-space indentation and omit semicolons. Name components in PascalCase (`SiteHeader.vue`), composables with a `use` prefix (`useAuthModal.ts`), and data modules with concise lowercase names (`apps.ts`). Prefer Tailwind utilities and shared theme tokens over one-off inline styles. Keep user-facing content in data files whenever it may be reused or edited.

## Testing Guidelines

For new automated tests, use `*.spec.ts` next to the related module or under `tests/`. Cover navigation behavior, modal state, filtering, and validation before visual details. Always test at mobile, tablet, and desktop widths and confirm keyboard focus remains visible.

## Commit & Pull Request Guidelines

Write short, imperative commits such as `feat: add app detail grid` or `fix: restore footer visibility`. Keep each commit scoped to one change. Pull requests should include a clear summary, verification commands, linked issue when applicable, and before/after screenshots for UI changes. Call out changes to `app/data/` or frontend-only demo behavior explicitly.

## Security & Configuration

Never commit credentials or real customer data. This is a frontend demonstration: authentication, contact, and trial flows must remain clearly simulated and must not store passwords.
