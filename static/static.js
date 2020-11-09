var latitude, longitude;
function locationSuccess(position) {
    console.log(position.coords);
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log('latitude = ', latitude);
    console.log('longitude = ', longitude);
}
function locationFail(error) { console.log(error); }
function getCoords() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}
getCoords();
var logMe = function () { return console.log('logging typescript'); };
logMe();
var coffeeBtn = document.querySelector('.Btn-Coffee');
var wineBtn = document.querySelector('.Btn-Wine');
