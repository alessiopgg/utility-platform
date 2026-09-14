export async function onRequestGet(context) {
  const object = await context.env.UTILITY_ASSETS.get('ffmpeg-core.wasm');

  if (!object) {
    return new Response('Not found', { status: 404 });
  }

  const headers = new Headers();
  headers.set('Content-Type', 'application/wasm');
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  return new Response(object.body, { headers });
}
