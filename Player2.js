import Player from './Player.js';

export default class extends Player {
  player = 'p2';
  constructor(name, health, attack) {
    super(name, health, attack);
  }
}
