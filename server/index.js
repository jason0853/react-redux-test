import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import users from './routes/users';

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/users', users);

app.listen(port, () => console.log('Server is running on port ' + port));
