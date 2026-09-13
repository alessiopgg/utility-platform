export type SimpleField = {
  key: string;
  label: string;
  type: 'number' | 'text' | 'textarea' | 'select' | 'color' | 'date' | 'time';
  defaultValue?: string | number;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  rows?: number;
  options?: { value: string; label: string }[];
};

export type SimpleResult = {
  label: string;
  value: string | number;
  unit?: string;
  color?: string;
  multiline?: boolean;
};

export type SimpleValues = Record<string, string | number>;
export type MaybePromise<T> = T | Promise<T>;

export type SimpleToolSpec = {
  id: string;
  intro: string;
  fields: SimpleField[];
  execute: (values: SimpleValues) => MaybePromise<SimpleResult[]>;
};
