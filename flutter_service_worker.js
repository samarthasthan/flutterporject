'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f700e85c822d361621674681ea57ab79",
"index.html": "385868062cef58cc2fc89699683a8757",
"/": "385868062cef58cc2fc89699683a8757",
"main.dart.js": "1248f9883739cce2983888566bbe7f96",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "735e686f6f2cd5b4e2f97490b34b79c0",
"assets/AssetManifest.json": "282d9a6c3d70602764fd6d1168c2b8f8",
"assets/NOTICES": "e52af027712875096f4676ddb888601d",
"assets/FontManifest.json": "1cddfef2c3e51d95b7c3b93ece9bf648",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "7569dd6058436fc49a850c8c003e0204",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/icons/Weather.svg": "a62c6b48a78134df02f457312e535c1c",
"assets/assets/icons/search.svg": "9507f36f2c27b9a2e0318bbb11c7879c",
"assets/assets/icons/Notes.svg": "0134bbf018f273f8b1a4173dcaa379a5",
"assets/assets/icons/App%2520Store.svg": "6b9bcab50eed92ebe35909f42a196c64",
"assets/assets/icons/Home.svg": "56185ab1729c5b5404528557f5dc5979",
"assets/assets/icons/Apple%2520Music.svg": "c4601f8d9a156f233a7add6585b0d1e1",
"assets/assets/icons/signal.svg": "c09c1a58d37e75e2471a83fc97e70f60",
"assets/assets/icons/Files.svg": "8218177e70c7603ceb89982209a8fb0c",
"assets/assets/icons/Apple%2520Health.svg": "854c2add93d45c3069cd1028a1ea5e97",
"assets/assets/icons/Apple%2520Maps.svg": "3d771602ecd6273aa9618c6a7461da67",
"assets/assets/icons/Apple%2520tv.svg": "f3d8096f1481c69ddde1c31992066c29",
"assets/assets/icons/Apple%2520Store.svg": "54dda7811c6427d95712b1addea3b120",
"assets/assets/icons/safari.svg": "8b8944272d79e19b11e704f418c0e685",
"assets/assets/icons/settings.svg": "707652b819c051138aee7d7adf1a0bc4",
"assets/assets/icons/Mail.svg": "5504b40b82887839cb7f0a82f5c91a6b",
"assets/assets/icons/Wallet.svg": "9e7c23adddf20c083506fee973fd963d",
"assets/assets/icons/battery.svg": "2c31c71952727a632a3e618da39b7a3a",
"assets/assets/icons/TestFlight.svg": "1a2857c104aae33a0b45e0a5ef33998a",
"assets/assets/icons/Apple%2520News-1.svg": "f3f6ab43d99c3017c9dd8c7fb6cd9d0c",
"assets/assets/icons/Watch%2520Settings.svg": "15dcef19d77a5c601765d65f31858fda",
"assets/assets/icons/wifi.svg": "821e1879b05b13a67368e096686f3141",
"assets/assets/icons/GarageBand.svg": "8c133e8cd5a5b643ea803af0db6b6f1b",
"assets/assets/icons/message.svg": "63f50ddd27329f016887968cfa70a1e1",
"assets/assets/icons/Photos.svg": "f2fc80d1182a9416a1572f093e28d557",
"assets/assets/icons/Camera.svg": "1aa1824f69b191a076dd54bc9c363ac0",
"assets/assets/icons/Facetime.svg": "adeb7d9ccae518d96d90907c2ecaa116",
"assets/assets/icons/Free%2520Form.svg": "3e5b324ee492dc0997040c4a8e554f74",
"assets/assets/icons/Find%2520My.svg": "58a3794db3da1619dac5a67ea9e67c8c",
"assets/assets/icons/Measure.svg": "9afde4ed23b309533025489f001b401d",
"assets/assets/icons/Apple%2520Reminders.svg": "4d0fae273f6429d05ca41874805fea8d",
"assets/assets/icons/Apple%2520TV%2520Remote.svg": "e129d3e857a832895acc5f49fb05d9bd",
"assets/assets/icons/Compass.svg": "12163caa2879c2772612d2c3f5525d87",
"assets/assets/icons/Clock.svg": "ed8a4f09ee6a250df18166fd9a399ba1",
"assets/assets/icons/Apple%2520News.svg": "356382b9c2f26b2dd2f60f747925eca2",
"assets/assets/icons/phone.svg": "a60903cda35d7f3314daba5c55299c2a",
"assets/assets/icons/Calendar.svg": "c25235e5981e1ff7ecb96966d5c06b23",
"assets/assets/icons/BatteryWidget.svg": "75959f2f17025e7e8905dffc359231d1",
"assets/assets/icons/Calculator.svg": "b070b42f0f33403ab1f6e37bfbc3a7d7",
"assets/assets/wallpaper/ios16wallpaper.webp": "a8694349a054f52469802db6872cd31f",
"assets/assets/fonts/SF-Pro-Text-Heavy.otf": "d7829d9b3a4514b125d758dcace0613b",
"assets/assets/fonts/SF-Pro-Text-MediumItalic.otf": "9f5c9e1ad763571b8513bb88cd4fa23b",
"assets/assets/fonts/SF-Pro-Text-Light.otf": "71d6e2c38c8d3dd6697bb8f2e4a5efb7",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "404e4373cba1344d28a4a257152ac8b8",
"assets/assets/fonts/SF-Pro-Text-Bold.otf": "5b6c7cdfe0acd0fcc93cef7984a08740",
"assets/assets/fonts/SF-Pro-Text-BoldItalic.otf": "102ced08dfce419a4ab92ff8b16fdd06",
"assets/assets/fonts/SF-Pro-Text-RegularItalic.otf": "c30efa09d13ab6fe2ac0d9c86ff1c48e",
"assets/assets/fonts/SF-Pro-Text-Semibold.otf": "8f079b59ff6659b39b41bc2255c968b8",
"assets/assets/fonts/SF-Pro-Text-HeavyItalic.otf": "a7106fbac3d0666ffd315d15b783e8d6",
"assets/assets/fonts/SF-Pro-Text-LightItalic.otf": "0173d338d5959e61a2393e0feef438ed",
"assets/assets/fonts/SF-Pro-Text-Medium.otf": "9491854a8b6ec3a0c915668083f18fde",
"assets/assets/fonts/SF-Pro-Text-SemiboldItalic.otf": "b006a42590a5809de6231aa535fabea1",
"assets/apple.svg": "c0ab9806f89b13b542a1438b1226ef9d",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
