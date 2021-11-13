'use strict';
const config = require('config');
const fetch = require('node-fetch');

const getStockData = async (ticker, start, end) => {
  const endpoint = config.alpacaEnpoint;
  const finalEndpoint = `${endpoint}/v1/bars/minute?symbols=${ticker}&start=${start}&end=${end}`
  let response
  try {
    response = await fetch(
      finalEndpoint,
      {
        headers: {
          'APCA-API-KEY-ID': process.env.ALPACAID,
          'APCA-API-SECRET-KEY': process.env.ALPACAAPIKEY,
        },
      }
    );
    console.log("return from fetch")
    console.log(response)
    return {
      status: 0,
      response
    };
  } catch (error) {
    console.log(error);
    return {
      status: 1,
      error
    };
  }
};

module.exports = {
  getStockData
};
