# Nobd — Backend (NestJS)

This folder contains the backend API for Nobd — a NestJS application intended to provide authentication, persistence (Prisma/Postgres) and sync endpoints for the frontend.

See the repository root `README.md` for project vision, roadmap and overall architecture.

## Tech stack

- NestJS (TypeScript)
- Prisma ORM (PostgreSQL) — planned
- Supabase (Auth + DB) — optional for MVP 3+

## Setup (local development)

Prerequisites: Node.js 18+, npm (or pnpm/yarn), and (optionally) a Postgres database if you run the Prisma-backed flows.

1. Install dependencies (from project root):

```powershell
npm install
```

2. Start backend in watch mode:

```powershell
npm --prefix backend run start:dev
```

The backend will listen on the port configured in `src/main.ts` (default: 3000).

## Build & Run (production)

Build the backend:

```powershell
npm --prefix backend run build
```

Run the production build:

```powershell
npm --prefix backend run start:prod
```

## Tests

Run unit tests and e2e tests provided with the starter:

```powershell
npm --prefix backend run test
npm --prefix backend run test:e2e
```

## Lint & Formatting

```powershell
npm --prefix backend run lint
npm --prefix backend run format
```

## Deployment

The backend is a standard Node.js app — deploy to any Node-friendly host or use Supabase functions / serverless providers depending on the architecture chosen. See the root `README.md` for hosting recommendations (Supabase + Vercel pairing).

## Notes for contributors

- This backend currently uses the NestJS starter layout. When integrating persistence, add Prisma schema under `prisma/` and follow migration workflows.
- Keep API backward compatible during incremental frontend integration; prefer feature flags where needed.

## Author & License

Developer: Ibrahim

License: MIT — see repository `LICENSE.md`.
