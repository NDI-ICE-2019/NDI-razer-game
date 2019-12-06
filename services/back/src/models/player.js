import { BATTLEFIELD } from 'constants/game';
import { randomRange } from 'helper/util';


export class Player {

  constructor(uuid) {
    this.uuid = uuid;
    this.name = null;

    this.x = randomRange(0, BATTLEFIELD.MAX_X);
    this.y = randomRange(0, BATTLEFIELD.MAX_Y);

    this.gravitySpeed = 0;

    this.healtPoint = 0;
    this.damage = BATTLEFIELD.DEFAULT_DAMAGE;

    this.killCount = 0;
    this.deathCount = 0;

  }

  // Getter
  get uuid() {
    return this.uuid;
  }

  get name() {
    return this.name;
  }

  get playerBasicInfo() {
    return {
      uuid: this.uuid,
      name: this.name,
      damage: this.damage
    };
  }

  get playerInfo() {
    return {
      uuid: this.uuid,
      x: this.x,
      y: this.y,
      healtPoint: this.healtPoint,
      killCount: this.killCount,
      deathCount: this.deathCoung
    };
  }

  // Setter
  set name(name) {
    this.name = name;
  }

  // Method
  jump() {

  }

}
