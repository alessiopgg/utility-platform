export type LocaleId =
  | 'en' | 'es' | 'pt-BR' | 'de' | 'fr' | 'it' | 'ja'
  | 'ar' | 'id' | 'tr' | 'pl' | 'ko' | 'nl' | 'vi';

export type EngineId =
  | 'calculator' | 'text' | 'structured-data' | 'encoding' | 'random'
  | 'color' | 'image' | 'web-asset' | 'qr-barcode' | 'pdf'
  | 'media' | 'maker' | 'units';

export interface CatalogTool {
  id: string;
  name: string;
  category: string;
}

export interface ToolDefinition extends CatalogTool {
  engine: EngineId;
  categorySlug: string;
  implemented: boolean;
  localOnly: boolean;
}

export interface SeoData {
  title: string;
  description: string;
  canonicalPath: string;
}
