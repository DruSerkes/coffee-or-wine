const coffeeBtn = document.querySelector('.Btn-Coffee');
const wineBtn = document.querySelector('.Btn-Wine');
let latitude, longitude, error;

const locationSuccess = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
};

const locationFail = (error) => {
    console.log({ error });
    window.location.reload();
};

const getCoords = () => (navigator.geolocation.getCurrentPosition(locationSuccess, locationFail));

const handleGetCoffee = () => (window.location.assign(`https://maps.google.com/?ll=${latitude},${longitude}&q=coffee&z=15`));

const handleGetWine = () => (window.location.assign(`https://maps.google.com/?ll=${latitude},${longitude}&q=wine+bar&z=15`));

coffeeBtn?.addEventListener('click', handleGetCoffee);
wineBtn?.addEventListener('click', handleGetWine);
window.addEventListener('load', getCoords);

