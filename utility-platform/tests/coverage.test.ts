import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { calculatorSpecIds } from '../src/engines/calculator/specs.ts';
import { textToolIds, runTextTool } from '../src/engines/text/specs.ts';
import { encodingToolIds, runEncodingTool } from '../src/engines/encoding/specs.ts';
import { randomToolIds } from '../src/engines/random/specs.ts';
import { colorToolIds, runColorTool } from '../src/engines/color/specs.ts';
import { unitToolIds, runUnitTool } from '../src/engines/units/specs.ts';
import { structuredDataToolIds, runStructuredDataTool } from '../src/engines/structured-data/specs.ts';
import { webAssetToolIds } from '../src/engines/web-asset/specs.ts';
import { makerToolIds } from '../src/engines/maker/specs.ts';
import { mediaSimpleToolIds } from '../src/engines/media/specs.ts';
import { imageToolIds } from '../src/engines/image/specs.ts';
import { qrBarcodeToolIds } from '../src/engines/qr-barcode/specs.ts';
import { pdfToolIds } from '../src/engines/pdf/specs.ts';
import { colorFileToolIds } from '../src/engines/color/file-specs.ts';
import { webAssetFileToolIds } from '../src/engines/web-asset/file-specs.ts';
import { makerFileToolIds } from '../src/engines/maker/file-specs.ts';
import { mediaFileToolIds } from '../src/engines/media/file-specs.ts';

const catalog = JSON.parse(fs.readFileSync(new URL('../src/data/catalog.json', import.meta.url),'utf8')) as { tools: {id:string}[] };
const allCatalogIds = new Set(catalog.tools.map((tool)=>tool.id));
const activeIds = [
  ...calculatorSpecIds(), ...textToolIds(), ...encodingToolIds(), ...randomToolIds(), ...colorToolIds(),
  ...unitToolIds(), ...structuredDataToolIds(), ...webAssetToolIds(), ...makerToolIds(), ...mediaSimpleToolIds(),
  ...imageToolIds(), ...qrBarcodeToolIds(), ...pdfToolIds(), ...colorFileToolIds(), ...webAssetFileToolIds(),
  ...makerFileToolIds(), ...mediaFileToolIds(),
];

test('release catalog exposes all 429 tools exactly once',()=>{
  assert.equal(activeIds.length,429);
  assert.equal(new Set(activeIds).size,429);
  for(const id of activeIds) assert.ok(allCatalogIds.has(id),`Unknown implementation id: ${id}`);
  assert.deepEqual([...new Set(activeIds)].sort(),[...allCatalogIds].sort());
});

test('text engine transforms case',async()=>{
  const out=await runTextTool('snake-case-converter',{text:'Hello Utility World'});
  assert.equal(out[0]?.value,'hello_utility_world');
});

test('MD5 utility produces standard checksum',async()=>{
  const out=await runEncodingTool('md5-generator',{text:'hello'});
  assert.equal(out[0]?.value,'5d41402abc4b2a76b9719d911017c592');
});

test('unit engine converts kilometers to miles',async()=>{
  const out=await runUnitTool('length-converter',{value:1,from:'km',to:'mi'});
  assert.ok(Math.abs(Number(out[0]?.value)-0.6213711922)<1e-8);
});

test('color engine converts HEX to RGB',async()=>{
  const out=await runColorTool('hex-to-rgb',{hex:'#3366FF'});
  assert.equal(out[0]?.value,'rgb(51, 102, 255)');
});

test('structured data JSON minifier works without optional heavy formatter imports',async()=>{
  const out=await runStructuredDataTool('json-minifier',{text:'{ "a": 1, "b": [2, 3] }'});
  assert.equal(out[0]?.value,'{"a":1,"b":[2,3]}');
});
