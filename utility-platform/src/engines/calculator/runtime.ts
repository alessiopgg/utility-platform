import { getCalculatorSpec } from './specs.ts';
import type { CalculatorResult, CalculatorValues } from './types.ts';

export function runCalculator(id: string, values: CalculatorValues): CalculatorResult[] {
  const spec = getCalculatorSpec(id);
  if (!spec) throw new Error(`Calculator not implemented: ${id}`);
  return spec.compute(values);
}
