declare module 'yaml' { export function parse(input:string): unknown; export function stringify(input:unknown): string; export function parseDocument(input:string): { errors: unknown[] }; }
declare module 'prettier/standalone' { export function format(input:string, options:Record<string,unknown>): Promise<string>; }
declare module 'prettier/plugins/babel';
declare module 'prettier/plugins/estree';
declare module 'prettier/plugins/html';
declare module 'prettier/plugins/postcss';
declare module 'prettier/plugins/markdown';
declare module 'marked' { export const marked: { parse(input:string): string | Promise<string> }; }
declare module 'turndown' { export default class TurndownService { turndown(input:string): string; } }
declare module 'cronstrue' { const cronstrue: { toString(input:string, options?:Record<string,unknown>): string }; export default cronstrue; }
declare module 'sql-formatter' { export function format(input:string, options?:Record<string,unknown>): string; }
declare module 'heic2any' { export default function heic2any(options:{blob:Blob;toType?:string;quality?:number}): Promise<Blob|Blob[]>; }
declare module 'exifreader' { const ExifReader: { load(input:Blob|ArrayBuffer, options?:Record<string,unknown>): Promise<Record<string, any>> | Record<string, any> }; export default ExifReader; }
declare module 'piexifjs' { const piexif: any; export default piexif; }
declare module 'qrcode' { const QRCode:any; export default QRCode; export const toDataURL:any; export const toCanvas:any; }
declare module 'jsbarcode' { const JsBarcode:any; export default JsBarcode; }
declare module '@zxing/browser' { export const BrowserQRCodeReader:any; export const BrowserMultiFormatReader:any; }
declare module '@cantoo/pdf-lib' { export const PDFDocument:any; export const degrees:any; export const rgb:any; export const StandardFonts:any; }
declare module 'pdfjs-dist' { export const getDocument:any; export const GlobalWorkerOptions:any; }
declare module 'pdfjs-dist/build/pdf.worker.min.mjs?url' { const url:string; export default url; }
declare module '@ffmpeg/ffmpeg' { export class FFmpeg { loaded:boolean; load(config?:any):Promise<boolean>; writeFile(path:string,data:Uint8Array|string):Promise<void>; readFile(path:string):Promise<Uint8Array|string>; deleteFile(path:string):Promise<void>; exec(args:string[],timeout?:number):Promise<number>; on(event:string,cb:(event:any)=>void):void; } }

interface ImportMetaEnv {
  readonly PUBLIC_SITE_NAME?: string;
  readonly PUBLIC_CONTACT_EMAIL?: string;
  readonly PUBLIC_ADSENSE_CLIENT?: string;
  readonly PUBLIC_ADSENSE_SLOT?: string;
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
