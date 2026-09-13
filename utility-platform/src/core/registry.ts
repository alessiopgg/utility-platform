import catalog from '../data/catalog.json';
import type { CatalogTool, EngineId, ToolDefinition } from './types.ts';
import { hasCalculatorSpec } from '../engines/calculator/specs.ts';
import { simpleImplementedIds } from '../engines/simple-registry.ts';
import { fileImplementedIds } from '../engines/file-registry.ts';

const categoryConfig: Record<string, { slug: string; engine: EngineId; localOnly: boolean }> = {
  'Calculators — Math & Everyday': { slug: 'math', engine: 'calculator', localOnly: true },
  'Calculators — Business & Finance': { slug: 'business', engine: 'calculator', localOnly: true },
  'Calculators — Construction & DIY': { slug: 'construction', engine: 'calculator', localOnly: true },
  'Calculators — Photography & Creator': { slug: 'creator-calculators', engine: 'calculator', localOnly: true },
  'Text Tools': { slug: 'text', engine: 'text', localOnly: true },
  'Developer & Data Tools': { slug: 'developer', engine: 'structured-data', localOnly: true },
  'Encoding, Hash & ID Tools': { slug: 'encoding', engine: 'encoding', localOnly: true },
  'Random & Picker Tools': { slug: 'random', engine: 'random', localOnly: true },
  'Color & Design Tools': { slug: 'color', engine: 'color', localOnly: true },
  'Image Tools': { slug: 'image', engine: 'image', localOnly: true },
  'Web Asset Tools': { slug: 'web', engine: 'web-asset', localOnly: true },
  'QR & Barcode Tools': { slug: 'qr-barcode', engine: 'qr-barcode', localOnly: true },
  'PDF Tools': { slug: 'pdf', engine: 'pdf', localOnly: true },
  'Audio, Video & Subtitle Tools': { slug: 'media', engine: 'media', localOnly: true },
  '3D Printing & Maker Tools': { slug: 'maker', engine: 'maker', localOnly: true },
  'Unit & Technical Converters': { slug: 'units', engine: 'units', localOnly: true },
};

const simpleIds = simpleImplementedIds();
const fileIds = fileImplementedIds();
const isImplemented = (id: string, engine: EngineId): boolean => engine === 'calculator' ? hasCalculatorSpec(id) : simpleIds.has(id) || fileIds.has(id);

export const tools: ToolDefinition[] = (catalog.tools as CatalogTool[]).map((tool) => {
  const config = categoryConfig[tool.category];
  if (!config) throw new Error(`Unknown category: ${tool.category}`);
  return {
    ...tool,
    categorySlug: config.slug,
    engine: config.engine,
    implemented: isImplemented(tool.id, config.engine),
    localOnly: config.localOnly,
  };
});

export const categories = Object.entries(categoryConfig).map(([name, config]) => ({
  name,
  ...config,
  count: tools.filter((tool) => tool.category === name).length,
}));

export function getToolById(id: string): ToolDefinition | undefined {
  return tools.find((tool) => tool.id === id);
}

export function getToolByRoute(categorySlug: string, id: string): ToolDefinition | undefined {
  return tools.find((tool) => tool.categorySlug === categorySlug && tool.id === id);
}

export function relatedTools(tool: ToolDefinition, limit = 6): ToolDefinition[] {
  return tools.filter((candidate) => candidate.id !== tool.id && candidate.category === tool.category).slice(0, limit);
}
