const Board = require("./board");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




class Game {
  constructor(read) {
    this.reader = read;
    this.board = new Board();
  }

  run(reader, completionCallback) {
    
  }
}


const game = new Game(reader);
