var serviceWorkerOption = {
  "assets": [
    "/bundle.js",
    "/1.bundle.js",
    "/favicon.png",
    "/manifest.json",
    "/icons/icon-192x192.png",
    "/icons/icon-256x256.png",
    "/icons/icon-32x32.png",
    "/icons/icon-384x384.png",
    "/icons/icon-512x512.png",
    "/index.html"
  ]
};
        
        !function(n){var a={};function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,n){"use strict";var a="restaurant-catalogue",r={async cachingAppShell(e){const t=await this._openCache();t.addAll(e)},async deleteOldCache(){const e=await caches.keys();e.filter(e=>e!==a).map(e=>caches.delete(e))},async revalidateCache(e){var t=await caches.match(e);return t?(this._fetchRequest(e),t):this._fetchRequest(e)},async _openCache(){return caches.open(a)},async _fetchRequest(e){var t=await fetch(e);return t&&200===t.status&&await this._addCache(e),t},async _addCache(e){const t=await this._openCache();t.add(e)}};t.a=r},function(e,t,a){"use strict";a.r(t),function(e){var t=a(0);const n=e.serviceWorkerOption["assets"];self.addEventListener("install",e=>{e.waitUntil(t.a.cachingAppShell([...n,"./"]))}),self.addEventListener("activate",e=>{e.waitUntil(t.a.deleteOldCache())}),self.addEventListener("fetch",e=>{e.respondWith(t.a.revalidateCache(e.request))})}.call(this,a(2))},function(e,t){var n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]);