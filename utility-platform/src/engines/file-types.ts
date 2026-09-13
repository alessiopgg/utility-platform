import type { SimpleField, SimpleResult } from './simple-types.ts';
export type FileInputField = { key:string; label:string; type:'file'; accept?:string; multiple?:boolean; required?:boolean };
export type FileToolField = SimpleField | FileInputField;
export type FileToolValues = Record<string, string | number | File | File[]>;
export type FileOutput = { kind:'file'; label:string; blob:Blob; filename:string; preview?:boolean };
export type TextOutput = SimpleResult & { kind?:'text' };
export type FileToolResult = FileOutput | TextOutput;
export type FileToolSpec = { id:string; intro:string; fields:FileToolField[]; execute:(values:FileToolValues)=>Promise<FileToolResult[]>|FileToolResult[] };
