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


export { app };
// module.exports = app