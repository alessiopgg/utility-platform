import type { LocaleId } from '../core/types.ts';

export const locales: LocaleId[] = [
  'en', 'es', 'pt-BR', 'de', 'fr', 'it', 'ja', 'ar', 'id', 'tr', 'pl', 'ko', 'nl', 'vi',
];

export const localeMeta: Record<LocaleId, { label: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  en: { label: 'English', dir: 'ltr', htmlLang: 'en' },
  es: { label: 'Español', dir: 'ltr', htmlLang: 'es' },
  'pt-BR': { label: 'Português (Brasil)', dir: 'ltr', htmlLang: 'pt-BR' },
  de: { label: 'Deutsch', dir: 'ltr', htmlLang: 'de' },
  fr: { label: 'Français', dir: 'ltr', htmlLang: 'fr' },
  it: { label: 'Italiano', dir: 'ltr', htmlLang: 'it' },
  ja: { label: '日本語', dir: 'ltr', htmlLang: 'ja' },
  ar: { label: 'العربية', dir: 'rtl', htmlLang: 'ar' },
  id: { label: 'Bahasa Indonesia', dir: 'ltr', htmlLang: 'id' },
  tr: { label: 'Türkçe', dir: 'ltr', htmlLang: 'tr' },
  pl: { label: 'Polski', dir: 'ltr', htmlLang: 'pl' },
  ko: { label: '한국어', dir: 'ltr', htmlLang: 'ko' },
  nl: { label: 'Nederlands', dir: 'ltr', htmlLang: 'nl' },
  vi: { label: 'Tiếng Việt', dir: 'ltr', htmlLang: 'vi' },
};

export function isLocale(value: string): value is LocaleId {
  return (locales as string[]).includes(value);
}
