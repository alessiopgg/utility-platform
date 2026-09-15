import { searchIndex } from '../core/search.ts';
export const prerender = true;
export function GET(){ return new Response(JSON.stringify(searchIndex('en')),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=3600'}}); }
