/* Dữ liệu và tài nguyên nằm cùng origin; không lưu câu trả lời hay gọi máy chủ ngoài. */
importScripts('./precache-manifest.js');
const BASE = new URL('./', self.location.href);
const PREFIX = `hoi-ban:${BASE.href}:`;
const CACHE = PREFIX + self.APP_VERSION;
const ASSETS = self.APP_ASSETS.map(file => new URL(file, BASE).href);
const KNOWN = new Set(ASSETS);
const INDEX = new URL('index.html', BASE).href;

self.addEventListener('install', event => {
  // addAll thất bại sẽ không kích hoạt bản thiếu dữ liệu; bản đang chạy vẫn giữ nguyên.
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS.map(url => new Request(url, { cache: 'reload' })))));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'ACTIVATE_UPDATE') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== BASE.origin || !url.pathname.startsWith(BASE.pathname)) return;
  const navigation = request.mode === 'navigate';
  url.search = '';
  url.hash = '';
  if (!navigation && !KNOWN.has(url.href)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const response = await cache.match(navigation ? INDEX : url.href);
    return response || fetch(request);
  })());
});
