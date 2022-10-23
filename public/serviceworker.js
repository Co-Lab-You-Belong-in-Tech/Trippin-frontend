const TRIPIN_CACHE_NAME = 'trippin-cache-version-0.1'
const trippinUrlsToChache = ['index.html', 'offline.html'];

const me = this;

//Install SW

me.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(TRIPIN_CACHE_NAME)
        .then((cache) => {
            console.log('Cache Opened');

            return cache.addAll(trippinUrlsToChache);
        })
    )
});

// Listen for requests

me.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(() => {
                return fetch(e.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the sw

me.addEventListener('activate', (e) => {
    const trippinCacheWhitelist = [];
    trippinCacheWhitelist.push(TRIPIN_CACHE_NAME);

    e.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!trippinCacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});