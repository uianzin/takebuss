var map = L.map('map').setView([-7.077647281493683, -7.077647281493683], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-7.07842002482361, -41.461887554543864]).addTo(map);
var marker = L.marker([-7.070149657896613, -41.40217760233757], {
    
}).addTo(map);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

const polyline = L.polyline(positions,{color:'#FOO'})
polyline.addTo(map)
