import Game from './Game.js';
import Player1 from './Player1.js';
import Player2 from './Player2.js';

const game = new Game(
  new Player1('Sindu', 100, 15),
  new Player2('Arief', 100, 15)
);

document
  .getElementById('simulate-button')
  .addEventListener('click', function () {
    game.simulate();
  });

document.getElementById('reset-button').addEventListener('click', function () {
  game.reset(new Player1('Sindu', 100, 15), new Player2('Arief', 100, 15));
});

document
  .getElementById('p1-attack-button')
  .addEventListener('click', function () {
    if (game.isOver) return;
    game.player1.strike(game.player2);
    game.update();
  });

document
  .getElementById('p2-attack-button')
  .addEventListener('click', function () {
    if (game.isOver) return;
    game.player2.strike(game.player1);
    game.update();
  });

document
  .getElementById('p1-heal-button')
  .addEventListener('click', function () {
    if (game.isOver) return;
    game.player1.heal();
  });

document
  .getElementById('p2-heal-button')
  .addEventListener('click', function () {
    if (game.isOver) return;
    game.player2.heal();
  });

document.addEventListener('keydown', function (e) {
  if (game.isOver) return;
  switch (e.key.toLowerCase()) {
    case 'q':
      game.player1.strike(game.player2);
      game.update();
      break;
    case 'a':
      game.player1.heal();
      break;
    case 'p':
      game.player2.strike(game.player1);
      game.update();
      break;
    case 'l':
      game.player2.heal();
      break;
    default:
      break;
  }
});
