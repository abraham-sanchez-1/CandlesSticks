'use strict';

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const basePath = '/api/v1'

// Configurations of server
app.use(express.json())
app.use(require('sanitize').middleware)


// APPLICATION ROUTES
const health = require('./routes/health');
const accountData = require('./routes/accountData');
const perMinuteStockData = require('./routes/perMinuteStockData');
const placeOrder = require('./routes/placeOrder');

app.use(basePath + '/health', health);
app.use(basePath + '/accountdata', accountData);
app.use(basePath + '/stockdata', perMinuteStockData);
app.use(basePath + '/placeorder', placeOrder);


module.exports = app;

