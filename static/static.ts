const coffeeBtn: Element | null = document.querySelector('.Btn-Coffee');
const wineBtn: Element | null = document.querySelector('.Btn-Wine');
let latitude: number | undefined, longitude: number | undefined;
let error: PositionError | undefined;

function locationSuccess(position: Position) {
    console.log(position.coords);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log('latitude = ', latitude);
    console.log('longitude = ', longitude);
}

function locationFail(error: PositionError) {
    console.log(error);
}

function getCoords(): void {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}

function handleGetCoffee(): void {
    getCoords();
}

function handleGetWine(): void {
    getCoords();
}

coffeeBtn?.addEventListener('click', getCoords);
wineBtn?.addEventListener('click', getCoords);






// Checking that script is being read
const logMe = (): void => console.log('logging typescript');
logMe();


