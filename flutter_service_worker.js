'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "02b312016114fe04b2710219594d55ff",
"/": "02b312016114fe04b2710219594d55ff",
"LICENSE": "1803fa9c2c3ce8cb06b4861d75310742",
"main.dart.js": "d3646ad82d0081d0ae6adce6672e306f",
"README.md": "7993880e9aceab3befa6e964d31bbeed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2de3d0a7f19932367844739f68d1b029",
"DeerStalkerCO/LICENSE": "1803fa9c2c3ce8cb06b4861d75310742",
"DeerStalkerCO/README.md": "7993880e9aceab3befa6e964d31bbeed",
"DeerStalkerCO/.git/config": "10f4c18d0a7c8ce92130be7fe1ffd87a",
"DeerStalkerCO/.git/objects/05/baacea40737a7f4b24c346ae1779ed1abc994b": "ca702ccc5dd8bd683af501137f2d912e",
"DeerStalkerCO/.git/objects/ed/37ef82668c5387b96f356489a6d402b6d0b705": "bc8aee1ca6f2db94cb1c29ccece6a427",
"DeerStalkerCO/.git/objects/80/00a6faacf471c537530805ab29523c7732e11a": "c6b609841e241ada3648aa5fa2e6c997",
"DeerStalkerCO/.git/objects/9f/05613737e244e887e9e7444f04c6995b80906d": "7cefb252468a5fdd5e26f3e9a2f5b07a",
"DeerStalkerCO/.git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
"DeerStalkerCO/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"DeerStalkerCO/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"DeerStalkerCO/.git/logs/HEAD": "8a971d48609905bfac82251315c3c3b9",
"DeerStalkerCO/.git/logs/refs/heads/master": "8a971d48609905bfac82251315c3c3b9",
"DeerStalkerCO/.git/logs/refs/remotes/origin/HEAD": "8a971d48609905bfac82251315c3c3b9",
"DeerStalkerCO/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"DeerStalkerCO/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"DeerStalkerCO/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"DeerStalkerCO/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"DeerStalkerCO/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"DeerStalkerCO/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"DeerStalkerCO/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"DeerStalkerCO/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"DeerStalkerCO/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"DeerStalkerCO/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"DeerStalkerCO/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"DeerStalkerCO/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"DeerStalkerCO/.git/refs/heads/master": "8425c4c047b3e20a98035572d1425b1b",
"DeerStalkerCO/.git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"DeerStalkerCO/.git/index": "c49edde978effa20fec5a446cb3df690",
"DeerStalkerCO/.git/packed-refs": "b2d1e6a7116d596236273613393e9df4",
".git/ORIG_HEAD": "68fa4b8353746603cfba10bc63907636",
".git/config": "10f4c18d0a7c8ce92130be7fe1ffd87a",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/92/8a0195336dfa8084ea0a7cedca303ca584c8a8": "9690717658b403cccecb64eb78fb56ec",
".git/objects/03/b5b701c4ad637cf11cd465a8b11957475d27be": "9a9038f0870a1fd6f1a2e48460612e14",
".git/objects/69/d976be3ef43cbd27d093b46fd1e0cc25bc60d5": "9f86b7fc01a9cad3b53e732a51d30c87",
".git/objects/93/bd02e9957cfcef469e87de8b3de5b4519f4987": "126cdab46aef706ab1a87b081456da70",
".git/objects/05/baacea40737a7f4b24c346ae1779ed1abc994b": "ca702ccc5dd8bd683af501137f2d912e",
".git/objects/a3/7e84939bc29f2259ed23c9cf0e802f6ba295a3": "38ee90ed0b14c7caf6f356e610c660f2",
".git/objects/f4/335c1ba3abe605f326ef8d0532806526613bf7": "fe78be99495bdaed77fe9e11ad71a5c2",
".git/objects/c7/36cc8600f9ba882587d0005aac3bb266d25825": "abb2ce2a8359f25b56833b516b95c6f6",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ed/37ef82668c5387b96f356489a6d402b6d0b705": "bc8aee1ca6f2db94cb1c29ccece6a427",
".git/objects/4e/46e7bcd0ee27d5b316f9e3da09406a87f557df": "6cd751d5b1fee1567f9c6a8edcc9353d",
".git/objects/4e/0ef86f0b1c37040678f711782303b40e910751": "8191f55136730db603853b4c774ea620",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/80/00a6faacf471c537530805ab29523c7732e11a": "c6b609841e241ada3648aa5fa2e6c997",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/05613737e244e887e9e7444f04c6995b80906d": "7cefb252468a5fdd5e26f3e9a2f5b07a",
".git/objects/54/49f51499c6c70f879b4b1c485be54032699f5e": "174fa0c4c14c7ad58e85f3b004afa447",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
".git/objects/8d/a8bcaeb26ee3b3d4ca4752ea42916428dd2b73": "89c5ff823579d553da7d60533a7dc013",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/85/4c4b2599e964af5b42c5f92b18510950ce8674": "b8947ba59fbfb6ba45e73e15a3e775e6",
".git/objects/1d/51da79c3b3f797d3120906cdb704bf329ff083": "4b60c5f1fedf6ec84bc8dc3955b1421e",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7a/573aa8712b2f7e7c869eca6db24ed761cd1b21": "1a29dac5b0843631c8914f35f72aea27",
".git/objects/25/dedfbbaab91f4109252a39c887d7681492712c": "a088bca52ec22d43708da961c5de824c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72469e57a2e9066106e3db0e374eaa10",
".git/logs/refs/heads/master": "6b60acbb22a2c9ecd9bb08b31abd89f1",
".git/logs/refs/remotes/origin/master": "475684ccc821be14b1f45413154134af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "68fa4b8353746603cfba10bc63907636",
".git/refs/remotes/origin/master": "68fa4b8353746603cfba10bc63907636",
".git/index": "b9c575321def1af8732cf8b94904e09c",
".git/COMMIT_EDITMSG": "8ad224c76d4b080c6c6e7253055458bf",
".git/FETCH_HEAD": "c7a70540dd19bd1141946edb2746294a",
"assets/images/intro.svg": "2ba23bd262316334868f14d0329f8a56",
"assets/AssetManifest.json": "a3731700842b36fae3ce4ad25d495dbe",
"assets/NOTICES": "a034a31465da48ea15a943bcc533a015",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
