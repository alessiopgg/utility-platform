import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL?.trim();

if (!site) {
  throw new Error(
    'SITE_URL is required for production builds. Example: SITE_URL=https://utilitylake.com npm run build'
  );
}

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    build: {
      sourcemap: false,
    },
  },
});
