import { app } from './app';
import { PORT } from './config'


app.listen(PORT, () => {
    console.log('Server listening on port 3000')
})