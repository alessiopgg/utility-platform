import fs from 'node:fs';
import { toolEditorial } from '../src/i18n/tool-editorial.ts';
import type { LocaleId } from '../src/core/types.ts';

const catalog = JSON.parse(
  fs.readFileSync('src/data/catalog.json', 'utf8')
);

const locales: LocaleId[] = [
  'en',
  'it',
  'es',
  'pt-BR',
  'de',
  'fr',
  'ja',
  'ar',
  'id',
  'tr',
  'pl',
  'ko',
  'nl',
  'vi',
];

const tools = catalog.tools ?? [];

console.log('');
console.log('EDITORIAL COVERAGE BY LOCALE');
console.log('============================');

for (const locale of locales) {
  let covered = 0;

  for (const tool of tools) {
    if (toolEditorial(locale, tool.id)) {
      covered++;
    }
  }

  const percent =
    tools.length === 0
      ? 0
      : (covered / tools.length) * 100;

  console.log(
    locale.padEnd(6),
    String(covered).padStart(3) + '/' + tools.length,
    percent.toFixed(1) + '%'
  );
}
