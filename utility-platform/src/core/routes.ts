import type { LocaleId, ToolDefinition } from './types.ts';

export function localePrefix(locale: LocaleId): string {
  return locale === 'en' ? '' : `/${locale}`;
}

export function homePath(locale: LocaleId): string {
  return `${localePrefix(locale)}/` || '/';
}

export function categoryPath(locale: LocaleId, categorySlug: string): string {
  return `${localePrefix(locale)}/tools/${categorySlug}/`;
}

export function toolPath(locale: LocaleId, tool: ToolDefinition): string {
  return `${localePrefix(locale)}/tools/${tool.categorySlug}/${tool.id}/`;
}
