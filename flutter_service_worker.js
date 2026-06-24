'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6945498c2230cdbeb695552a7a556c6e",
"assets/AssetManifest.bin.json": "5c1dfd0d7d93d91012c2ba1708325ce5",
"assets/AssetManifest.json": "bba526ece737323a2e4feafaedefadad",
"assets/assets/images/android_logo.png": "4973e9978711220c4d7085867ca5ef49",
"assets/assets/images/approveRx_logo_new.png": "8a77641b1b2317aa7d04128eefd3884d",
"assets/assets/images/arham_oms_logo.png": "e53145e8575c423634357731ed47315f",
"assets/assets/images/educom_icon.png": "2f77ff6932797d5f268c7025bb244b79",
"assets/assets/images/facebook_logo.png": "e5d272e6bba0e3177f655e5da4aa6222",
"assets/assets/images/firebase_logo.png": "a0460b95a432081ebb4979800f2cc53e",
"assets/assets/images/flutter_logo.png": "e02a6c427d3f2f6128219c4916cc4c6f",
"assets/assets/images/hfg_icon.png": "b7336d325175761b86ef16d38223e9bf",
"assets/assets/images/home_automation_icon.png": "7278e5e6add9f731fbb1f36f7271198f",
"assets/assets/images/home_model_1.jpeg": "a0d301cdf2fe20316e03b020d06ab0f7",
"assets/assets/images/home_model_2.jpeg": "9745f20b6bf20be880ba410ae8518ea6",
"assets/assets/images/home_model_3.jpeg": "d0356152b65bb045dc8984b623224212",
"assets/assets/images/insta_logo.png": "a5003131b742b9812c27d231bf3afd0a",
"assets/assets/images/linkedin_logo.png": "838099001aa3f82ae29f5784826fa335",
"assets/assets/images/mysql_logo.png": "a331387718d805c9720d3730d4e895c2",
"assets/assets/images/peakfit_icon.png": "4494017b2a2fd39c3d049cd391567a62",
"assets/assets/images/photo.png": "3b2c4c255e79dfd47b2a989c5e31fae6",
"assets/assets/images/profile_photo.png": "7b09350ae7b5060185a301d7277bbfd3",
"assets/assets/images/screenshots/educom/chat_page.jpg": "f0c67c15b5d2192a189739838e72c059",
"assets/assets/images/screenshots/educom/chat_section.jpg": "bb03d7dd26fb54892a65be546c99b398",
"assets/assets/images/screenshots/educom/home_page.jpg": "165b6f521b0601797592bfc0d436c096",
"assets/assets/images/screenshots/educom/login.jpg": "e723b0a45d02720f36599d5d1b1c84a9",
"assets/assets/images/screenshots/educom/profile_page.jpg": "6f9ac5f5397c3ad2c1f4e9984fd627c0",
"assets/assets/images/screenshots/educom/profile_page_more.jpg": "f5da645b4a9b0daa172531888a477f61",
"assets/assets/images/screenshots/educom/register.jpg": "164d350133d1b1d5f6431efa5abb38bf",
"assets/assets/images/screenshots/educom/signup.jpg": "76461512773f471d186e89d83d5648a1",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_1.jpg": "24f29254d5dda95768dd15334d125d8c",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_10.jpg": "6da69656431c1d4dc9a22629e27692c6",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_11.jpg": "a665f9b9b108e3847478f81037929caa",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_12.jpg": "f10bb2502432c8bbee6ab78460cb28e1",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_13.jpg": "2a8c1fc5909e853223ffebe9ae23c5b7",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_14.jpg": "6f950e4a26c4e2e7192919d31f59fb64",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_15.jpg": "333b87e9b44139a244d9599d91f1ad5f",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_16.jpg": "61342ce89eaba176dcd07533a8d49401",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_17.jpg": "5ac56a0d492cbf8bb4866a74eeb546ad",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_2.jpg": "838899a2828030bb403236524da57385",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_3.jpg": "3623cc29430c75acccf8caef29ec9681",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_4.jpg": "74bfa854497f452515ee13a94bb9df24",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_5.jpg": "e35dc6ae63107a58c75258e2f76004b1",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_6.jpg": "e39175695fb7309a412c1acd71f4bd7a",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_7.jpg": "980435f45520e3b149c0120e1ac74d6e",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_8.jpg": "8c5d0becb4c561b07ad55c2c327f521f",
"assets/assets/images/screenshots/hash_for_gamers/hfg_img_9.jpg": "fb4b1e29f673656dad9311c7617a7059",
"assets/assets/images/screenshots/home_automation/fan_control.jpg": "1a6e9610fe9ad376c1d56a6337f70af7",
"assets/assets/images/screenshots/home_automation/fan_history.jpg": "150081389ff65dc690bc696542ce7767",
"assets/assets/images/screenshots/home_automation/fire_history.jpg": "a14870cdf23c73902a0c9171659eb51c",
"assets/assets/images/screenshots/home_automation/home_page.jpg": "9ca42520aecd1208c81cc3e3a67490da",
"assets/assets/images/screenshots/home_automation/light_control.jpg": "18d54396ec56468b35c5bf15c8eee58c",
"assets/assets/images/screenshots/home_automation/light_history.jpg": "a29d346ed10cffd9912dabf24eab9c26",
"assets/assets/images/screenshots/home_automation/login.jpg": "21d920a847ba0fe4c1a5b4c5d25823d9",
"assets/assets/images/screenshots/home_automation/pir_history.jpg": "e5e5f1a071a0666571d548e649576fd2",
"assets/assets/images/screenshots/home_automation/sensor_control.jpg": "af5b073e19af3787f7bea5ed0f84057a",
"assets/assets/images/screenshots/home_automation/signup.jpg": "363f2168a0c6cb0df6b64f86392f5e02",
"assets/assets/images/screenshots/home_automation/smoke_history.jpg": "35ed723e1fef6034e4dd7e019b114cfe",
"assets/assets/images/screenshots/peakfit/age_selection.jpg": "4e477e8357281cd526034e3fd430ac12",
"assets/assets/images/screenshots/peakfit/diet_history.jpg": "04b040704f1ddd6c7c86a8d9d66d8771",
"assets/assets/images/screenshots/peakfit/diet_page.jpg": "60c78121e2a681b67181e836a17e3d7d",
"assets/assets/images/screenshots/peakfit/food_category.jpg": "86df193f0f36d436b23bc0a6d55c4438",
"assets/assets/images/screenshots/peakfit/gender_selection.jpg": "d905d9dca0b09d9eb5c75d75c89a7f5b",
"assets/assets/images/screenshots/peakfit/goal_selection.jpg": "81755e12f7bd6e4d6a9d3d5399350ee9",
"assets/assets/images/screenshots/peakfit/home_page.jpg": "488c5db81a3db33e4b0da9b6bca09024",
"assets/assets/images/screenshots/peakfit/level_selection.jpg": "9003cd0c96d9fcc921b1f945a5f02755",
"assets/assets/images/screenshots/peakfit/login.jpg": "9fb1f05d3abb2cb7b47bacca26ebb75b",
"assets/assets/images/screenshots/peakfit/profile.jpg": "0689a2b37bae97fa50a5948e652def4b",
"assets/assets/images/screenshots/peakfit/signup.jpg": "2ae3c0a2d085f2ac26f209d2ccf5933c",
"assets/assets/images/screenshots/peakfit/weight_selection.jpg": "d97a27efc84c1c543472ecf01054cd93",
"assets/assets/images/screenshots/peakfit/workout_history.jpg": "f53eed8bc2effb71b680929b06b07c37",
"assets/assets/images/screenshots/peakfit/workout_page.jpg": "fcca8435f6ec7462b1e0d12c21caf8e9",
"assets/assets/images/screenshots/unani_quiz_app/home_screen.jpg": "2b2a2b29b4cd72fd3cf4b4a38574da09",
"assets/assets/images/screenshots/unani_quiz_app/leaderboard_screen.jpg": "718b0c60edc7c39b859e59ce4746a9e4",
"assets/assets/images/screenshots/unani_quiz_app/login_screen.jpg": "4b8b91a8a79b8048c68cc26b71bb2c3a",
"assets/assets/images/screenshots/unani_quiz_app/profile_screen.jpg": "29249539936f3963415d3c50a2aa69ee",
"assets/assets/images/screenshots/unani_quiz_app/quiz_screen.jpg": "09db2de0b5e284106d7237f9ea503058",
"assets/assets/images/screenshots/unani_quiz_app/register_screen.jpg": "40ce6d96913489873c705242f70a0560",
"assets/assets/images/screenshots/unani_quiz_app/select_mode.jpg": "198fc4045cf5395e427714f52217ef4c",
"assets/assets/images/unani_icon.png": "4a51606fbf49eb7d3f21b6bd998a76a7",
"assets/assets/images/x_logo.png": "3e7d48146c96fec3fd16e86028023173",
"assets/assets/zaeem_kadri_resume.pdf": "f10cf90558046e7875acc10e7b033557",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3ccdecdf8f6311040a2fdb06abfa0e6a",
"assets/NOTICES": "0c9deaf186e3b65591e21cde4098330e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ad2cf0027abe2c7774bd495f35089577",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "07cbe02e788407f1290063991e44accf",
"/": "07cbe02e788407f1290063991e44accf",
"logo.png": "8c29f7ef09ec664ddc20fa50ddbee11b",
"main.dart.js": "b748389cd4a97b5cfde12f18718229da",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
