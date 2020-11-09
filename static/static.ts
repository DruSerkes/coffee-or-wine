let latitude: number | undefined, longitude: number | undefined;
const locationSuccess = (position: Position) => { console.log(position.coords) };
const locationFail = (error: PositionError) => { console.log(error) };
function getCoords() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}
getCoords();

const logMe = (): void => console.log('logging typescript');
logMe();

const coffeeBtn = document.querySelector('.Btn-Coffee');
const wineBtn = document.querySelector('.Btn-Wine');
