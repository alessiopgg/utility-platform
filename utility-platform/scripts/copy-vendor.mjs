import { mkdir, copyFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
const src=resolve('node_modules/@ffmpeg/core/dist/esm');
const dst=resolve('public/vendor/ffmpeg');
await mkdir(dst,{recursive:true});
for(const name of ['ffmpeg-core.js','ffmpeg-core.wasm']){
  const input=resolve(src,name); await access(input); await copyFile(input,resolve(dst,name));
}
console.log('Copied self-hosted ffmpeg.wasm core assets.');
