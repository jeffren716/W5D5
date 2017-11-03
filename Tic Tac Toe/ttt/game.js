const Board = require("./board");


class Game {
  constructor() {
    this.board = new Board();
  }

  run(read, completionCallback) {
    this.reader = read;

  }

  won() {

  }

  winner() {

  }

  empty() {

  }

  place_mark(pos, mark) {

  }
}

module.exports = Game;
