const positions = [[-7.086247640641737, -41.48670568014414],[-7.0703841059934325, -41.40269430171519]]
const map = L.map('map').setView(positions[0],16)
const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 20,
	
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

layer.addTo(map)

const marker = L.marker(positions[0])
marker.addTo(map)

L.marker(positions[positions.length-1]).addTo(map)

const polyline = L.polyline(positions,{xolor:'#F00'})
polyline.addTo(map)
