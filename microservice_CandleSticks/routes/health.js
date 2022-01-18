'use strict';

const express = require('express');
const os = require('os');
const router = express.Router();

router.get('/', (req,res) => {
  return res.json({
    'Node Host': os.hostname(),
    'Message': 'CandleSticks Microservice currently up and running'
  })
})

module.exports = router;

