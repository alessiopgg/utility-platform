export type CalculatorField = {
  key: string;
  label: string;
  type: 'number' | 'text' | 'select';
  defaultValue?: string | number;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: { value: string; label: string }[];
};

export type CalculatorResult = {
  label: string;
  value: string | number;
  unit?: string;
  maximumFractionDigits?: number;
};

export type CalculatorValues = Record<string, string | number>;

export type CalculatorSpec = {
  id: string;
  intro: string;
  fields: CalculatorField[];
  compute: (values: CalculatorValues) => CalculatorResult[];
};
