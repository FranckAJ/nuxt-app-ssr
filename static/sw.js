importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2d54939ca9b14236b8ef.js",
    "revision": "98a1f47b72e2407c9aa66b8904ecbf0f"
  },
  {
    "url": "/_nuxt/4e4833f821dba753bdff.js",
    "revision": "0f24ab5cb7ccb727bb799306aba267e5"
  },
  {
    "url": "/_nuxt/5ae1b879edf5ac0ea1ff.js",
    "revision": "ec332ae2174641bbfc981a23455ce9e9"
  },
  {
    "url": "/_nuxt/64a56a0ba3aa8c54ca2f.js",
    "revision": "73a1d6545648b2a3daab4e367abe94a3"
  },
  {
    "url": "/_nuxt/8590b33edb65f2409977.js",
    "revision": "8e6f98e00e436d980a38688ad3f41087"
  },
  {
    "url": "/_nuxt/caecf9857e1d7d28c364.js",
    "revision": "dfa946dd53110a0ca9a622a7ac9c7825"
  }
], {
  "cacheId": "nuxt-app-ssr",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





