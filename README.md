# AlmereFix — Uber for Plumbers

Real-time, map-based service app for finding local professionals in Almere, NL.

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local
# Fill in your Supabase and Google Maps keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15 (App Router), Tailwind CSS, Lucide Icons |
| Backend | Supabase (PostgreSQL + PostGIS) |
| Real-time | Supabase Realtime |
| Maps | Google Maps Platform |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/             # Login & Register
│   ├── (customer)/map/     # Customer-facing live map
│   ├── (worker)/dashboard/ # Worker dashboard & toggle
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── components/
│   ├── map/                # Map-related components
│   └── ui/                 # Shared UI (header, footer, badges)
├── lib/
│   ├── supabase/           # Supabase client (browser, server, middleware)
│   └── constants.ts        # App-wide constants
├── types/
│   └── database.ts         # TypeScript types for DB entities
└── middleware.ts            # Supabase auth session refresh
```

## Database

Run the migration in `supabase/migrations/001_initial_schema.sql` against your Supabase project. It creates:

- `profiles` — user profiles with PostGIS location
- `services` — service catalog
- `bookings` — job requests
- Spatial indexes and Row Level Security policies

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps JS API key |
