let h2 = document.querySelector('h2');

function success(pos){  //função de sucesso//
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}´;
}


navigator.geolocation.getCurrentPosition(success); //() o que vai retornar da longitude//