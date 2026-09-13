import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const catalog = JSON.parse(fs.readFileSync(path.join(root,'src/data/catalog.json'),'utf8'));
const expectedLocales = ['en','es','pt-BR','de','fr','it','ja','ar','id','tr','pl','ko','nl','vi'];
const failures = [];
if (catalog.tool_count !== 429) failures.push(`Expected 429 tools, got ${catalog.tool_count}`);
if (!Array.isArray(catalog.tools) || catalog.tools.length !== catalog.tool_count) failures.push('Tool count does not match tools array');
if (JSON.stringify(catalog.locales) !== JSON.stringify(expectedLocales)) failures.push('Locale list differs from frozen Release 1.0 locale list');
const ids = new Set();
for (const tool of catalog.tools) {
  if (!/^[a-z0-9-]+$/.test(tool.id)) failures.push(`Invalid id: ${tool.id}`);
  if (ids.has(tool.id)) failures.push(`Duplicate id: ${tool.id}`);
  ids.add(tool.id);
  if (!tool.name?.trim()) failures.push(`Missing name: ${tool.id}`);
  if (!tool.category?.trim()) failures.push(`Missing category: ${tool.id}`);
}
const byCategory = Object.fromEntries([...new Set(catalog.tools.map((t)=>t.category))].map((category)=>[category,catalog.tools.filter((t)=>t.category===category).length]));
const report = {
  version: catalog.version,
  toolCount: catalog.tools.length,
  localeCount: catalog.locales.length,
  projectedLocalizedToolPages: catalog.tools.length * catalog.locales.length,
  categoryCount: Object.keys(byCategory).length,
  categories: byCategory,
  valid: failures.length === 0,
  failures,
};
fs.mkdirSync(path.join(root,'reports'),{recursive:true});
fs.writeFileSync(path.join(root,'reports/catalog-audit.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if (failures.length) process.exit(1);
