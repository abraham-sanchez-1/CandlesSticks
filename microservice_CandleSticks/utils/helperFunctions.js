'use strict';
const axios = require('axios');
const config = require('config');
const dotenv = require('dotenv');
dotenv.config();

const endpoint = config.alpacaEnpoint;
const paperId = process.env.PAPERAPIKEYID;
const paperKey = process.env.PAPERSECRETKEY;

const getStockData = async (ticker, start, end) => {
  const finalEndpoint = `${endpoint}/v1/bars/minute?symbols=${ticker}&start=${start}&end=${end}`
  return axios
  .get(finalEndpoint, {
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

const getAccountData = async () => {
  const finalEndpoint = `${endpoint}/v2/account`
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
  getAccountData
};
