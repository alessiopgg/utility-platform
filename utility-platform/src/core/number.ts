import type { LocaleId } from './types.ts';

const arabicIndic = '٠١٢٣٤٥٦٧٨٩';
const easternArabic = '۰۱۲۳۴۵۶۷۸۹';

export function normalizeDigits(value: string): string {
  return [...value].map((ch) => {
    const a = arabicIndic.indexOf(ch);
    if (a >= 0) return String(a);
    const e = easternArabic.indexOf(ch);
    if (e >= 0) return String(e);
    return ch;
  }).join('');
}

export function parseLocaleNumber(value: string, locale: LocaleId): number {
  let normalized = normalizeDigits(value.trim()).replace(/\s/g, '');
  const commaDecimalLocales: LocaleId[] = ['es','pt-BR','de','fr','it','tr','pl','nl','vi'];
  if (commaDecimalLocales.includes(locale)) {
    normalized = normalized.replace(/\./g, '').replace(',', '.');
  } else {
    normalized = normalized.replace(/,/g, '');
  }
  return Number(normalized);
}

export function formatNumber(value: number, locale: LocaleId, maximumFractionDigits = 6): string {
  return new Intl.NumberFormat(locale, { maximumFractionDigits }).format(value);
}
