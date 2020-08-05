'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "02b312016114fe04b2710219594d55ff",
"/": "02b312016114fe04b2710219594d55ff",
"LICENSE": "1803fa9c2c3ce8cb06b4861d75310742",
"CNAME": "73bbfb1d788bf51b909de8abfbbf520c",
"main.dart.js": "a91fbb168ca650d711ca34a0ae92acc3",
"README.md": "9297f293a0497b55e968a68a87155b5a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "2de3d0a7f19932367844739f68d1b029",
".git/ORIG_HEAD": "5156ff28bfc0aa84f3000b9d014568ec",
".git/config": "10f4c18d0a7c8ce92130be7fe1ffd87a",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/92/8a0195336dfa8084ea0a7cedca303ca584c8a8": "9690717658b403cccecb64eb78fb56ec",
".git/objects/50/26d20c0e334f3abb4ae9d06204b482c637fa3c": "20a12f35aa3d203c9ceb7ea7afd096d5",
".git/objects/03/b5b701c4ad637cf11cd465a8b11957475d27be": "9a9038f0870a1fd6f1a2e48460612e14",
".git/objects/69/d976be3ef43cbd27d093b46fd1e0cc25bc60d5": "9f86b7fc01a9cad3b53e732a51d30c87",
".git/objects/67/b19e79524c5d217d5ded7727e97c5c529c9a7f": "abb3eeb234b023af2388a8860fa01b11",
".git/objects/93/f023e9b9fe9483114dd9c603a05a24f1feb999": "f25b33c6ed464c2c14aef846e6c6e6e3",
".git/objects/93/bd02e9957cfcef469e87de8b3de5b4519f4987": "126cdab46aef706ab1a87b081456da70",
".git/objects/05/baacea40737a7f4b24c346ae1779ed1abc994b": "ca702ccc5dd8bd683af501137f2d912e",
".git/objects/05/e2350b97a66e15da1edd113a0e5b7737d5b663": "5e5bddb2b868359ade28c15e46f5f90d",
".git/objects/a3/7e84939bc29f2259ed23c9cf0e802f6ba295a3": "38ee90ed0b14c7caf6f356e610c660f2",
".git/objects/ac/7a8e76a1acebe69a5523aaa0c94e8ab8e92483": "a851c3de72f107d89f62ffd66f6d131b",
".git/objects/a5/8a83e6b40abea4834e199c93e93defd4afca5a": "2835f5982a156cfb7db8f676eae95881",
".git/objects/f4/335c1ba3abe605f326ef8d0532806526613bf7": "fe78be99495bdaed77fe9e11ad71a5c2",
".git/objects/c7/36cc8600f9ba882587d0005aac3bb266d25825": "abb2ce2a8359f25b56833b516b95c6f6",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ed/37ef82668c5387b96f356489a6d402b6d0b705": "bc8aee1ca6f2db94cb1c29ccece6a427",
".git/objects/4e/46e7bcd0ee27d5b316f9e3da09406a87f557df": "6cd751d5b1fee1567f9c6a8edcc9353d",
".git/objects/4e/0ef86f0b1c37040678f711782303b40e910751": "8191f55136730db603853b4c774ea620",
".git/objects/4e/7e98a96f2e0b8627f221143a91209e24af8566": "18b4747ae17527716429e8c7ae70c53d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/754bfafde7054381e40bfbd4cf4dc0958a4f69": "352d02a452cc77c677821737d7eda7c9",
".git/objects/27/ccc89bce940e80f4470d7f6718c0b04dc7668f": "9789657b6151517c2afe3a80506fd1b8",
".git/objects/4b/25670833e9ac870e9771da0b43fc9e76293ee7": "35e145add8f5284bb48f19beb219d018",
".git/objects/42/25d6e5170fa4757549d18cd0c1e5365b8777a0": "686d694fcef7430f2657e233e2deee6d",
".git/objects/73/924e02dacc4b7cd5b35fd772f59d31c58394b3": "2f3894468f18f22b76d0c94f148f8e5c",
".git/objects/80/00a6faacf471c537530805ab29523c7732e11a": "c6b609841e241ada3648aa5fa2e6c997",
".git/objects/8f/166647560a91a724df5aeb1d0805c57468df8e": "916528f9b047bbf3a2acf936a5a415b2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/32be581ac5013c0f6e53cc6990a48d605e9069": "636f428a80f51e000a936dcaeb7a3491",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2f/7efbeab578c8042531ea7908ee8ffd7589fe46": "aa9408a44a7560b833dd793a6cb10ddd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/05613737e244e887e9e7444f04c6995b80906d": "7cefb252468a5fdd5e26f3e9a2f5b07a",
".git/objects/54/49f51499c6c70f879b4b1c485be54032699f5e": "174fa0c4c14c7ad58e85f3b004afa447",
".git/objects/3f/e80224d14ae71c452446e74f5e485b72545408": "0c9866f46ded1da526053caf86cdd4ef",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/90/fc012e7bf84fe8dd8ae4f26298e988a7871169": "7b68b5b77fdad5b5d0d34d62e4f54da5",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dc/69b684c831221b881a26cc3a8789af78ac2f52": "f46d985f761d633dceb07b20b82a3858",
".git/objects/aa/72188959095e136f9d23b5c0c08ee639151d7f": "172b9067bd2277979ccf662df6a106c1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ef116d224d8f796abe72ecfef9271f9d79f069": "a633ba18bbfd84d0c0ea0a4dd6b59348",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/e1/0a103921fa04d1f023553d6f0eba7bfb2f8c41": "984111a2f793733ff8fbecfc96386945",
".git/objects/e7/55b74e3f73391007ff8341477238f329546433": "ee3d33f78b6923cb9909ad588ff581fe",
".git/objects/cb/052d0c0d80f7f6e1bfb2cd6dc9b5c2c1ff26b2": "6ed618f7e138117ff5161438d6d4ceee",
".git/objects/2d/24629d6a21985dcf8ea6609d64febf2502446f": "81921bca9d37b7cf4e2f5b634b757bae",
".git/objects/1b/b2f66077c7e450021820c77f95513894316c71": "8cfbdcfe6cbd3555dc8d8a247d14c5a6",
".git/objects/1e/ce1b2a231501a8de4fcae4a9ea69376ef93005": "21a7002bd32ba7887d14271155885dc2",
".git/objects/1e/90a56829e66de45afdbdf24b841bb7aa53725e": "012620a9fef7d613cefcc99995e6389c",
".git/objects/8d/a8bcaeb26ee3b3d4ca4752ea42916428dd2b73": "89c5ff823579d553da7d60533a7dc013",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/85/4c4b2599e964af5b42c5f92b18510950ce8674": "b8947ba59fbfb6ba45e73e15a3e775e6",
".git/objects/1d/51da79c3b3f797d3120906cdb704bf329ff083": "4b60c5f1fedf6ec84bc8dc3955b1421e",
".git/objects/40/14ff2079a6d21e2ebea467022c362a192577c1": "a3c063a2134b6ff47d7f16c614089373",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7a/573aa8712b2f7e7c869eca6db24ed761cd1b21": "1a29dac5b0843631c8914f35f72aea27",
".git/objects/22/7c693236097e31427f7a6a39c85e14f5326962": "a7c447edd9693597163bf7b9dcde52c3",
".git/objects/22/e6d86cf1b72c357f358a7045102df8c1b47d87": "de0b5318e763f014d6f36cc8e460f234",
".git/objects/25/dedfbbaab91f4109252a39c887d7681492712c": "a088bca52ec22d43708da961c5de824c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "42394785ba19fd9ad984f629f66d4ad8",
".git/logs/refs/heads/master": "a2df73f34a3363b036c0e385391f940b",
".git/logs/refs/remotes/origin/master": "d29b89a19e90e6f5fcdf6e32d37c5fdf",
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
".git/refs/heads/master": "5156ff28bfc0aa84f3000b9d014568ec",
".git/refs/remotes/origin/master": "5156ff28bfc0aa84f3000b9d014568ec",
".git/index": "41a921c74e54bf1d7ea8eda31fb48699",
".git/COMMIT_EDITMSG": "2ea685145e52bb8517eee3825cb19dd7",
".git/FETCH_HEAD": "6965284340f79e6d5e7a495b1cf8970d",
"assets/images/intro.svg": "2ba23bd262316334868f14d0329f8a56",
"assets/images/homepage.png": "68daa83aedb28b0ba7a5bb89900c4a34",
"assets/AssetManifest.json": "761583a94bf06e637384351738d13fa2",
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
