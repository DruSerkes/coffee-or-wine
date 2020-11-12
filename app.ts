import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import nunjucks from 'nunjucks';
import axios from 'axios';
import { API_KEY } from './config';

const BASE_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

const app: express.Application = express();

nunjucks.configure('templates', {
    autoescape: true,
    express: app,
})

app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.static('static'))

app.get('/', (req, res, next) => {
    res.render('base.html');
})


app.get('/coffee', async (req, res, next) => {
    const { latitude, longitude } = req.query;
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                location: `${latitude},${longitude}`,
                keyword: 'coffee',
                rankby: 'distance',
                key: API_KEY
            }
        })
        const coffeeShops = response.data.results.map((shop: any) => {
            let { icon, name, place_id, rating, vicinity } = shop;
            let openNow = shop.permanently_closed ? false : shop.opening_hours ? shop.opening_hours.open_now : null;
            let lat = shop.geometry.location.lat;
            let lng = shop.geometry.location.lng;
            let image = shop.photos[0].photo_reference;
            return {
                icon, name, place_id, rating, vicinity, openNow, lat, lng, image
            }
        });
        console.log('coffeeShops == ', coffeeShops);
        return res.json({ coffeeShops });
    } catch (e) {
        console.log(e)
        return res.json(e);
    }
})

export { app };
// module.exports = app