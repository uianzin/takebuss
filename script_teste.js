const positions = [[-7.086247640641737, -41.48670568014414],[-7.081529170429088, -41.46791554254031],[-7.0703841059934325, -41.4026943017151]]


const map = L.map('map' ).setView(positions[0],16) 
const layer  =L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	minZoom: 0,
	maxZoom: 25,
});

layer.addTo(map)

const marker= L.marker(positions[0])
marker.addTo(map) 

const marker2 = L.marker(positions[positions.length-1])
marker2.addTo(map)

const polyline = L.polyline(positions,{color:'#F00'})
polyline.addTo(map)