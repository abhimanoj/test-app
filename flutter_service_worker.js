'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "33937214e72693416191e9d534f0bfff",
"/": "33937214e72693416191e9d534f0bfff",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "774d73044d5d16c254eec4cd2206769f",
".git/COMMIT_EDITMSG": "9f2817402054ff46679d11f6bcbeea08",
".git/refs/heads/master": "92e8068fa0cceed3e573997733611c4e",
".git/refs/remotes/origin/master": "92e8068fa0cceed3e573997733611c4e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/heads/master": "f7f7aa525a0b2ea326842bdd71de8ef6",
".git/logs/refs/remotes/origin/master": "b9f280019dc3e50c24e42e8fa1dc3448",
".git/logs/HEAD": "f7f7aa525a0b2ea326842bdd71de8ef6",
".git/index": "e3ec5012cc184441f24b9511065421c1",
".git/config": "d96371f748ed859a49ab3b89686c5926",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/objects/37/11ad30feda759dd17ddf82eac6f0ac011c63e1": "b2ef9e4ad74aed37e464385fb3ea1d16",
".git/objects/b2/a4af70a2594fd7a1d526ff11e5584772d7b906": "dd9a4b70171e00c7481b73720f282b85",
".git/objects/38/c6fffb0227d5102b3717f0b0903814aa0297ce": "1eb9f4750132b643c1605be737bb9543",
".git/objects/d4/7de875466797ca425bad5cd0f35b70948cc6b4": "ffe74d6331494b9a8eb8f29c583fa345",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/ed/e003621dad618347cdfd5763f34677c315e90f": "5f3ed92797a923e29a504c4b113fbb27",
".git/objects/9d/f5e0a08692e03ca1631f86b12f5ed71124d851": "f72146b12d71292836dfac20fb63703c",
".git/objects/27/743f9ca523b5c2be24f4771f8c4cf985eb14eb": "d5a95749f9aa5cd92105f6bcfead6a42",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/2e/5d54d50fe116fdc7972a560a919de520568cbd": "7fba99134bc6ad58b7dd036208062338",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/be/69a7463a191ec3572a39e618cb78bcc01ff1a8": "69c0e3312f28d27ba5499fc4abf4651d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/97/c6289ee71a9db1d350fc23818bee3c83182205": "3b8dea8fe71bf4ad88345e4f82549485",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/36/d1575991d498a6775074008bad4866df290e0c": "e52791c6c5e297e687597103fba43920",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/f2/fd01e7ad4d8599382a1f67a7effd9e3ff06e88": "f1fd1b6491d097e620bf5ad0e96a58bd",
".git/objects/6a/5405f41a0f1fea4b5dc6c6fe65e140fc0d2d4e": "607072c41b8dafe2312326e42be284fe",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b1/e9bba9797a0adcd57a1563a82ff79740c64fc7": "c8c5990bd5ce1539414ffefe23565d31",
".git/objects/30/04bcdd6534a5876aca16d48c7b16778c8b353d": "da80fe9bdc00753837b2a67f0b5b055e",
".git/objects/15/6ac051b9d1e8870cb36eac34df243f22ef0ce1": "92a1f2ecfa2b177874b4bc7a6e9c2592",
".git/objects/15/af8d6fadead161293c1f796dee669a923c775d": "6aa287cd66a9cd3add38d1e29586edb4",
".git/objects/18/3a817ed307bd1f5eab9c24feb63530c71ac926": "2245d6c6f87c662448a384173df07244",
".git/objects/87/c5fb58ab8663576aebef51b937f16d5d681465": "17d18249d4bfdb6c51fe33bb732e23e1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/9b/ee7fac407ebe481b35283472524143e6f9cac9": "edd2b7e8ca16886636df862757277216",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/21/e66e8a5ac30db72dc444f04905e8f93f8e1742": "4c8322b8a7f2d363418729594e0fd434",
".git/objects/62/3380b7cff6dfba1d782c5b0377b64c916af1fe": "a74882f12298277442fc29805b884fc2",
".git/objects/c0/361ac7f27dd27e4ba918e353930125969ea601": "e4a8b00292e724558c076a7b08cce75a",
".git/objects/c0/c5516e3efc8a65be19fb789630f5863273151f": "5eb3c964d9bb2bffaad470c932ad4e43",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ad/74349ae01def7caae2ed0f377eb1ce83ec7ede": "086f2ae6a846cf2a306ef412f59c2403",
".git/objects/5b/d5c9c12eb6de29927d26e03f458d4ede1af1a4": "e34e71e878635131a941733bde2c505d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"version.json": "a8ad56b7eb433e8ad34141f718df17a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/shared/assets/app_icon.png": "f7c2160eafa7ea934d8e62ff499e5ed5",
"assets/packages/shared/assets/auth_background.png": "7698953b35c18fc9ecb9580b67332597",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "293130157c75eed869a41f5e53c1b313",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/images/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/assets/images/facebook.png": "6566372d93719e350d4a6114fb4fa03f",
"assets/assets/images/zil_logo1.png": "4c5e10e8f2b1e8d35dc31aaf5fc9b09b",
"assets/assets/images/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/images/google.png": "dc783842a31aa50a0cf06196a8019cc5",
"assets/assets/images/zil_logo.png": "797c72b92548f532dc9c0184da8e40a6",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "d99b248e18089a8364c6402fbd036877",
"assets/NOTICES": "a48a44137ca59936a2d2a1168c8de202",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "3d03ace45c95a7e9e14a69029aec9a3d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
