const Game = require("./game");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const game = new Game();

var callback = function() {
  reader.question('Do you want to play again?', function(answer) {
    if(answer === 'yes') {
      const game2 = new Game;
      game2.run(reader, callback);
    } else {
      reader.close();
    }
  });
};

game.run(reader, callback);
