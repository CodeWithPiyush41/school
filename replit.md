# Greenfield Academy School Website

A comprehensive, multi-page school website for "Greenfield Academy" built with React + Vite + Tailwind CSS + shadcn/ui, featuring 7 fully styled pages and dark/light mode.

## Run & Operate

- `pnpm --filter @workspace/school-website run dev` — run the school website frontend
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm --filter @workspace/school-website run typecheck` — typecheck the frontend only

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, shadcn/ui, wouter (routing), next-themes (dark mode)
- Fonts: Inter (body), Merriweather (headings) via Google Fonts
- Carousel: embla-carousel-react
- Animations: framer-motion + tw-animate-css
- API: Express 5 (pre-configured, not used by the frontend currently)
- DB: PostgreSQL + Drizzle ORM (pre-configured, not used currently)

## Where things live

- `artifacts/school-website/src/pages/` — 7 page components (Home, About, Academics, Admission, Gallery, Events, Contact)
- `artifacts/school-website/src/components/layout/` — Navbar, Footer, FloatingWidgets
- `artifacts/school-website/src/components/home/` — Home page section components
- `artifacts/school-website/src/index.css` — CSS variables (navy/gold theme), Google Fonts import
- `artifacts/school-website/src/App.tsx` — ThemeProvider, all wouter routes, global layout

## Architecture decisions

- Frontend-only: no backend or database needed; all content is static/hardcoded placeholder data
- Theme: Deep navy (#1e3a5f) primary + gold/amber (#d4a017) accent — prestigious school aesthetic
- Dark mode via next-themes ThemeProvider toggling `.dark` class on `<html>`; CSS custom properties handle both modes
- All 7 routes are flat siblings inside a single wouter `<Switch>` in App.tsx — no nested route parents
- Floating widgets (WhatsApp + scroll-to-top) are fixed-position overlays rendered at the App level, outside page content

## Product

7-page school website:
1. **Home** — Hero, Principal's Message, Why Choose Us, Stats, Facilities, Testimonials carousel, Announcements, Map
2. **About** — History timeline, Vision/Mission/Values, Leadership messages, Faculty overview
3. **Academics** — Classes offered, Curriculum, Learning Hubs, Sports & Activities
4. **Admission** — Step-by-step process, Documents checklist, Form download, CTA block
5. **Gallery** — Tabbed masonry photo grid with lightbox modal
6. **Events** — News cards, Upcoming events, Holiday list table, Exam schedule
7. **Contact** — Form (react-hook-form + Zod), contact info, map placeholder

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Google Fonts `@import url(...)` must be the **first** line of `index.css` — before `@import 'tailwindcss'`
- All CSS variables in `:root` must also be defined in `.dark` to prevent visual regressions in dark mode
- The wouter `<Router base={...}>` must use `import.meta.env.BASE_URL.replace(/\/$/, '')` for correct sub-path routing

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
