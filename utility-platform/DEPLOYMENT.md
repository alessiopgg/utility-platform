# Production deployment checklist

## 1. Configure

Copy `.env.example` to `.env` or configure the equivalent environment variables in the hosting platform.

Required:

```text
SITE_URL=https://your-real-domain.example
PUBLIC_SITE_NAME=Your Brand
PUBLIC_CONTACT_EMAIL=you@your-real-domain.example
```

Optional monetization / analytics:

```text
PUBLIC_ADSENSE_CLIENT=
PUBLIC_ADSENSE_SLOT=
PUBLIC_PLAUSIBLE_DOMAIN=
```

Leave optional values empty until the respective service is approved/configured.

## 2. Install and validate

```bash
npm install
npm run qa
npm run build
```

After the first successful install, keep the generated `package-lock.json` under version control and use `npm ci` for later builds.

## 3. Inspect the build

Confirm:

- `dist/` exists.
- `/robots.txt` references the real production sitemap origin.
- `sitemap-index.xml` is generated.
- canonical and hreflang links use the production origin.
- a sample of EN, IT, ES and AR routes loads correctly.
- Arabic pages render with `dir="rtl"`.
- calculator, image/file, PDF, QR/barcode and media samples execute in-browser.
- no AdSense or analytics script is loaded when its env variables are blank.

## 4. Deploy

Deploy `dist/` to a static host such as Cloudflare Pages. Build command: `npm run build`. Output directory: `dist`.

## 5. After the domain is live

- Add and verify the domain in Google Search Console.
- Submit `/sitemap-index.xml`.
- Configure the chosen analytics service if desired.
- Apply to/enable the chosen ad network only after the public site, legal pages and consent requirements for target regions are ready.
- Run a mobile/desktop smoke test on the public origin.

## 6. Ongoing maintenance target

Routine content updates are not required by the architecture. Maintenance should be limited to security/dependency/browser compatibility updates, ad/analytics policy changes and bug fixes discovered after release.
