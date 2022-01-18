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
app.use(basePath + '/health', health);

const accountData = require('./routes/accountData')
const perMinuteStockData = require('./routes/perMinuteStockData');

app.use(basePath + '/accountdata', accountData)
app.use(basePath + '/stockdata', perMinuteStockData);


module.exports = app;

