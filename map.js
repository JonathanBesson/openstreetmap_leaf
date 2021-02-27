// -- init de la map
var mapOptions = {
  zoom: 10,
  origins: {
    lat: 45.9194,
    lon: 6.8139
  },
  injectTo: "map"
};
var map = L.map(mapOptions.injectTo).setView(Object.values(mapOptions.origins), mapOptions.zoom);

// -- chargement de la couche cartographie
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// -- marqueurs d'intérets
// pointList de ./pointList.js

// boucle sur les points pour les créer
pointList.forEach(point => {
  var tooltip = point.tooltip;
  tooltip += '<br/><div class="btn btn-sm btn-primary" onclick="displayInformationFromMarker(' + point.id + ")\">[+] Plus d'informations</div>";

  L.marker([point.lat, point.lon])
    .addTo(map)
    .bindPopup(tooltip)
    .openPopup();
});

// that's all folks !
