'use strict';

const express = require('express');
const router = express.Router();
const {getAccountData} = require('../utils/helperFunctions.js');

router.get('/', (req,res) => {
  
  getAccountData().then(response => {
    res.status(200).json(response)
  })
  .catch(error => {
    res.status(400).json(error)
  })
});

module.exports = router;

