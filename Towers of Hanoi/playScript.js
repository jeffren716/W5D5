const TowersOfHanoi = require("./ToH");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const game = new TowersOfHanoi();

var callback = function() {
  reader.question('Do you want to play again?', function(answer) {
    if(answer === 'yes') {
      const game2 = new TowersOfHanoi;
      game2.run(reader, callback);
    } else {
      reader.close();
    }
  });

};

game.run(reader, callback);
