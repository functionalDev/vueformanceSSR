# vueformance

> server for SSR

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
# service worker is disabled in dev
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## TODOs

### frontend
- Vue
``` bash
# Install CLI globally
$ npm install vue -g
```
- Vuex
``` bash
# Included in nuxtjs
```
- Nuxt
``` bash
$ vue init nuxt/pwa <projectName>
```
  - Nuxt SSR on firebase + babel
  https://www.youtube.com/watch?v=ZYUWsjUxxUQ&list=PLl-K7zZEsYLkbvTj8AUUCfBO7DoEHJ-ME&index=9
  - except publicPath: '/' --> '' for workboxSW
- Codesplitting
- Service Worker
   - Cache Offline Mode
      - static files
      ``` js
      # already included in nuxt/pwa
      ```
      - backend data
      ``` js
      # TODO configure workbox
      ```
   - (Push) Notification
   ``` js
   # already included in nuxt/pwa (TODO  activate)
   # module: OneSignal
   ```
   - Background Sync
   - Pre-Fetching resources
- Tracking
- Extract stuff into Webworkers
- Observables?
   - ReactiveX?
   - Firebase like?
- Apollo client


## Design
- Material Design
- Parallaxing
