const CACHE = "steve-v60";
const ASSETS = ["./", "./index.html", "./fiches.js", "./actu.js", "./entrainement.js", "./dscg.js", "./signaux.js", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png", "./icon-180.png"];
const DONNEES = ["fiches.js", "actu.js", "entrainement.js", "dscg.js", "signaux.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
/* La page peut demander a une version en attente de prendre la main tout de
   suite, quand Steve touche « Installer » sur le bandeau de mise a jour. */
self.addEventListener("message", e => {
  if (e.data && e.data.type === "SAUTER") self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

/* Corrige le 13/09/2026. Deux bugs vivaient ici depuis la v22 :

   1. cache.put recevait QUATRE ou CINQ arguments alors qu'il n'en prend que deux. Il levait
      donc une TypeError a chaque chargement, la promesse partait en rejet non traite, et la
      page n'etait JAMAIS remise en cache. Le cache ne contenait que ce que addAll y avait
      mis a l'installation.
   2. tout ce qui n'etait pas du HTML etait servi CACHE D'ABORD. Une ancienne version de
      fiches.js, actu.js ou entrainement.js pouvait donc rester collee apres une mise a jour,
      et l'onglet Finance affichait un contenu perime, voire rien du tout.

   Desormais : reseau d'abord pour la page ET pour les trois fichiers de donnees, cache en
   secours quand il n'y a pas de reseau. Le reste, images et manifeste, reste cache d'abord,
   il ne change jamais. */
function reseauDabord(e, cle){
  e.respondWith(
    fetch(e.request).then(r => {
      const copie = r.clone();
      caches.open(CACHE).then(c => c.put(cle, copie)).catch(() => {});
      return r;
    }).catch(() => caches.match(cle).then(r => r || caches.match("./index.html")))
  );
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
    return reseauDabord(e, "./index.html");
  }
  let nom = "";
  try { nom = new URL(req.url).pathname.split("/").pop(); } catch (err) { nom = ""; }
  if (DONNEES.indexOf(nom) !== -1) {
    return reseauDabord(e, "./" + nom);
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req)));
});
