import type { LocaleId } from './types.ts';

/**
 * Solo i tool che hanno ricevuto una revisione editoriale completa
 * devono essere aggiunti qui.
 *
 * La lista parte volutamente vuota: durante il quality pass
 * abiliteremo i tool uno alla volta.
 */
export const ADSENSE_READY_TOOL_IDS = new Set<string>([
]);

export function canShowAdsOnTool(locale: LocaleId, toolId: string): boolean {
  const supportedLocale = locale === 'en' || locale === 'it';
  return supportedLocale && ADSENSE_READY_TOOL_IDS.has(toolId);
}
