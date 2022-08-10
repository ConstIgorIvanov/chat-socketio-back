const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const rooms = new Map();

io.on('connection', (socket) => {
  console.log('userConnectted');
});

app.get('/', (req, res) => {
  rooms.set('users', ['Message']);
  rooms.set('messages', ['firstMessage']);
  res.json(rooms);
});

server.listen(3001, () => {
  console.log('Server Started');
});
