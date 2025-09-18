# Coffee Pastel Portfolio
Minimal, coffee-pastel, bilingual (TH/EN) portfolio built with Next.js (App Router), Tailwind, and next-intl.

## Quick Start
1) Install deps: `pnpm install` (or `npm install`)
2) Dev server: `pnpm dev`
3) Edit `messages/*.json` to replace mock content, and swap images in `public/`.

## Build & Deploy
- Build locally: `pnpm build`
- Start production: `pnpm start`
- Deploy to Vercel: Create a new project and import this repo. Framework preset: Next.js. No extra env required.

### Vercel deployment checklist
- Import the repo into Vercel (Framework Preset: Next.js)
- Set Production Branch (e.g., main)
- Trigger a Deploy
- After deploy, verify:
	- /th and /en render without 500s
	- Language switch updates URL segment
	- /api/og returns an image (content-type image/png)
	- /robots.txt and /sitemap.xml are accessible
	- View page source and check JSON-LD script exists

Notes:
- `vercel.json` is included with a minimal config; you can omit it since Vercel auto-detects Next.js.
- No environment variables are required.

## Features
- Bilingual routing: `/th` and `/en` via `next-intl` middleware
- Sidebar layout (sticky on md+) with mobile-friendly stack
- Coffee-pastel theme: cream/latte/ink/coffee/rose, soft shadows, rounded corners
- Accessible focus states and base font ≥ 16px
- JSON-LD (Person) injected in layout
- Dynamic OG image under `/api/og`
 - Robots and sitemap endpoints

## Assets & placeholders
- Replace `public/avatar.jpg` with your portrait; or temporarily use `public/placeholders/avatar.svg`.
- Project covers live in `public/covers/`. If you don’t have them yet, use `public/placeholders/cover.svg`.
- Resume PDFs should be placed at `/public/resume-th.pdf` and `/public/resume-en.pdf`, matching paths in `messages/*.json`.
