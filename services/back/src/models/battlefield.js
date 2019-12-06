import { BATTLEFIELD } from 'constants/game';


export class Battlefield {

  constructor() {
    this._players = {};
  }

  // Getter

  // Setter

  // Method
  addPlayer(player) {
    this._players[player.uuid] = player;
  }

  removePlayer(player) {
    delete this._players[player.uuid];
  }

}
