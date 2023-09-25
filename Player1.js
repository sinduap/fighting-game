import Player from './Player.js';

export default class extends Player {
  player = 'p1';
  constructor(name, health, attack) {
    super(name, health, attack);
  }
}
