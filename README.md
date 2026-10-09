# LAVENDER-fashion

A clothing storefront built with React, React Router, Bootstrap, and Vite.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Vite writes the production site to `dist/`.

## Deploy on Vercel

Import this GitHub repository into Vercel and keep the project root at the repository root. Vercel detects Vite; use `npm run build` as the build command and `dist` as the output directory. The included `vercel.json` rewrite supports direct visits to React Router routes such as `/about`.
