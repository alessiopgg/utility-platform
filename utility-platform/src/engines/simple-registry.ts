import type { EngineId } from '../core/types.ts';
import type { SimpleToolSpec, SimpleValues } from './simple-types.ts';
import { getTextSpec, runTextTool, textToolIds } from './text/specs.ts';
import { getEncodingSpec, runEncodingTool, encodingToolIds } from './encoding/specs.ts';
import { getRandomSpec, runRandomTool, randomToolIds } from './random/specs.ts';
import { getColorSpec, runColorTool, colorToolIds } from './color/specs.ts';
import { getUnitSpec, runUnitTool, unitToolIds } from './units/specs.ts';
import { getStructuredDataSpec, runStructuredDataTool, structuredDataToolIds } from './structured-data/specs.ts';
import { getWebAssetSpec, runWebAssetTool, webAssetToolIds } from './web-asset/specs.ts';
import { getMakerSpec, runMakerTool, makerToolIds } from './maker/specs.ts';
import { getMediaSimpleSpec, runMediaSimpleTool, mediaSimpleToolIds } from './media/specs.ts';

const ids: Partial<Record<EngineId, () => string[]>> = {
  text: textToolIds,
  encoding: encodingToolIds,
  random: randomToolIds,
  color: colorToolIds,
  units: unitToolIds,
  'structured-data': structuredDataToolIds,
  'web-asset': webAssetToolIds,
  maker: makerToolIds,
  media: mediaSimpleToolIds,
};
export function simpleImplementedIds(): Set<string> { return new Set(Object.values(ids).flatMap((fn)=>fn?.() ?? [])); }
export function getSimpleSpec(engine:EngineId,id:string):SimpleToolSpec|undefined {
  if(engine==='web-asset')return getWebAssetSpec(id); if(engine==='maker')return getMakerSpec(id); if(engine==='media')return getMediaSimpleSpec(id); if(engine==='structured-data')return getStructuredDataSpec(id); if(engine==='text')return getTextSpec(id); if(engine==='encoding')return getEncodingSpec(id); if(engine==='random')return getRandomSpec(id); if(engine==='color')return getColorSpec(id); if(engine==='units')return getUnitSpec(id); return undefined;
}
export async function runSimpleTool(engine:EngineId,id:string,v:SimpleValues){
  if(engine==='web-asset')return runWebAssetTool(id,v); if(engine==='maker')return runMakerTool(id,v); if(engine==='media')return runMediaSimpleTool(id,v); if(engine==='structured-data')return runStructuredDataTool(id,v); if(engine==='text')return runTextTool(id,v); if(engine==='encoding')return runEncodingTool(id,v); if(engine==='random')return runRandomTool(id,v); if(engine==='color')return runColorTool(id,v); if(engine==='units')return runUnitTool(id,v); throw new Error(`Unsupported simple engine: ${engine}`);
}
