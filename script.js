// Initialize the map
const map = L.map('map').setView([51.505, -0.09], 13); // Default location (London)

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
const marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample marker.');

// Add a circle
const circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)
    .bindPopup('A sample circle.');

// Add a polygon
const polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map)
    .bindPopup('A sample polygon.');s

    // Add routing control
L.Routing.control({
    waypoints: [
        L.latLng(51.5, -0.09), // Start point
        L.latLng(51.51, -0.047) // End point
    ],
    routeWhileDragging: true
}).addTo(map);

// Add draw control
const drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

const drawControl = new L.Control.Draw({
    edit: { featureGroup: drawnItems },
    draw: { polygon: true, circle: false, marker: false, polyline: false }
});
map.addControl(drawControl);

map.on(L.Draw.Event.CREATED, function (event) {
    const layer = event.layer;
    drawnItems.addLayer(layer);
});