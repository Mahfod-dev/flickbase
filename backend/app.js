const express = require('express');
require('dotenv').config();
require('colors');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

//routes
const routes = require('./routes');

const app = express();

app.use(express.json());

//sanitize data
app.use(xss());
app.use(mongoSanitize());


//routes
app.use('/api/v1', routes);


module.exports = app;
