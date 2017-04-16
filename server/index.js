import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import gamesRoute from './routes/games';

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', gamesRoute);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
