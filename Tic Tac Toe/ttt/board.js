class Board {
  constructor() {
    var array = [[],[],[]];
    this.grid = [array, array, array];
  }

  print() {
    this.grid.forEach(function(array) {
      console.log(JSON.stringify(array));
    });
  }
}

module.exports = Board;
