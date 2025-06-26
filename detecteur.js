// Pour l'emplacement des détections sur Open Street Map

// Taper dans le terminal pour Google Chrome : google-chrome index.html

// Enregistrer ce fichier et le fichier "index.html" dans le même dossier

// L'endroit où tu veux afficher la carte.
var element = document.getElementById('osm-map');

// Création de la carte Leaflet dans l'élément HTML ciblé.
var map = L.map(element);

// Ajout de la couche de tuiles OSM à la carte Leaflet.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Coordonnées GPS de la cible.
// Coordonnées de La Cordeille : 43.141480, 5.880973
var target = L.latLng('43.141480', '5.880973');

// Centrer la carte sur la cible avec un zoom de 15.
map.setView(target, 15);

// Placer un marqueur au même endroit.
// L.marker(target).addTo(map);


var marker = L.marker(target).addTo(map);
marker.bindPopup(
  `Coordonnées : ${target.lat.toFixed(5)}, ${target.lng.toFixed(5)}`
);
