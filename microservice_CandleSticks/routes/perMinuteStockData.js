'use strict';

const express = require('express');
const router = express.Router();
const {getStockData} = require('../utils/helperFunctions.js');

router.get('/', (req,res) => {
  console.dir(req, {depth:null});
  //currently uses string sent in by user
  const stockTicker = req.body.ticker;

  // 60000 is one minute
  const oneMinute = 60000;
  //current date is hardcoded to return data as markets are only open m-f, 8:30 a.m. to 4 p.m. cst
  const systemTime = new Date('Mon Jan 14 2022 15:00:00 GMT-0600');
  // ISO string is required by Alpaca
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

