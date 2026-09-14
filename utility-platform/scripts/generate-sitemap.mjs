import { readdir, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const dist = join(process.cwd(), 'dist');
const site = (process.env.SITE_URL || '').replace(/\/+$/, '');

if (!site) {
  throw new Error('SITE_URL is required to generate the sitemap');
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await walk(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full);
    }
  }

  return files;
}

function xmlEscape(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const htmlFiles = await walk(dist);

const urls = htmlFiles
  .map(file => relative(dist, file).replaceAll('\\', '/'))
  .filter(path => path !== '404.html')
  .map(path => {
    if (path === 'index.html') return `${site}/`;

    if (path.endsWith('/index.html')) {
      return `${site}/${path.slice(0, -'index.html'.length)}`;
    }

    return `${site}/${path.replace(/\.html$/, '')}`;
  })
  .sort();

const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(url => `  <url><loc>${xmlEscape(url)}</loc></url>`).join('\n') +
  `\n</urlset>\n`;

const index =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `  <sitemap><loc>${xmlEscape(site + '/sitemap-0.xml')}</loc></sitemap>\n` +
  `</sitemapindex>\n`;

await writeFile(join(dist, 'sitemap-0.xml'), sitemap);
await writeFile(join(dist, 'sitemap-index.xml'), index);

console.log(`Generated sitemap with ${urls.length} URLs.`);
