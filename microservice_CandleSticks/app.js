'use strict';

const express = require('express')
const app = express()

const basePath = '/api/v1'

// APPLICATION ROUTES
const health = require('./routes/health');
app.use('/health', health);

const perMinuteStockData = require('./routes/perMinuteStockData');
app.use('/stockData', perMinuteStockData);

module.exports = app;

