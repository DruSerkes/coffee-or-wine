import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import nunjucks from 'nunjucks';

const app: express.Application = express();

nunjucks.configure('templates', {
    autoescape: true,
    express: app,
})

app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.send("Welcome to Coffee or Wine");
})


export { app };
// module.exports = app