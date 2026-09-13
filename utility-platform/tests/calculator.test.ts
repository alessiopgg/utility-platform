import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { calculatorSpecCount, calculatorSpecIds } from '../src/engines/calculator/specs.ts';
import { runCalculator } from '../src/engines/calculator/runtime.ts';

const catalog = JSON.parse(fs.readFileSync(new URL('../src/data/catalog.json', import.meta.url),'utf8')) as { tools: {id:string;category:string}[] };
const calculatorIds = catalog.tools.filter((tool)=>tool.category.startsWith('Calculators —')).map((tool)=>tool.id).sort();

test('all 124 catalog calculators have an implementation spec', () => {
  assert.equal(calculatorSpecCount(), 124);
  assert.deepEqual(calculatorSpecIds().sort(), calculatorIds);
});

test('percentage calculator', () => {
  assert.equal(runCalculator('percentage-calculator',{percentage:20,value:150})[0]?.value,30);
});

test('fraction calculator reduces output', () => {
  assert.equal(runCalculator('fraction-calculator',{n1:1,d1:2,op:'+',n2:1,d2:6})[0]?.value,'2/3');
});

test('compound interest returns more than principal', () => {
  const amount = runCalculator('compound-interest-calculator',{principal:1000,rate:5,years:10,frequency:12})[0]?.value;
  assert.equal(typeof amount,'number');
  assert.ok((amount as number) > 1000);
});

test('tile calculator returns integer tile count', () => {
  const count = runCalculator('tile-calculator',{length:4,width:3,tileLength:60,tileWidth:60,waste:10})[1]?.value;
  assert.equal(count,37);
});

test('depth of field produces near/far results', () => {
  const results = runCalculator('depth-of-field-calculator',{focal:50,aperture:2.8,distance:3,coc:0.03});
  assert.equal(results.length,3);
  assert.equal(typeof results[0]?.value,'number');
});
