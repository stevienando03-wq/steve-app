const CACHE = "steve-v4";
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./icon-180.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  // Pages HTML : réseau d'abord (pour avoir les MAJ), cache en secours hors-ligne
  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
    e.respondWith(fetch(req).then(r => { caches.open(CACHE).then(c => c.put("./index.html", r.clone())); return r; }).catch(() => caches.match("./index.html")));
    return;
  }
  // reste : cache d'abord
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
