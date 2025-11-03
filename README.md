# PeakPoint Gateway

A modern React + TypeScript starter project scaffolded with Vite. This repository contains a component-driven UI built with Tailwind CSS and a collection of UI primitives (Radix), utility components, and app pages. It's suitable as a frontend starter for a marketing site, docs site, or small single-page application.

---

## Quick links
- Project root: `package.json`
- Dev server: `npm run dev` (or `pnpm dev`, `bun run dev`)
- Build: `npm run build`
- Preview production build: `npm run preview`

## Features
- Vite + React 18 + TypeScript
- Tailwind CSS for utility-first styling
- Radix UI primitives + custom UI components (see `src/ui`)
- React Router for routing
- TanStack Query for data fetching patterns
- Recharts for charts/visualizations
- Opinionated component library in `src/ui` for re-use across pages

## Tech stack
- Vite
- React 18
- TypeScript
- Tailwind CSS
- Radix UI (@radix-ui/*)
- TanStack Query
- React Router
- Recharts

## Requirements
- Node 18+ (or Bun) recommended
- npm, pnpm, or bun for package management

## Getting started

Install dependencies (choose one):

```bash
# npm
npm install

# pnpm
pnpm install

# bun (this repo includes a bun.lockb)
bun install
```

Run the dev server:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# bun
bun run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally (serves the `dist/`):

```bash
npm run preview
```

Lint the code:

```bash
npm run lint
```

## Project structure (important files)

- `src/` — application source
  - `assets/` — static assets
  - `components/` — UI components and page-specific components
  - `layout/` — `Header`, `Footer`, and `Layout` wrappers
  - `ui/` — design-system primitives / small reusable UI components (Radix-based)
  - `hooks/` — custom React hooks
  - `lib/` — small utilities
  - `pages/` — top-level pages (Home, About, Programs, Contact, etc.)
  - `main.tsx` — app entry and router mounting

- `index.html`, `vite.config.ts`, `tailwind.config.ts` — build & styling config

## Notes & tips
- The `ui` folder contains many small, reusable components (accordion, dialog, toast, etc.) — they are good examples of building a component system on top of Radix + Tailwind.
- If you're using Bun as the runtime (bun.lockb is included), `bun install` + `bun run dev` is a quick option. Otherwise npm/pnpm work as usual.
- Vite's preview server runs on a different port than the dev server (default 4173) — useful for locally testing production output.

## Contributing
- If you plan to contribute: fork the repo, create a feature branch, and open a PR describing your change.
- Keep changes small and focused. Add or update small tests or example pages when you add new UI primitives.

## License
This repository does not include an explicit license file. If you want to open-source this project, consider adding a `LICENSE` (for example, MIT). Update this section after adding the license.

## Maintainer / Contact
- Repository owner: @zorah11

---

If you'd like, I can extend this README with more details: usage examples for specific UI components, a screenshots/asset section, CI/CD/deployment instructions (Netlify, Vercel), or an actual `CONTRIBUTING.md` and `LICENSE` file. Tell me which you'd prefer next.

