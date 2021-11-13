'use strict';
const config = require('config');
const fetch = require('node-fetch');

const getStockData = async (ticker, start, end) => {
  const endpoint = config.alpacaEnpoint;
  try {
    response = await fetch(
      `${endpoint}/v1/bars/minute?symbol=${ticker}&start${start}&end${end}`,
      {
        headers: {
          'APCA-API-KEY-ID': process.env.ALPACAID,
          'APCA-API-SECRET-KEY': process.env.ALPACAAPIKEY,
        },
      }
    );
  } catch (error) {
    console.log(error);
    return error.json();
  }
};

module.exports = getStockData;
