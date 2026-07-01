# Brawl Draft

Draft helper for Brawl Stars. It shows map-specific recommendations, global matchup data, and an admin panel for editing the scoring data.

## What it does

- Lets you pick a map and run through a draft
- Scores brawlers based on map fit, global counters, favored matchups, synergy, composition needs, and draft phase
- Shows recommendations that update as the draft changes
- Includes an admin dashboard for editing maps and matchup data

## Running it locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Data

The app starts with the built-in TypeScript data in `src/data/`, then loads saved overrides from Supabase if it is configured.

The live editable data is stored in the `app_config` table under these keys:

- `maps`
- `profiles`
- `globalCounters`

So the rough flow is:

1. Built-in `.ts` data loads first
2. Supabase overrides load on top of that
3. Admin changes save back to Supabase

That means the `.ts` files are still useful as defaults and backups, but Supabase is the live source once you start editing in the admin dashboard.

## Admin dashboard

Use the footer login on the main page to open the admin dashboard.

From there you can:

- edit map profiles
- edit global counters and favored matchups
- import a raw map profile from JSON
- add or remove maps

## JSON import

The raw profile import expects a JSON file that looks like a `MapRecommendationProfile` object. It does not need to be a TypeScript file.

Example shape:

```json
{
  "mapName": "Center Stage",
  "mode": "Brawl Ball",
  "weights": {
    "mapFit": 1.3,
    "composition": 1.1
  },
  "composition": [
    {
      "tags": ["tank-counter"],
      "count": 1,
      "weight": 1.3
    }
  ],
  "brawlers": {}
}
```

The app only uses the fields it understands. Extra fields in the JSON are ignored when imported and are not written back out when you save.

## Supabase

To use permanent edits, set these values in `.env.local`:

```bash
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_SUPABASE_ADMIN_EMAIL=your-admin-email
```

The app signs into Supabase, reads the config rows, and writes edits back through the same table.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - type-check and build
- `npm run preview` - preview the production build
- `npm run lint` - run Oxlint
- `npm run deploy` - build and publish to GitHub Pages

## Notes

If you add a new brawler, update `src/data/brawlers.ts` and then fill in its matchup data in the admin dashboard or Supabase.
