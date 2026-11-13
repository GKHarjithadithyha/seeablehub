# SEEABLE HUB

Responsive SEEABLE HUB website built with the Next.js App Router, React 19, TypeScript, Tailwind CSS 4, Motion, Radix UI, React Hook Form, Zod and Lucide.

## Run locally

```bash
npm install
npm run dev
```

## Validate

```bash
npm run lint
npm run build
npm run check:site
```

`check:site` runs a Playwright browser pass against a running production server at `http://localhost:3000`. It checks all routes, mobile overflow, the mobile service menu, FAQ accordion, and contact form states. It saves desktop and mobile homepage screenshots under `artifacts/site-check/`.

## Deployment

Import this GitHub repository into Vercel. Vercel detects the Next.js framework and uses the `build` script automatically.

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project to the canonical production URL, without a trailing slash. Preview deployments fall back to Vercel's `VERCEL_URL`; local builds fall back to `https://seeablehub.com`.

The logo, supplied image references and `SEEABLE HUB content resource.docx` are included in the repository. Generated build output and local screenshots/reports are excluded by `.gitignore`.

The contact form currently validates entries in the browser and states clearly that messages are not sent. Connect a real submission endpoint before collecting enquiries. The site does not invent case studies, company statistics or social profiles.
