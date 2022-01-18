'use strict';

const express = require('express');
const router = express.Router();
const {getStockData} = require('../utils/helperFunctions.js');

router.get('/', (req,res) => {
  console.dir(req, {depth:null});
  const stockTicker = req.body.ticker;
   //logic to figure out time,. NOTE: Alpaca uses ISOstring
  // 60000 is one minute
  const oneMinute = 600000;
  const systemTime = new Date('Mon Jan 14 2022 15:00:00 GMT-0600');
  const start = new Date(systemTime - (2 * oneMinute)).toISOString();
  const end = new Date(systemTime - oneMinute).toISOString();
  getStockData(stockTicker, start, end).then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(400).json(error)
  })
});

module.exports = router;

