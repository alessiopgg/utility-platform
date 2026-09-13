import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root,p),'utf8');
const exists = (p) => fs.existsSync(path.join(root,p));
const catalog = JSON.parse(read('src/data/catalog.json'));
const failures = [];
const warn = [];

const expectedLocales = ['en','es','pt-BR','de','fr','it','ja','ar','id','tr','pl','ko','nl','vi'];
const localeText = read('src/i18n/config.ts');
for (const locale of expectedLocales) if (!localeText.includes(`'${locale}'`) && !localeText.includes(` ${locale}:`)) failures.push(`Locale not configured: ${locale}`);
if (!localeText.includes("ar: { label: 'العربية', dir: 'rtl'")) failures.push('Arabic RTL metadata missing');

const tools = catalog.tools ?? [];
if (tools.length !== 429) failures.push(`Expected 429 catalog tools, found ${tools.length}`);
const ids = tools.map(t=>t.id);
if (new Set(ids).size !== ids.length) failures.push('Duplicate tool IDs in catalog');
if (tools.some(t=>t.implemented === false)) failures.push('Catalog contains explicitly disabled tools');

for (const file of [
  'src/pages/robots.txt.ts','src/layouts/BaseLayout.astro','src/components/ToolContent.astro',
  'src/components/HomeContent.astro','src/components/LegalPage.astro','src/core/site.ts',
  '.env.example','DEPLOYMENT.md','README.md','public/site.webmanifest'
]) if (!exists(file)) failures.push(`Required release file missing: ${file}`);

if (exists('public/robots.txt')) failures.push('public/robots.txt conflicts with generated src/pages/robots.txt.ts');

const config = read('astro.config.mjs');
if (!config.includes('SITE_URL is required for production builds')) failures.push('Production SITE_URL guard missing');

const env = read('.env.example');
for (const key of ['SITE_URL','PUBLIC_SITE_NAME','PUBLIC_CONTACT_EMAIL','PUBLIC_ADSENSE_CLIENT','PUBLIC_ADSENSE_SLOT','PUBLIC_PLAUSIBLE_DOMAIN']) {
  if (!env.includes(`${key}=`)) failures.push(`Missing env documentation: ${key}`);
}

const base = read('src/layouts/BaseLayout.astro');
if (!base.includes('hreflang')) failures.push('hreflang output missing from BaseLayout');
if (!base.includes('rel="canonical"')) failures.push('canonical output missing from BaseLayout');
if (!base.includes('PLAUSIBLE_DOMAIN')) warn.push('Plausible hook not present');
if (!base.includes('ADSENSE_CLIENT')) warn.push('AdSense hook not present');

const projectedLocalizedToolPages = tools.length * expectedLocales.length;
const result = {
  version: '1.0.0',
  toolCount: tools.length,
  localeCount: expectedLocales.length,
  projectedLocalizedToolPages,
  productionSiteUrlGuard: config.includes('SITE_URL is required for production builds'),
  generatedRobotsOnly: !exists('public/robots.txt') && exists('src/pages/robots.txt.ts'),
  failures,
  warnings: warn,
  valid: failures.length === 0,
};
fs.mkdirSync(path.join(root,'reports'),{recursive:true});
fs.writeFileSync(path.join(root,'reports/release-audit.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
if (failures.length) process.exit(1);
