'use strict';

const express = require('express');
const router = express.Router();
const {placeOrder} = require('../utils/helperFunctions.js');

router.get('/', (req,res) => {
  const ticker = req.body.ticker;
  // there is a way to buy dollar amount, we will focus on qty for now
  const quantity = req.body.quantity;
  // to buy or not to buy, options -> (string) buy/sell
  const side = req.body.side;
  const type = req.body.type;
  const timeInForce = req.body.timeInForce;

  placeOrder(ticker, quantity, side, type, timeInForce).then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    res.status(400).json(error)
  })
});

module.exports = router;

