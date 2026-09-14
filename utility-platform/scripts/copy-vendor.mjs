import { mkdir, copyFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const src = resolve('node_modules/@ffmpeg/core/dist/esm');
const dst = resolve('public/vendor/ffmpeg');

await mkdir(dst, { recursive: true });

const input = resolve(src, 'ffmpeg-core.js');
await access(input);
await copyFile(input, resolve(dst, 'ffmpeg-core.js'));

console.log('Copied self-hosted FFmpeg JavaScript loader.');
