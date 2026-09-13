import type { LocaleId, SeoData, ToolDefinition } from './types.ts';
import { toolPath } from './routes.ts';
import { toolSeoCopy } from '../i18n/content.ts';

export function toolSeo(locale: LocaleId, tool: ToolDefinition): SeoData {
  const copy = toolSeoCopy(locale,tool);
  const title = copy.title;
  const description = copy.description;
  return { title, description, canonicalPath: toolPath(locale, tool) };
}
