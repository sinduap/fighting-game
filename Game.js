export default class {
  isOver = false;

  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    document.getElementById('p1-name-label').textContent = this.player1.name;
    document.getElementById('p2-name-label').textContent = this.player2.name;
  }

  simulate() {
    while (!this.isOver) {
      this.player1.heal();
      this.player2.heal();
      this.player1.strike(this.player2);
      this.player2.strike(this.player1);
      this.update();
    }
  }

  update() {
    if (this.player1.health === 0 || this.player2.health === 0) {
      this.isOver = true;
      this.displayWinner();
    }
  }

  reset() {
    this.isOver = false;
    this.player1.health = 100;
    this.player2.health = 100;

    document.getElementById('p1-health-label').textContent =
      this.player1.health;
    document.getElementById('p2-health-label').textContent =
      this.player2.health;

    document.getElementById('result-label').textContent = '';
  }

  displayWinner() {
    document.getElementById('result-label').textContent = `The winner is ${
      this.player1.health > this.player2.health
        ? this.player1.name
        : this.player2.name
    }`;

    document.getElementById('victory-sound').play();
  }
}
