// This is the "Offline page" service worker

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", async (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const preloadResp = await event.preloadResponse;

          if (preloadResp) {
            return preloadResp;
          }

          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          const cache = await caches.open(CACHE);
          const cachedResp = await cache.match(offlineFallbackPage);
          return cachedResp;
        }
      })()
    );
  }
});

// This is the "Offline page" service worker

// importScripts(
//   "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
// );

// const CACHE_NAME = "pwabuilder-cache-v1";
// const OFFLINE_PAGE = "/offline.html"; // Ensure this file exists in your public folder

// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting();
//   }
// });

// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log("[Service Worker] Caching offline page:", OFFLINE_PAGE);
//       return cache.addAll([OFFLINE_PAGE]);
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   console.log("[Service Worker] Activated");
//   event.waitUntil(self.clients.claim());
// });

// // Enable navigation preload if supported
// if (workbox.navigationPreload.isSupported()) {
//   workbox.navigationPreload.enable();
// }

// self.addEventListener("fetch", (event) => {
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       (async () => {
//         try {
//           const preloadResponse = await event.preloadResponse;
//           if (preloadResponse) {
//             return preloadResponse;
//           }

//           const networkResponse = await fetch(event.request);
//           return networkResponse;
//         } catch (error) {
//           console.error(
//             "[Service Worker] Fetch failed; serving offline page:",
//             error
//           );
//           const cache = await caches.open(CACHE_NAME);
//           const cachedResponse = await cache.match(OFFLINE_PAGE);
//           return cachedResponse;
//         }
//       })()
//     );
//   }
// });
