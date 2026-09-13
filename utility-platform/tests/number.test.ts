import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeDigits, parseLocaleNumber } from '../src/core/number.ts';

test('normalizes Arabic-Indic digits',()=>{ assert.equal(normalizeDigits('١٢٣.٤٥'),'123.45'); });
test('parses Italian decimal comma',()=>{ assert.equal(parseLocaleNumber('1.234,5','it'),1234.5); });
test('parses English grouped number',()=>{ assert.equal(parseLocaleNumber('1,234.5','en'),1234.5); });
