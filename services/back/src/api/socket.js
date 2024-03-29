import { Battlefield } from 'models/battlefield';
import { Player } from 'models/player';

import { v4 as uuidv4 } from 'uuid';


export class Socket {

  constructor(server) {

    let battlefield = new Battlefield();

    // socket.io setup
    var io = require('socket.io').listen(server);
    io.on('connection', socket => {
      console.log('a user connected');
  
      let player = new Player(uuidv4());
      battlefield.addPlayer(player);
  
      socket.on('player name', name => {
        player.name = name;
      });

      socket.on('up', () => {
        player.jump();
      });
  
      socket.on('test', msg => {
        console.log('received', msg);
        socket.broadcast.emit('test callback', msg);
      });
  
      socket.on('disconnect', () => {
        console.log('user disconnected');
        battlefield.removePlayer(player);
      });
    });
  }

};
