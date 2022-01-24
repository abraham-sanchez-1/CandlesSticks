'use strict';

const http = require('http');
const app = require('./app');
const {parse} = require('url');
// const websockets = require('websockets')
const WebSocket = require('ws');

const httpListenerPort = 4000;

const httpServer = http.createServer(app);

const wss1 = new WebSocket.Server({ noServer: true});

wss1.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log('received: %s', data);
    ws.send(`Message received -> ${data}`)
  });
  console.log('A user has connected to WebSocket service')
  ws.send('You have connected to CWS: CandleSticks WebSocket Service');
});

wss1.on('close', (ws) => {
  ws.send('Closing CWS Connection');
})

httpServer.on('upgrade', (request, socket, head) => {
  const {pathname} = parse(request.url);
  if(pathname === '/livedata'){
    wss1.handleUpgrade(request, socket, head, (ws) => {
      wss1.emit('connection', ws, request);
    });
  }else{
    socket.destroy();
  }
})

httpServer.listen(httpListenerPort, ()=> {
  console.log('app is listening on localhost: ' + httpListenerPort);
});

