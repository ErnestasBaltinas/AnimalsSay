const cacheName = 'as-cache-v2';

const staticAssets = [
  '/AnimalsSay/',
  '/AnimalsSay/app.js',
  '/AnimalsSay/css/main.css',
  '/AnimalsSay/css/bootstrap.min.css',

  '/AnimalsSay/assets/images/bear.png',
  '/AnimalsSay/assets/images/cat.png',
  '/AnimalsSay/assets/images/chick.png',
  '/AnimalsSay/assets/images/cow.png',
  '/AnimalsSay/assets/images/dog.png',
  '/AnimalsSay/assets/images/donkey.png',
  '/AnimalsSay/assets/images/duck.png',
  '/AnimalsSay/assets/images/elephant.png',
  '/AnimalsSay/assets/images/lion.png',

  '/AnimalsSay/assets/sounds/bear.mp3',
  '/AnimalsSay/assets/sounds/cat.mp3',
  '/AnimalsSay/assets/sounds/chick.mp3',
  '/AnimalsSay/assets/sounds/cow.mp3',
  '/AnimalsSay/assets/sounds/dog.mp3',
  '/AnimalsSay/assets/sounds/donkey.mp3',
  '/AnimalsSay/assets/sounds/duck.mp3',
  '/AnimalsSay/assets/sounds/elephant.mp3',
  '/AnimalsSay/assets/sounds/lion.mp3'
];

self.addEventListener('install', event => {
    // cache a horse SVG into a new cache, static-v2
    console.log(cacheName + " installing..");
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log(cacheName + " done..");
            return cache.addAll(staticAssets);
        })
    );
});


self.addEventListener('activate', event => {
    //delete any caches that aren't in expectedCaches
    //which will get rid of static-v1
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (!cacheName.includes(key)) {
                    return caches.delete(key);
                }
            })
        )).then(() => {
            console.log('ready to handle fetches!');
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
