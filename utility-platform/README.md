# Utility Platform — Release 1.0 source

Static-first, privacy-first utility site generated from a frozen catalog of **429 tools** and **14 locales**.

## Release scope

- 429/429 catalog tools have an implementation mapped in the registry.
- 14 locales: EN, ES, PT-BR, DE, FR, IT, JA, AR (RTL), ID, TR, PL, KO, NL, VI.
- Static generation is designed for 6,006 localized tool pages, plus category/home/legal pages.
- Local/browser processing is used wherever technically appropriate; no application database or account system is required.
- Optional AdSense and Plausible integrations are configured centrally through environment variables and are disabled when unset.

## Requirements

- Node.js >= 22.12
- npm

## First install

This source bundle does not include `node_modules`. If `package-lock.json` is not present, run:

```bash
npm install
```

After a lockfile has been generated and committed, subsequent reproducible installs can use:

```bash
npm ci
```

## QA

```bash
npm run qa
```

The QA command checks the frozen catalog, implementation coverage, TypeScript core and core unit tests.

## Development

```bash
cp .env.example .env
npm run dev
```

## Production build

Set the real public origin before building:

```bash
SITE_URL=https://your-domain.example npm run build
```

Astro generates the deployable site in `dist/`.

## Deployment configuration

`.env.example` documents all supported configuration:

- `SITE_URL` — required real production origin for canonical URLs, sitemap and hreflang.
- `PUBLIC_SITE_NAME` — public brand name.
- `PUBLIC_CONTACT_EMAIL` — contact/legal email.
- `PUBLIC_ADSENSE_CLIENT` / `PUBLIC_ADSENSE_SLOT` — optional AdSense configuration.
- `PUBLIC_PLAUSIBLE_DOMAIN` — optional Plausible analytics domain.

If ad or analytics variables are empty, those third-party scripts are not loaded.

## Architecture

- `src/data/catalog.json` — frozen 429-tool catalog.
- `src/core/registry.ts` — typed category/engine registry.
- `src/engines/` — browser execution engines.
- `src/i18n/` — 14-locale configuration and UI/legal copy, including RTL Arabic.
- `src/pages/` — static route generation.
- `src/components/` — shared UI widgets and layouts.
- `scripts/implementation-audit.mjs` — checks exact catalog→implementation coverage.
- `reports/` — generated QA reports.

## Important release note

A full Astro production build requires the npm dependencies. Core QA can be executed without a successful fresh registry download if TypeScript is already available in the environment, but the final production release should only be considered build-certified after `npm install`/`npm ci` and `npm run build` complete successfully in a network-enabled environment.
