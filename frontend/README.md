# Nobd — Frontend

This folder contains the frontend for Nobd (نَبْض) — a minimal, mobile-first React + Vite application for tracking prayers, adhkar, and daily habits.

For the overall project vision, roadmap and backend details see the repository root `README.md`.

## Key features

-   Responsive UI built with React, Vite and Tailwind CSS
-   shadcn-ui components and Radix primitives for accessible UI
-   Local-first state (Zustand) with optional server sync later (Supabase)

## Tech stack

-   Vite
-   React + TypeScript
-   TailwindCSS
-   shadcn-ui (Radix + utility components)

## Setup (local development)

Prerequisites: Node.js 18+ and npm (or pnpm/yarn).

1. Install dependencies (from project root):

```powershell
npm install
```

2. Start frontend dev server:

```powershell
npm --prefix frontend run dev
```

The app runs on Vite's dev server (default http://localhost:5173). Open that in your browser.

## Build & Preview

Build the production frontend bundle:

```powershell
npm --prefix frontend run build
```

Preview the built site locally:

```powershell
npm --prefix frontend run preview
```

## Linting

Run ESLint for the frontend code:

```powershell
npm --prefix frontend run lint
```

## Deployment

Recommended: Vercel or Netlify for the frontend. The output from `npm --prefix frontend run build` is static and can be hosted on any static hosting provider.

## Notes for contributors

-   The frontend is intentionally local-first for MVP. When the backend (Supabase/NestJS) is ready, sync endpoints will be introduced.
-   Keep UI components small and accessible; prefer Radix primitives for interactive elements.

## Author & License

Developer: Ibrahim

License: MIT — see the repository `LICENSE.md` for details.
