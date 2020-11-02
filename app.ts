import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app: express.Application = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.send("Welcome to Coffee or Wine");
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})

module.exports = { app }