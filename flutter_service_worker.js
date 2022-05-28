'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "eb260e9ae827821beceeed4104f0ad89",
".git/config": "5f51fe51631c3b5f5a7c2904537c1ae9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c068fe8c9582ae4c02f08973b12830ed",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "261a37ed39b07ed3228cc5e4b727ee3c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4930369bf621fd05514e956e94a776bb",
".git/logs/refs/heads/main": "70d86e9d5d6208f6609989bf96ca43d4",
".git/logs/refs/remotes/origin/main": "f1720dbdf57af0f484d8faf1d65fff43",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/08/1af6c521815bb7c54725b862b9b0c299308b8a": "de0fd7aa33532a21c8d933350e4eee39",
".git/objects/0a/93ead49f7c348ff2c769322eb2535288e9ea92": "2fa56328418863d0de731bc35777e989",
".git/objects/0c/45b1aab2e9b24485837cf9b47cf133dba98439": "7d7a0f759e58da7805150276d1ee89aa",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/6de536c5346df40957b7d57b0bdd48541da54b": "7f57572cc44e7f1a4ffaf630cda44f1c",
".git/objects/0f/091e6a8a53b0990c9d77d63fab8b4bce852b2a": "3e72debb732c5cab2c72306888e14037",
".git/objects/10/a5c682ea79e261e0e00aceb8846ef6f05d6e6b": "49c5eed1a9799dcd9addb5686819ab63",
".git/objects/1e/1db4592031cdbeea003d2948968a792e8d57b3": "fee501a0c3db71672134710afa3ce5d6",
".git/objects/21/929054fd9f8fe565acd76e6a9cf3a45421b4b0": "177440bd693e592ad6442f90ba8d9e08",
".git/objects/23/74efbe161e02bde8427b41131fb9282076e531": "603074dca04a9b31220bc720147f5283",
".git/objects/23/bfc6c8a8ab04adbd3cfa817de5d5abe3aa479e": "7ac065eb90f5d25fe9508ee21c6173c6",
".git/objects/24/1c022b582f118f9c528b05bffcdb5459f56939": "80f6d399b9a42505083f39160e2e0764",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/33/1b3bd9d107f235f159d46496435d91352eeb35": "2603288b531222cd5f0ae7a05bd0bb19",
".git/objects/34/6baf28246e16d7ae9caf5379899855b80b0e41": "8686e0b501d9ad53c12b075fdf1c583d",
".git/objects/34/79ce9c6d767e41f5326f785f8c442e5c60da8c": "bf2b525714ce2b106e8790fdb82ade22",
".git/objects/35/8944039519059d71b9ee161769ebed4c9d1099": "83aff52e3eddd5c5092890b000abc094",
".git/objects/3e/0f97c1c6081c7c31a7cc1b1fca09fa9c934d75": "7b18988a754affb90ce7c0f9cbef351e",
".git/objects/44/28283d1c8e421434aa266d21c577b61be014b5": "77793d6e979c51791518179eb8f6f363",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/b177eea952e1dea28b569e793ab618c698a1fe": "f4e543a418c0d598fe09c63cf6829277",
".git/objects/5b/d3a2b1fee220af5a0b7cbef3b53d033ba21f46": "13cf30a06fbd292b48831fa2581d12f9",
".git/objects/62/74c67106487418ad60a537ce982f6133b3dfc3": "a62ec388c3c637c68ed79e447b108ff4",
".git/objects/64/1b7095936aba191f54e4fb70375512a1da9556": "5f897b9ca59429d0acdcc4d492acf3b4",
".git/objects/69/f130b48c44fc7835a4bf604e706682d9f1e89a": "84e545c57697f8814aec8960095ac43d",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f6212a78864ef6cd4bb377a787b9fc5c0a91f4": "20653afd13a22672fd4ad14d7bbead90",
".git/objects/82/185cfe32c77cd1e56da45a6e79fa54d1c185fb": "22cc05bdb252c639d0af91765796143f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/453bda0fa727b12f1aae2b8edf2a64f09f6c9b": "9a0939c3f8731cbf163aeb0b21b2a4ed",
".git/objects/8d/b837d199694e15b656992f7cc199ee86d51dc1": "0fb990501b551908107919dd2e6723dc",
".git/objects/8f/157b7c3083ca6a0d1d4cc583bfaf978ebf4603": "8ab7b2fa812c274bfa3e29242a5a0b2b",
".git/objects/92/74906b54d1d405b967b5a526032949dd87ef9e": "fa4aa0c2de43b4757e95f0853c746ef0",
".git/objects/96/f1f48b9049af050d93ba7636ee520e51300a67": "5656b6849a59d323f694ccfce49b2bc8",
".git/objects/99/c3df6dedf7d4e2b12d659a909c8ce64b5a9501": "dd96e15de73f24ac31784e864dd7eba9",
".git/objects/9b/b53d3f058e1a1a8f15429f80b433e4feae2618": "2d78e0c34882618b54d9cd6cfc6f0911",
".git/objects/9c/29e73d7de3dd9b693d891f4a03b9cf3722b45d": "b54a572eb0171ed9b14d00c1ce978086",
".git/objects/9e/0f8a594da3d5126620889cc048aa4459781c2d": "b9a60e522726590b82d5f3d24ad507e5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/970d299ad8e103e4aed7d6cf443d27542fed04": "9867af5b6d3c72b9d72a66e4f309c261",
".git/objects/a6/9453097743c3a157297a46c51da51a6042915d": "3a1bae521d4c83ff9096a1c11b7e94a0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/b947d404985bdce13e885dcbeb4fb7608c2842": "b7dc154b7748abe9ac1881182e40ff8e",
".git/objects/ad/d951f0eaa2b5700fb2f0aae1c9b327c8b12da1": "b94011d34d0d8ae7ae4cc517df168ff0",
".git/objects/b0/da323ccfceb65c875224fa1b632467b3fdcc4a": "b6f42ce51faf21829e64f9740c02b9d7",
".git/objects/b2/97feee23d15722ae1d502d1a013f227292bf52": "353a45d857f82821dfea7d44629df7ff",
".git/objects/b3/685d6102e3d766d78c7e34435e757bcb674397": "37b7ec6ee1b9efb1619ebf9105ece526",
".git/objects/b3/862f9cc82f93c9f618e46b22608de2d3fbe454": "9c1d6c5b66285d553d10953f0008675e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7b0baaed168c60180cc1cd762ec94e84003c99": "e5f6e41d16b578ee30a7e218966956fc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/725521065516e01da630c87db831335b7b2262": "885281607d2993b5d65371596ce5b1a7",
".git/objects/bb/900fd276997b868d86b96b559fcea2f59e9509": "670d8aa8630462953d4cd45275943d77",
".git/objects/bf/d2aaac0b86c0f4696069ae87d0ffc60fcd4072": "1b9773fd6b9e859a9a02f8f6aee064ff",
".git/objects/c2/268fd93aa0818c02f0fc6462062ba86bcc1ae5": "f1043052cb7050c9b1e63620d3dd685a",
".git/objects/c4/0a80f214b387dfce4fd3763fc6e3205974dc40": "b846db7d48f519d20b02e05bae1e210e",
".git/objects/c5/1d3aa15205add1719400095c235fb2b9527ac9": "4c8f5552d918982ce3b7e98dd71c85bd",
".git/objects/c5/6c791677d379c5aacf1b1c798cb536f9e90eff": "fa52485f74826f0053b251b37c2fb7e9",
".git/objects/c6/986f209c2ed257ab5bee9a08becabe9a6a9f0b": "3fc4478db83dabc79f68cb66ffccfac3",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/00aa6b02715d8dec0e4bf3f8b48afb8d9c3bb7": "ce7af30b9f5a561d02323579821e5f93",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/decec7fbaae888b8c55240951090e58eae0bd2": "89d969af3557c44aa9784ef2ff72b64a",
".git/objects/d7/ee7742bb94df79f243b136679e126f1f43ba3e": "3a049325806305172d3a1d1b9cabe617",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/db/a7043ea05568f28adab962725042d95d8837de": "932d9fa75e52c3dfe0cd3c890e65e680",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/be0b4c0ef2f4400e29aa0915a0b8ac6308b09a": "94ce9f25f90e6c62c8f54d5abed8463c",
".git/objects/e4/1cffb536287ed908dd9d68e2709d343ad7f5c9": "a61c225641e995cbb5b594cad0e7efc7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/8e47c63223ebc7eaf73457ddf9c0e0c0da1190": "9917d21f66c88e8841238596915b366c",
".git/objects/f4/14a8513fb29ffc57409e59e9b9fb891998167b": "cc101005466a1f4aabe55aa16a21895d",
".git/objects/f5/607e4ab72bcc92e1c647a4b17775f3031ae939": "3ab62ae52d29ea8528ec2e31158b2902",
".git/objects/f8/a01ffea73a60038a4a4cb71d597e7be3c5218c": "71549fe7c9f586df40806d384240ce53",
".git/objects/fb/4fb963e552921f52cffafef831e1020baa60fd": "00598565cc49a816a8ee164eefe95def",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "7aea7a0567169976660bdff8ee07e6f5",
".git/refs/remotes/origin/main": "14c047398b8983325003dc1ef29a3d79",
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
"assets/assets/shapes/block.png": "46c1eab7c050b0ec5e4f402162ab9fd8",
"assets/assets/shapes/cube.png": "d07011b64bd1a9a07a26da841debc6fd",
"assets/assets/shapes/hexa.png": "9857fd4b7e656be1a4f6ec12ed5aee49",
"assets/assets/shapes/hexa2.png": "4b362c127ae6218dbd3f188ea0d6934f",
"assets/assets/shapes/hexa3.png": "18a3a1f32f4b8ec56de76900469230fe",
"assets/assets/shapes/hexa4.png": "6c7ad6358ee9da58e12fb66718077d29",
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
"index.html": "b685c4528455291b481e3cc70731f715",
"/": "b685c4528455291b481e3cc70731f715",
"main.dart.js": "2b8b291e5e7ad50b96d023b1db8de769",
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
