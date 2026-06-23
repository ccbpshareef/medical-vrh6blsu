# Medical

Exported site preview for `medical-vrh6blsu`.

## Structure

- `site-data/` — manifest, pages, sections JSON exported from the builder
- `src/app/` — Next.js preview app (uses shared registry from d3ewebsitebuilder)

## Commands

```bash
npm run dev    # http://localhost:3771
npm run build
npm run start  # production preview on port 3771
```

## Deploy

This folder is a standalone Next.js app. Typical options:

1. **Vercel / Netlify** — import the folder `d3ewebsitebuilder/site/medical-vrh6blsu` as a Next.js project (`npm run build`, output `.next`).
2. **Node server** — after `npm run build`, run `PORT=3000 npm run start` on any host with Node 20+.
3. **Docker** — copy this folder into an image, install deps via the `node_modules` symlink to d3ewebsitebuilder or run `npm install` in CI.

Site content lives in `site-data/`; the preview app reads it at build/runtime via `src/lib/site-loader.ts`.
