'use strict';
const axios = require('axios');
const config = require('config');
const dotenv = require('dotenv');
dotenv.config();

const endpoint = config.alpacaEnpoint;
const stockDataEndpoint = config.dataAlpacaEndpoint;
const paperId = process.env.PAPERAPIKEYID;
const paperKey = process.env.PAPERSECRETKEY;
const stageId = process.env.ALPACAID;
const stageKey = process.env.ALPACAAPIKEY;

const getStockData = async (ticker, start, end) => {
  // /v2/stocks/{symbol}/bars
  const finalEndpoint = `${stockDataEndpoint}/stocks/${ticker}/bars?start=${start}&end=${end}&timeframe=1Min`
  //const finalEndpoint = `${endpoint}/v2/stocks/minute?symbols=${ticker}&start=${start}&end=${end}`
  return axios
  .get(finalEndpoint, {
    headers: {
      'APCA-API-KEY-ID': stageId,
      'APCA-API-SECRET-KEY': stageKey,
    }, 
    timeout: 5000
  })
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return error.message;
  })
};

const placeOrder = async (ticker, quantity, side, type, timeInForce ) => {
  const requestBody = {
    "symbol": ticker,
    "qty": quantity,
    "side": side,
    "type": type,
    "timeInForce": timeInForce
  }
  // /v2/stocks/{symbol}/bars
  const finalEndpoint = `${endpoint}/stocks/orders`
  return axios
  .get(finalEndpoint, requestBody, {
    headers: {
      'APCA-API-KEY-ID': paperId,
      'APCA-API-SECRET-KEY': paperKey,
    }, 
    timeout: 5000
  })
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return error.message;
  })
};

const getAccountData = async () => {
  const finalEndpoint = `${endpoint}/account`
  return axios.get(finalEndpoint, {
    headers: {
      'APCA-API-KEY-ID': paperId,
      'APCA-API-SECRET-KEY': paperKey,
    },
    timeout: 5000
  })
  .then(response => {
    return response.data;
  })
  .catch(error => {
    return error;
  })
};

module.exports = {
  getStockData, 
  getAccountData,
  placeOrder
};
