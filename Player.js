export default class {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  strike(opponent) {
    opponent.health =
      opponent.health >= this.attack ? opponent.health - this.attack : 0;
    document.getElementById(`${this.player}-attack-sound`).play();
    document.getElementById(`${opponent.player}-health-label`).textContent =
      opponent.health;
  }

  heal() {
    if (this.health >= 100) return;
    this.health += Math.ceil(Math.random() * 5);
    document.getElementById(`${this.player}-heal-sound`).play();
    document.getElementById(`${this.player}-health-label`).textContent =
      this.health;
  }
}
