import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
const bodyParser = require('body-parser');

//create instances
const app = express();
import apiRouter from './api';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/public'));
app.use(express.static(path.join(__dirname, '../client/public')));

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    );
    //and remove cacheing so we get the most recent comments
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

mongoose.connect('mongodb://aswin1689:sairam2016@ds231749.mlab.com:31749/merndb');

app.use('/', apiRouter);

app.listen(3000, () => {
    console.log('running at localhost: 3000');
});
