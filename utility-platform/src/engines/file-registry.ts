import type { EngineId } from '../core/types.ts';
import type { FileToolResult, FileToolSpec, FileToolValues } from './file-types.ts';
import { getImageSpec, imageToolIds } from './image/specs.ts';
import { getQrBarcodeSpec, qrBarcodeToolIds } from './qr-barcode/specs.ts';
import { getPdfSpec, pdfToolIds } from './pdf/specs.ts';
import { getColorFileSpec, colorFileToolIds } from './color/file-specs.ts';
import { getWebAssetFileSpec, webAssetFileToolIds } from './web-asset/file-specs.ts';
import { getMakerFileSpec, makerFileToolIds } from './maker/file-specs.ts';
import { getMediaFileSpec, mediaFileToolIds } from './media/file-specs.ts';

const fileEngines: Partial<Record<EngineId, (id: string) => FileToolSpec | undefined>> = {
  image: getImageSpec,
  'qr-barcode': getQrBarcodeSpec,
  pdf: getPdfSpec,
  color: getColorFileSpec,
  'web-asset': getWebAssetFileSpec,
  maker: getMakerFileSpec,
  media: getMediaFileSpec,
};

export function getFileSpec(engine: EngineId | string, id: string): FileToolSpec | undefined {
  return fileEngines[engine as EngineId]?.(id);
}

export function isFileTool(engine: EngineId | string, id: string): boolean {
  return Boolean(getFileSpec(engine,id));
}

export async function runFileTool(engine: EngineId | string, id: string, values: FileToolValues): Promise<FileToolResult[]> {
  const spec=getFileSpec(engine,id);
  if(!spec) throw new Error(`Missing file tool spec: ${engine}/${id}`);
  return await spec.execute(values);
}

export function fileImplementedIds(): Set<string> {
  return new Set([...imageToolIds(), ...qrBarcodeToolIds(), ...pdfToolIds(), ...colorFileToolIds(), ...webAssetFileToolIds(), ...makerFileToolIds(), ...mediaFileToolIds()]);
}
