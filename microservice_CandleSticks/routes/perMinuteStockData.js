'use strict';

const express = require('express');
const router = express.Router();
const {getStockData} = require('../utils/helperFunctions.js');

router.get('/', (req,res) => {
  console.dir(req, {depth:null});
  const stockTicker = req.body.stockTicker;
  //logic to figure out time,. NOTE: Alpaca uses ISOstring
  const oneMinute = 60000;
  const systemTime = new Date()
  const twoMinutesBefore = new Date(systemTime - (2 * oneMinute)).toISOString();
  const oneMinuteBefore = new Date(systemTime - oneMinute).toISOString();
  
  let response = getStockData(stockTicker, twoMinutesBefore, oneMinuteBefore)
  
  if(response){
    return res.status(200).json(response)
  }else{
    return res.status(400).json({
      message: 'Successfully sent request to Alpaca but returned no data'
    })
  } 
});

module.exports = router;

