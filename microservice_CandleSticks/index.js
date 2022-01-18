'use strict';

const http = require('http');
const app = require('./app');

const httpListenerPort = 4000

const httpServer = http.createServer(app).listen(httpListenerPort, ()=> {
  console.log('app is listening on localhost: ' + httpListenerPort);
});