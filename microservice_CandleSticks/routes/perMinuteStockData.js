'use strict';

const express = require('express');
const os = require('os');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('config');

router.get('/', (req,res) => {
  const stockTicker = req.body.stockTicker;
  //logic to figure out time,. NOTE: Alpaca uses ISOstring
  const oneMinute = 60000;
  const systemTime = new Date()
  const twoMinutesBefore = new Date(systemTime - (2 * oneMinute)).toISOString();
  const oneMinuteBefore = new Date(systemTime - oneMinute).toISOString();
  const endpoint = config.alpacaEnpoint;
  let response
  try {
      response = await fetch(`${endpoint}/v1/bars/minute?symbol=${stockTicker}&start${twoMinutesBefore}&end${oneMinuteBefore}`, {
      headers: {
        'APCA-API-KEY-ID': process.env.ALPACAID,
        'APCA-API-SECRET-KEY': process.env.ALPACAAPIKEY
      }
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
  if(response){
    return res.status(200).json(response)
  }else{
    return res.status(400).json({
      message: 'Successfully sent request to Alpaca but returned no data'
    })
  } 
});

module.exports = router;

