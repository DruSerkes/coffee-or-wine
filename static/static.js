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
    console.log(error);
    return error;
}

function getCoords() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
    console.log('running getCoords');
}

async function handleGetCoffee() {
    const response = await fetch(`/coffee?latitude=${latitude}&longitude=${longitude}`, {
        method: 'GET'
    });
    const data = await response.json();
    console.log({ data });
}

function handleGetWine() { }

coffeeBtn?.addEventListener('click', handleGetCoffee);
wineBtn?.addEventListener('click', getCoords);
window.addEventListener('load', getCoords);

