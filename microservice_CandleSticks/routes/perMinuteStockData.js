'use strict';

const express = require('express');
const os = require('os');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('config');

router.get('/', (req,res) => {
  const stockTicker = req.body.stockTicker;
  const endpoint = config.alpacaEnpoint;
  return res.json({
    'Node Host': os.hostname(),
    'Message': 'CandleSticks Microservice currently up and running'
  })
});

module.exports = router;

