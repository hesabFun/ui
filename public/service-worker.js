let cacheName = 'hesabfun-pwa';
let filesToCache = [
    '/',
    '/index.html',
    '/index.css',
    '/build/bundle.css',
    '/build/main.js',
    '/hesabfun-logo.svg',
    '/images/icons/btn_google_icon.svg',
    '/fonts/Avenir-Regular.woff2',
    '/fonts/MaisonNeue-Bold.woff2',
    '/fonts/MaisonNeue-Medium.woff2',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});