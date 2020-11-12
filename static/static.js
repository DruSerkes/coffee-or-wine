const coffeeBtn = document.querySelector('.Btn-Coffee');
const wineBtn = document.querySelector('.Btn-Wine');
let latitude, longitude, error;

/*********************/
/*    CALLBACKS      */
/*********************/
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

const showButtons = () => {
    if (!latitude || !longitude) return;
    coffeeBtn.style.display = 'block';
    wineBtn.style.display = 'block';
};

/*********************/
/*  EVENT LISTENERS  */
/*********************/
coffeeBtn?.addEventListener('click', handleGetCoffee);
wineBtn?.addEventListener('click', handleGetWine);
window.addEventListener('load', getCoords);

