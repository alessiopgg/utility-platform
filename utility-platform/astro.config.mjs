import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig(({ command }) => {
  const site = process.env.SITE_URL?.trim() || (command === 'dev' ? 'http://localhost:4321' : '');
  if (!site) {
    throw new Error('SITE_URL is required for production builds. Example: SITE_URL=https://your-domain.example npm run build');
  }

  return {
    site,
    output: 'static',
    trailingSlash: 'always',
    integrations: [sitemap()],
    vite: {
      build: {
        sourcemap: false,
      },
    },
  };
});
