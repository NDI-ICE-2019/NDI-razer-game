import { BATTLEFIELD } from 'constants/game';
import { randomRange } from 'helper/util';


export class Player {

  constructor(uuid) {
    console.log('hum', uuid);
    this._uuid = uuid;
    this._name = null;

    this._x = randomRange(0, BATTLEFIELD.MAX_X);
    this._y = randomRange(0, BATTLEFIELD.MAX_Y);

    this._gravitySpeed = 0;

    this._healtPoint = 0;
    this._damage = BATTLEFIELD.DEFAULT_DAMAGE;

    this._killCount = 0;
    this._deathCount = 0;

  }

  // Getter
  get uuid() {
    return this._uuid;
  }

  get getPlayerBasicInfo() {
    return {
      uuid: this._uuid,
      name: this._name,
      damage: this._damage
    };
  }

  get getPlayerInfo() {
    return {
      uuid: this._uuid,
      x: this._x,
      y: this._y,
      healtPoint: this._healtPoint,
      killCount: this._killCount,
      deathCount: this._deathCoung
    };
  }

  // Setter
  set uuid(uuid) {
    console.log('lol');
    this._uuid = uuid;
  }

  set name(name) {
    this._name = name;
  }

  // Method
  jump() {
  }

}
