const map = L.map('map').setView([-7.08699,-41.4699],16)
const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

layer.addTo(map)

const marker = L.marker(-7.082833113180291, -41.466503114007324)
