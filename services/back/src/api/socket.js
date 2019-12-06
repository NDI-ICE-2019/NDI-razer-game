import { Battlefield } from 'models/battlefield';
import { Player } from 'models/player';

import { v4 as uuidv4 } from 'uuid';

export class Socket {

  constructor(server) {
    // socket.io setup
    var io = require('socket.io').listen(server);
    io.of('/game').on('connection', socket => {
      console.log('a user connected');
  
      let player = new Player(uuidv4());
      battlefield.addPlayer(player);
  
      socket.on('player name', name => {
          player.name = name;
      });
  
      socket.on('test', msg => {
          socket.broadcast.emit('chat message', msg);
      });
  
      socket.on('chat message', msg => {
          console.log('received')
      });
  
      socket.on('disconnect', () => {
          console.log('user disconnected');
          battlefield.removePlayer(player);
      });
    });
  }

};
