import type { LocaleId } from '../core/types.ts';
import type { ToolEditorial } from './tool-editorial.ts';

export const EDITORIAL_TRANSLATION_LOCALES: LocaleId[] = [
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

/**
 * Le traduzioni vengono aggiunte per blocchi.
 * Chiave = stringa editoriale inglese esatta.
 *
 * Se anche una sola stringa necessaria a un tool manca,
 * quel tool NON riceve il blocco editoriale in quella lingua.
 * In questo modo non pubblichiamo pagine metà tradotte.
 */
export const editorialTranslations:
  Partial<Record<LocaleId, Record<string, string>>> = {
    es: {},
    'pt-BR': {},
    de: {},
    fr: {},
    ja: {},
    ar: {},
    id: {},
    tr: {},
    pl: {},
    ko: {},
    nl: {},
    vi: {},
  };

function technical(value: string): boolean {
  const s = value.trim();

  if (!s) return true;

  // Formule / valori puramente tecnici.
  if (/^[0-9A-Z_.%+×÷=^()|/*\\,\-–—<>: ]+$/.test(s)) {
    return true;
  }

  // File singoli.
  if (/^[\w.-]+\.(pdf|jpg|jpeg|png|webp|gif|svg|json|csv|txt|xml|yaml|yml|mp3|wav|mp4|srt|vtt)$/i.test(s)) {
    return true;
  }

  // Acronomi e token tecnici che non devono essere tradotti.
  if (/^(PDF|JPG|JPEG|PNG|WEBP|GIF|SVG|JSON|CSV|XML|YAML|SQL|QR|URL|URI|HTML|CSS|RGB|HEX|HSL|HSV|WCAG|EXIF|DPI|UUID|SHA-256|MD5|Base64)$/i.test(s)) {
    return true;
  }

  return false;
}

function translate(
  locale: LocaleId,
  value: string,
  missing: Set<string>
): string {
  if (technical(value)) return value;

  const translated = editorialTranslations[locale]?.[value];

  if (translated) return translated;

  missing.add(value);
  return value;
}

function translateVisual(
  locale: LocaleId,
  visual: NonNullable<ToolEditorial['visual']>,
  missing: Set<string>
): NonNullable<ToolEditorial['visual']> {
  if (visual.kind === 'merge-pdf') {
    return {
      ...visual,
      sourceA: translate(locale, visual.sourceA, missing),
      sourceB: translate(locale, visual.sourceB, missing),
      result: translate(locale, visual.result, missing),
      caption: translate(locale, visual.caption, missing),
    };
  }

  if (visual.kind === 'compress-pdf') {
    return {
      ...visual,
      input: translate(locale, visual.input, missing),
      process: translate(locale, visual.process, missing),
      output: translate(locale, visual.output, missing),
      caption: translate(locale, visual.caption, missing),
    };
  }

  if (visual.kind === 'percentage') {
    return {
      ...visual,
      percentage: visual.percentage,
      value: visual.value,
      result: visual.result,
      formula: visual.formula,
      caption: translate(locale, visual.caption, missing),
    };
  }

  return {
    ...visual,
    nodes: visual.nodes.map((item) =>
      translate(locale, item, missing)
    ),
    caption: translate(locale, visual.caption, missing),
  };
}

export function translateToolEditorial(
  locale: LocaleId,
  base: ToolEditorial
): ToolEditorial | null {
  if (locale === 'en' || locale === 'it') {
    return base;
  }

  const missing = new Set<string>();

  const translated: ToolEditorial = {
    ...base,

    kicker: translate(locale, base.kicker, missing),
    title: translate(locale, base.title, missing),
    intro: translate(locale, base.intro, missing),

    facts: base.facts.map((item) =>
      translate(locale, item, missing)
    ),

    visual: base.visual
      ? translateVisual(locale, base.visual, missing)
      : undefined,

    stepsTitle: base.stepsTitle
      ? translate(locale, base.stepsTitle, missing)
      : undefined,

    steps: base.steps?.map((item) =>
      translate(locale, item, missing)
    ),

    insightLabel: base.insightLabel
      ? translate(locale, base.insightLabel, missing)
      : undefined,

    insightTitle: base.insightTitle
      ? translate(locale, base.insightTitle, missing)
      : undefined,

    insightBody: base.insightBody
      ? translate(locale, base.insightBody, missing)
      : undefined,

    privacyLabel: base.privacyLabel
      ? translate(locale, base.privacyLabel, missing)
      : undefined,

    privacyTitle: base.privacyTitle
      ? translate(locale, base.privacyTitle, missing)
      : undefined,

    privacyBody: base.privacyBody
      ? translate(locale, base.privacyBody, missing)
      : undefined,

    faqTitle: base.faqTitle
      ? translate(locale, base.faqTitle, missing)
      : undefined,

    faq: base.faq?.map((item) => ({
      question: translate(locale, item.question, missing),
      answer: translate(locale, item.answer, missing),
    })),

    nextTitle: base.nextTitle
      ? translate(locale, base.nextTitle, missing)
      : undefined,

    next: base.next?.map((item) => ({
      toolId: item.toolId,
      description: translate(
        locale,
        item.description,
        missing
      ),
    })),
  };

  return missing.size === 0 ? translated : null;
}
