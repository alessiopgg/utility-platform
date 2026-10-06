import type { LocaleId } from './types.ts';

export const ADSENSE_READY_TOOL_IDS = new Set<string>([
  'merge-pdf',
  'compress-pdf',
  'split-pdf',
  'rotate-pdf',
  'reorder-pdf-pages',
  'pdf-text-extractor',
  'percentage-calculator',
  'margin-calculator',
  'compound-interest-calculator',
  'loan-payment-calculator',
  'concrete-calculator',
  'json-formatter',
  'json-validator',
  'csv-to-json',
  'regex-tester',
  'unix-timestamp-converter',
  'compress-image',
  'resize-image',
  'crop-image',
  'remove-exif-metadata',
  'url-qr-generator',
  'qr-reader-from-image',
  'color-contrast-checker',
  'temperature-converter',
  'word-counter',
]);

export function canShowAdsOnTool(locale: LocaleId, toolId: string): boolean {
  const supportedLocale = locale === 'en' || locale === 'it';
  return supportedLocale && ADSENSE_READY_TOOL_IDS.has(toolId);
}
