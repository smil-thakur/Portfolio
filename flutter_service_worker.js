'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b57c9c93ddfbca4d3ad61f5bbe622880",
"assets/assets/backgrounds/black.svg": "c0c02731edd27ff0b646e520cc666dc7",
"assets/assets/backgrounds/blackcloud.jpg": "c42479d89748ea34bc21524950b6109c",
"assets/assets/backgrounds/blackred.jpg": "ee4335231438320c5e28dff003f49781",
"assets/assets/backgrounds/blackstrips.jpg": "963c7ddbc9f829ec02250f7a6805224f",
"assets/assets/images/animoji.jpg": "3f2a678509a4d6cbee95e15c230e13a8",
"assets/assets/images/dp.jpeg": "b1cb789392513c4bcea1fac68636380a",
"assets/assets/images/dp.jpg": "0d9306fcbc933e7b4ae2f06aae75e7c3",
"assets/assets/images/shape1.PNG": "da884b54e9b207ae7e4ff6892dfc7914",
"assets/assets/images/tru.png": "9e932b61f88f6a3843f89fe1b1d850a2",
"assets/assets/projects/colorpick.png": "2a15e37f2db20454bb3a69c4bdb1f185",
"assets/assets/projects/cpp.PNG": "5cd0c5e9776b2cca90715019abd00a78",
"assets/assets/projects/daily_news.png": "703b0ac91690ed5e9ceb3187ca113fb5",
"assets/assets/projects/dart.PNG": "043610658f3e459093e42a1a1c5a8e31",
"assets/assets/projects/firebase.PNG": "a54787b24b2eb0e812ba830e2b46bb11",
"assets/assets/projects/flutter.PNG": "a8c1f96b7c073638720baf044310a969",
"assets/assets/projects/github.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/assets/projects/ido.png": "49b54a999b6b2393e01569143f6b625a",
"assets/assets/projects/insta.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/projects/iserve.png": "467e84bda42aa4c367e19cbe97eb160a",
"assets/assets/projects/linkedin.png": "b2597cd80c8da3f8d26d0c1bfb5ed71d",
"assets/assets/projects/open_meet.png": "d12e72b453b922272d2fdae21ed7d8ed",
"assets/assets/projects/pygame.png": "0e1c60328d7a366884328ebd2137405e",
"assets/assets/projects/pygameskill.PNG": "724ae15b75f5d1dec9ebecd52dc1970e",
"assets/assets/projects/ros.PNG": "9f6a582d66a17f0d3a17f2d738932817",
"assets/assets/projects/skirdle.png": "04bd16c9ddc54def389e8ef9bdb1bb5c",
"assets/assets/projects/twitter.png": "f5cb898eb3138ae3ba897f935e092be7",
"assets/assets/projects/unitap.png": "6bf2cc4a56ddba2f02eeb835ccb102b1",
"assets/assets/shapes/block.png": "6f8fa5831d5221895993f378f9b483a2",
"assets/assets/shapes/cube.png": "d07011b64bd1a9a07a26da841debc6fd",
"assets/assets/shapes/hexa.png": "9857fd4b7e656be1a4f6ec12ed5aee49",
"assets/assets/shapes/hexa2.png": "4b362c127ae6218dbd3f188ea0d6934f",
"assets/assets/shapes/hexa3.png": "18a3a1f32f4b8ec56de76900469230fe",
"assets/assets/shapes/hexa4.png": "e4bad89b2f1a5c5b6ad9593f381e4afe",
"assets/assets/shapes/hexablock.png": "40fc1d6d1c8a33bdf2a99a1231dad0fe",
"assets/assets/shapes/hexac.png": "79658852e1d136ab9ffe8bb71bb4dea5",
"assets/assets/shapes/hexas.png": "5a373cc4ff6707fefce7f47861256876",
"assets/assets/shapes/hexazig.png": "6c3011d5070852ec7be7e0273408e64b",
"assets/assets/shapes/square.png": "7b06305164e96965665fb798130086d4",
"assets/assets/shapes/triangle.png": "d2cc43a23415642222a932bab5758107",
"assets/assets/shapes/triangle2.png": "5a35a769bf5da5b770378781c7b59a91",
"assets/assets/shapes/tricir.png": "9e932b61f88f6a3843f89fe1b1d850a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "75bdd86dc0509460c67763e1d3807811",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.jpg": "3f2a678509a4d6cbee95e15c230e13a8",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3bd29caa8dcaa21f517ee89daceaaec",
"/": "b3bd29caa8dcaa21f517ee89daceaaec",
"main.dart.js": "4a95e31d889233eeef0b736e2b60ab95",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"splash.js": "cf245c34bc047fc2cd3434065bc9819f",
"styles.css": "b02154780976c9a99dcbf662b20254fd",
"test.js": "67cde8d8fa3e93a4ba0e940eb1c43f92",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
