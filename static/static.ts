let latitude: number | undefined, longitude: number | undefined;
function locationSuccess(position: Position) { console.log(position.coords); }
function locationFail(error: PositionError) { console.log(error); }
function getCoords() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}
getCoords();

const logMe = (): void => console.log('logging typescript');
logMe();

const coffeeBtn = document.querySelector('.Btn-Coffee');
const wineBtn = document.querySelector('.Btn-Wine');
