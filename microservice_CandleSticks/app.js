'use strict';

const express = require('express')
const app = express()

const basePath = '/api/v1'

// Sanitization
app.use(require('sanitize').middleware)

// APPLICATION ROUTES
const health = require('./routes/health');
app.use(basePath + '/health', health);

const perMinuteStockData = require('./routes/perMinuteStockData');
app.use(basePath + '/stockdata', perMinuteStockData);

module.exports = app;

