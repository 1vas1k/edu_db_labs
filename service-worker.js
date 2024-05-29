/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b3804a31328830aac4a90ca6ca50f5c4"
  },
  {
    "url": "assets/css/0.styles.11887572.css",
    "revision": "cd73cf496d28676e9c3ee097de8a0cd7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.618f7b3f.js",
    "revision": "642095619af028f022410cbe4d0570bc"
  },
  {
    "url": "assets/js/10.aa863558.js",
    "revision": "6f71b89832e19a0b648018bc2464ab2f"
  },
  {
    "url": "assets/js/13.03a6ce61.js",
    "revision": "37d643b4393b5d18134330b2f8c58038"
  },
  {
    "url": "assets/js/14.44317190.js",
    "revision": "f9d56c86561d2e8fdf88352d2a7f3820"
  },
  {
    "url": "assets/js/15.01129638.js",
    "revision": "e21c05bec89d0a4587ea867b08aa2e04"
  },
  {
    "url": "assets/js/16.4d3462cd.js",
    "revision": "00d57736e7d628048f87405e4d8b4acb"
  },
  {
    "url": "assets/js/17.58591fb6.js",
    "revision": "e9083a83e4174ca4ad37c821b20a80f0"
  },
  {
    "url": "assets/js/18.413baacc.js",
    "revision": "85b0a3f5fb556bd48a61716f70e8d7f8"
  },
  {
    "url": "assets/js/19.34716b84.js",
    "revision": "21347915480a3072286bce143d4828f5"
  },
  {
    "url": "assets/js/2.b04b19e1.js",
    "revision": "ecc38aa103999fddbd6ebd2817fb0fad"
  },
  {
    "url": "assets/js/20.dc5cf6cb.js",
    "revision": "ce9372ca436931fb87ce5995d963ee6c"
  },
  {
    "url": "assets/js/21.7d4308de.js",
    "revision": "f300679cc31158b5c477fde857de625e"
  },
  {
    "url": "assets/js/22.46dd4ed9.js",
    "revision": "d6219d7b3301c9df060c8ab41d9bed0e"
  },
  {
    "url": "assets/js/23.79800473.js",
    "revision": "9adbcd5aa72f38ebd081d8cf996a1026"
  },
  {
    "url": "assets/js/24.990d8b1b.js",
    "revision": "682159da9f8a91d0c39ca457130f0352"
  },
  {
    "url": "assets/js/25.e3ca5acb.js",
    "revision": "836e0a6c3cabaf6e01869e0bd5dae2a6"
  },
  {
    "url": "assets/js/26.8d0c0409.js",
    "revision": "8aba158efd992fae43d8941e482a7c7b"
  },
  {
    "url": "assets/js/27.84ef935a.js",
    "revision": "3710afa40927f27377744b063737866f"
  },
  {
    "url": "assets/js/28.c975bc32.js",
    "revision": "c477959701e33f1d612a0b70c73390be"
  },
  {
    "url": "assets/js/29.eb2d1bc4.js",
    "revision": "cd80ec4e383e48862fba0b203f20b699"
  },
  {
    "url": "assets/js/3.57c8205e.js",
    "revision": "73a49ac9dedd9e2ac7fa767177778094"
  },
  {
    "url": "assets/js/30.e23b410a.js",
    "revision": "cd1e4ec9bb79ce303c31c8d1742e2cf3"
  },
  {
    "url": "assets/js/31.0ba89ce4.js",
    "revision": "2e9fcdc379283414290604bdb544ae03"
  },
  {
    "url": "assets/js/32.78addd9e.js",
    "revision": "c4ab9db65fdad1f6dc1b36e79007bf36"
  },
  {
    "url": "assets/js/33.93853b66.js",
    "revision": "1850f97878bb01a27f01de6bfe18199a"
  },
  {
    "url": "assets/js/34.4f06bdcf.js",
    "revision": "49ed476d188d4db4185a9e2c60635fff"
  },
  {
    "url": "assets/js/35.74b26599.js",
    "revision": "3e2eb85c47767e35a02d92374a8dd4bd"
  },
  {
    "url": "assets/js/36.bf2cd950.js",
    "revision": "20f7d893c262d767caafd01b14c4e45e"
  },
  {
    "url": "assets/js/37.5a1e2c0e.js",
    "revision": "39acbc7e4d2b330ab41429552b537ace"
  },
  {
    "url": "assets/js/38.6f707da5.js",
    "revision": "ab8f079beaab260dd218de455e13f8cd"
  },
  {
    "url": "assets/js/39.7a9d6e4d.js",
    "revision": "707daf9770d4b7c52e26c86bc0d33277"
  },
  {
    "url": "assets/js/4.326bdc2c.js",
    "revision": "6e6b516856a4fc4519bab98b40b6b887"
  },
  {
    "url": "assets/js/41.c8373cb3.js",
    "revision": "e6b8762a479b414a19fb700261ac7ddc"
  },
  {
    "url": "assets/js/5.99c824c4.js",
    "revision": "e8f5ae212ea06423cff67a7295655674"
  },
  {
    "url": "assets/js/6.866963b8.js",
    "revision": "1122bf03b4c3af8127472ac34403204f"
  },
  {
    "url": "assets/js/7.8e2c935a.js",
    "revision": "7ca74a854ee88f54067b61872fc984e3"
  },
  {
    "url": "assets/js/8.8ec552ec.js",
    "revision": "cc27719725a2b9c1c0ba0a1100a56e1d"
  },
  {
    "url": "assets/js/9.bacad51b.js",
    "revision": "781f11a8e1de42c858e1806db31cb0fd"
  },
  {
    "url": "assets/js/app.6732ae67.js",
    "revision": "817bb69dc20de3cc2f7e0c28354411d0"
  },
  {
    "url": "assets/js/vendors~docsearch.7eb60035.js",
    "revision": "1e191a90655d0d6b862e60709158e047"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e57cccb785ee391b75e91db4ba180e89"
  },
  {
    "url": "design/index.html",
    "revision": "b36892cf2645d83372d0f3fc369da32d"
  },
  {
    "url": "index.html",
    "revision": "e87ad242e2c7cbea00e850ad1d4fe800"
  },
  {
    "url": "intro/index.html",
    "revision": "58ccc333ca3ddbb70282cb3e9f5735e1"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "12dbe2802bbaa5cd5a8fb59322f7fb51"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f8dc16af7a0daf1d180d56bec9ea6926"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "af30dd75d9aa908e35b05df5fdbc021f"
  },
  {
    "url": "software/index.html",
    "revision": "7acb465c1aa3f4c1a5e9e4da2a565a90"
  },
  {
    "url": "test/index.html",
    "revision": "aa41ee7fcfabec24d7ee04be1d91338e"
  },
  {
    "url": "use cases/index.html",
    "revision": "8d11215c3d4b99bb24efbe6aa9ed691f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
