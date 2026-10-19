# ClearFlow Plumbing — Homepage

Responsive single-page site for ClearFlow Plumbing, built from the Figma file
`ziahdesign` (desktop frame `51:14`, mobile frame `106:1265`).

Stack: Vite, React 19, TypeScript, Tailwind CSS v4. Fonts (Geist, Instrument Serif) are self-hosted via
`@fontsource`. No backend, database or paid services.

## Scripts

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to dist/ (base /ClearFlow/)
npm run preview    # serve dist/ at /ClearFlow/
npm run lint
```

## Structure

- `src/sections/` — one component per Figma section (Header, Hero, TrustBar, Services, WhyChooseUs, Pricing,
  Reviews, HowItWorks, ServiceAreas, About, Faq, FinalCta, Footer)
- `src/components/` — `Icon` (the Figma `icon/*` set) and shared UI (`Button`, `Eyebrow`, `Heading`, `IconBadge`,
  `Stars`, `Container`)
- `src/content/site.ts` — page copy
- `src/assets/images/` — photos exported from the Figma file
- `src/index.css` — design tokens and text styles

## Deployment (GitHub Pages)

Repository: `ziahgg/ClearFlow` → `https://ziahgg.github.io/ClearFlow/`.

`.github/workflows/deploy.yml` builds and deploys on every push to `main`. In the repository settings set
**Pages → Source** to **GitHub Actions**. The base path lives in `vite.config.ts` and must match the repository
name (case-sensitive); set `BASE_PATH=/` when building for a custom domain.
