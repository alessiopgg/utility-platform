import { tools } from './registry.ts';
import { toolPath } from './routes.ts';
import { categoryName, toolName } from '../i18n/content.ts';
import { toolSeo } from './seo.ts';
import type { LocaleId } from './types.ts';

export function searchIndex(locale: LocaleId) {
  return tools.filter((tool)=>tool.implemented).map((tool)=>({
    name: toolName(locale,tool),
    category: categoryName(locale,tool.category),
    description: toolSeo(locale,tool).description,
    url: toolPath(locale,tool),
    search: `${toolName(locale,tool)} ${tool.name} ${categoryName(locale,tool.category)} ${tool.category}`,
  }));
}
