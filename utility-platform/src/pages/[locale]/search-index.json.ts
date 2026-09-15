import { locales } from '../../i18n/config.ts';
import type { LocaleId } from '../../core/types.ts';
import { searchIndex } from '../../core/search.ts';
export const prerender = true;
export function getStaticPaths(){return locales.filter((locale)=>locale!=='en').map((locale)=>({params:{locale},props:{locale}}));}
export function GET({props}:{props:{locale:LocaleId}}){return new Response(JSON.stringify(searchIndex(props.locale)),{headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'public, max-age=3600'}});}
