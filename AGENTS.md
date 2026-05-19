# kira-url-frontend

## Stack
Vue 3 + Vite + TypeScript + Tailwind CSS v4 + Pinia + Vue Router

## Developer Commands
```sh
pnpm dev          # dev server
pnpm build        # type-check then build (order matters: type-check → build)
pnpm preview      # preview production build
pnpm lint         # oxlint --fix then eslint --fix (sequential, do NOT parallelize)
pnpm format       # oxfmt src/
pnpm type-check   # vue-tsc --build (note: --build flag required for incremental .tsbuildinfo)
```

## Build System Notes
- `pnpm build` runs `run-p type-check "build-only {@}" --` — the `"{@}"` passes args through to `vite build`
- `vue-tsc --build` (not bare `vue-tsc`) is used for incremental type-checking; produces `.tsbuildinfo` files in `node_modules/.tmp/`
- Tailwind v4 uses `@tailwindcss/vite` plugin — no PostCSS/tailwind.config.js

## Linting
- `lint` script runs `run-s lint:oxlint lint:eslint` sequentially (not parallel)
- oxlint reads config from `.oxlintrc.json` via `eslint-plugin-oxlint`'s `buildFromOxlintConfigFile()`
- If `.oxlintrc.json` is missing, oxlint will fail or behave unexpectedly — create it if adding oxlint rules

## TypeScript
- `tsconfig.app.json` extends `@vue/tsconfig/tsconfig.dom.json`
- `noUncheckedIndexedAccess: true` in tsconfig.app.json (extra safety for array/object lookups)
- Use `vue-tsc` (not `tsc`) for type-checking `.vue` files

## Architecture
- `src/main.ts` — app entry; mounts Pinia then Router
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/router/index.ts` — Vue Router (routes currently empty)
- `src/stores/counter.ts` — Pinia store example
- `@/` alias maps to `src/`

## Vue Conventions
- Always use Composition API with `<script setup lang="ts">`
- Load `vue-best-practices` skill for Vue tasks