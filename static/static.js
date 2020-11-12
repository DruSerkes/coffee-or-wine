const coffeeBtn = document.querySelector('.Btn-Coffee');
const wineBtn = document.querySelector('.Btn-Wine');
let latitude, longitude, error;

function locationSuccess(position) {
    console.log(position.coords);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log('latitude = ', latitude);
    console.log('longitude = ', longitude);
}

function locationFail(error) {
    console.log({ error });
    window.location.reload();
}

function getCoords() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}

function handleGetCoffee() {
    window.location.assign(`https://maps.google.com/?ll=${latitude},${longitude}&q=coffee&z=15`);
}

function handleGetWine() {
    window.location.assign(`https://maps.google.com/?ll=${latitude},${longitude}&q=wine+bar&z=15`);
}

coffeeBtn?.addEventListener('click', handleGetCoffee);
wineBtn?.addEventListener('click', handleGetWine);
window.addEventListener('load', getCoords);

