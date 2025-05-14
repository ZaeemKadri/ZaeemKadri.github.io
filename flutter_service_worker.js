'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7d05820fa92d202d3a3faf8ae7409496",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "7d50debe6f4d678f31f505c53329f067",
"/": "7d50debe6f4d678f31f505c53329f067",
"main.dart.js": "ad596de58c21fe11ce35cddc0e9ef9c7",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "617c2ab702b6a48ceb5084cee78ae7a0",
"assets/NOTICES": "1af3734bf0c1114c01567cba92b6374e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "feb85c281ee3f7d44e2f8316114f5f59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fb6cb4ceff0e50c69a6f22b8c9a7c14a",
"assets/fonts/MaterialIcons-Regular.otf": "4faf7557cb7f47ee8f4d40a5b81cb878",
"assets/assets/images/flutter_logo.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/images/screenshots/home_automation/fan_history.jpg": "150081389ff65dc690bc696542ce7767",
"assets/assets/images/screenshots/home_automation/light_control.jpg": "18d54396ec56468b35c5bf15c8eee58c",
"assets/assets/images/screenshots/home_automation/login.jpg": "21d920a847ba0fe4c1a5b4c5d25823d9",
"assets/assets/images/screenshots/home_automation/fire_history.jpg": "a14870cdf23c73902a0c9171659eb51c",
"assets/assets/images/screenshots/home_automation/home_page.jpg": "9ca42520aecd1208c81cc3e3a67490da",
"assets/assets/images/screenshots/home_automation/signup.jpg": "363f2168a0c6cb0df6b64f86392f5e02",
"assets/assets/images/screenshots/home_automation/pir_history.jpg": "e5e5f1a071a0666571d548e649576fd2",
"assets/assets/images/screenshots/home_automation/fan_control.jpg": "1a6e9610fe9ad376c1d56a6337f70af7",
"assets/assets/images/screenshots/home_automation/light_history.jpg": "a29d346ed10cffd9912dabf24eab9c26",
"assets/assets/images/screenshots/home_automation/smoke_history.jpg": "35ed723e1fef6034e4dd7e019b114cfe",
"assets/assets/images/screenshots/home_automation/sensor_control.jpg": "af5b073e19af3787f7bea5ed0f84057a",
"assets/assets/images/screenshots/educom/login.jpg": "e723b0a45d02720f36599d5d1b1c84a9",
"assets/assets/images/screenshots/educom/register.jpg": "164d350133d1b1d5f6431efa5abb38bf",
"assets/assets/images/screenshots/educom/chat_page.jpg": "f0c67c15b5d2192a189739838e72c059",
"assets/assets/images/screenshots/educom/home_page.jpg": "165b6f521b0601797592bfc0d436c096",
"assets/assets/images/screenshots/educom/signup.jpg": "76461512773f471d186e89d83d5648a1",
"assets/assets/images/screenshots/educom/chat_section.jpg": "bb03d7dd26fb54892a65be546c99b398",
"assets/assets/images/screenshots/educom/profile_page_more.jpg": "f5da645b4a9b0daa172531888a477f61",
"assets/assets/images/screenshots/educom/profile_page.jpg": "6f9ac5f5397c3ad2c1f4e9984fd627c0",
"assets/assets/images/screenshots/peakfit/weight_selection.jpg": "d97a27efc84c1c543472ecf01054cd93",
"assets/assets/images/screenshots/peakfit/login.jpg": "9fb1f05d3abb2cb7b47bacca26ebb75b",
"assets/assets/images/screenshots/peakfit/level_selection.jpg": "9003cd0c96d9fcc921b1f945a5f02755",
"assets/assets/images/screenshots/peakfit/food_category.jpg": "86df193f0f36d436b23bc0a6d55c4438",
"assets/assets/images/screenshots/peakfit/workout_page.jpg": "fcca8435f6ec7462b1e0d12c21caf8e9",
"assets/assets/images/screenshots/peakfit/diet_page.jpg": "60c78121e2a681b67181e836a17e3d7d",
"assets/assets/images/screenshots/peakfit/gender_selection.jpg": "d905d9dca0b09d9eb5c75d75c89a7f5b",
"assets/assets/images/screenshots/peakfit/diet_history.jpg": "04b040704f1ddd6c7c86a8d9d66d8771",
"assets/assets/images/screenshots/peakfit/age_selection.jpg": "4e477e8357281cd526034e3fd430ac12",
"assets/assets/images/screenshots/peakfit/goal_selection.jpg": "81755e12f7bd6e4d6a9d3d5399350ee9",
"assets/assets/images/screenshots/peakfit/workout_history.jpg": "f53eed8bc2effb71b680929b06b07c37",
"assets/assets/images/screenshots/peakfit/home_page.jpg": "488c5db81a3db33e4b0da9b6bca09024",
"assets/assets/images/screenshots/peakfit/signup.jpg": "2ae3c0a2d085f2ac26f209d2ccf5933c",
"assets/assets/images/screenshots/peakfit/profile.jpg": "0689a2b37bae97fa50a5948e652def4b",
"assets/assets/images/home_model_3.jpeg": "d0356152b65bb045dc8984b623224212",
"assets/assets/images/profile_photo.png": "b782aa8e356a31a29db4229fc5b9c5be",
"assets/assets/images/educom_icon.png": "2f77ff6932797d5f268c7025bb244b79",
"assets/assets/images/home_automation_icon.png": "7278e5e6add9f731fbb1f36f7271198f",
"assets/assets/images/home_model_2.jpeg": "9745f20b6bf20be880ba410ae8518ea6",
"assets/assets/images/photo.png": "3b2c4c255e79dfd47b2a989c5e31fae6",
"assets/assets/images/home_model_1.jpeg": "a0d301cdf2fe20316e03b020d06ab0f7",
"assets/assets/images/peakfit_icon.png": "4494017b2a2fd39c3d049cd391567a62",
"assets/assets/images/firebase_logo.png": "a0460b95a432081ebb4979800f2cc53e",
"assets/assets/images/android_logo.png": "4973e9978711220c4d7085867ca5ef49",
"assets/assets/images/mysql_logo.png": "a331387718d805c9720d3730d4e895c2",
"assets/assets/cv.pdf": "11c172cabd62c5d036b342eb685f36ea",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
