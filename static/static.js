var locationSuccess = function (position) { console.log(position.coords); };
var locationFail = function (error) { console.log(error); };
var latitude, longitude;
function getCoords() {
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail);
}
getCoords();
var logMe = function () { return console.log('logging typescript'); };
logMe();
var coffeeBtn = document.querySelector('.Btn-Coffee');
var wineBtn = document.querySelector('.Btn-Wine');
