import { BATTLEFIELD } from 'constants/game';


export class Battlefield {

  constructor() {
    this.players = {};
  }

  // Getter

  // Setter

  // Method
  addPlayer(player) {
    this.players[player.uuid] = player;
  }

  removePlayer(player) {
    delete this.players[player.uuid];
  }

}
