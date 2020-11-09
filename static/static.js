var coffeeBtn = document.querySelector('.Btn-Coffee');
var wineBtn = document.querySelector('.Btn-Wine');
var latitude, longitude;
var error;
function locationSuccess(position) {
    console.log(position.coords);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log('latitude = ', latitude);
    console.log('longitude = ', longitude);
}
function locationFail(error) {
    console.log(error);
}
function getCoords() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}
function handleGetCoffee() {
    getCoords();
}
function handleGetWine() {
    getCoords();
}
// TODO Why isn't this working 
coffeeBtn === null || coffeeBtn === void 0 ? void 0 : coffeeBtn.addEventListener('click', getCoords);
wineBtn === null || wineBtn === void 0 ? void 0 : wineBtn.addEventListener('click', getCoords);
// Checking that script is being read
var logMe = function () { return console.log('logging typescript'); };
logMe();
