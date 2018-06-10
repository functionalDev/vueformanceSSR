importScripts('/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "vueformance",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([])


workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

