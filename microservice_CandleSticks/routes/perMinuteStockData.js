'use strict';

const express = require('express');
const router = express.Router();
const {getStockData} = require('../utils/helperFunctions.js');

router.get('/', (req,res) => {
  console.dir(req, {depth:null});
  const stockTicker = req.body.ticker;
  //logic to figure out time,. NOTE: Alpaca uses ISOstring
  const oneMinute = 60000;
  const systemTime = new Date()
  const twoMinutesBefore = new Date(systemTime - (2 * oneMinute)).toISOString();
  const oneMinuteBefore = new Date(systemTime - oneMinute).toISOString();
  getStockData(stockTicker, twoMinutesBefore, oneMinuteBefore).then(response => {
    res.status(200).json(response);
  })
  .catch(error => {
    res.status(400).json(error)
  })
  // let response = getStockData(stockTicker, twoMinutesBefore, oneMinuteBefore)
  // getAccountData().then(response => {
  //   res.status(200).json(response)
  // })
  // .catch(error => {
  //   res.status(400).json(error)
  // })
});

module.exports = router;

