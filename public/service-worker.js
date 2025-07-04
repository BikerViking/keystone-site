const CACHE_NAME = 'kn-cache-v3';
const OFFLINE_URL = '/offline.html';
const BASE_ASSETS = [
  '/',
  '/index.html',
  OFFLINE_URL,
  '/logo.PNG',
  '/manifest.json',
  '/checklist.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const assets = [...BASE_ASSETS];
      try {
        const manifestResponse = await fetch('/asset-manifest.json');
        if (manifestResponse.ok) {
          const manifest = await manifestResponse.json();
          Object.values(manifest.files).forEach(path => assets.push(path));
        }
      } catch (e) {
        // Asset manifest may not be available; proceed with base assets only
      }
      await cache.addAll(assets);
    })()
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
        .then((response) => response || caches.match(OFFLINE_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
