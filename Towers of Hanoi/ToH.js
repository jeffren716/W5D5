const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TowersOfHanoi {
  constructor() {
    this.stacks = [[3,2,1],[],[]];
  }

  run(completionCallback) {
    // we ask the player for a move,
    // validate the move, process the move,
    // and then ask him again until all disks
    // are lined up in order
    // on either columns 2 or 3
    this.promptMoves((col1, col2) => {
      if(!this.move(col1, col2)) {
        console.log('invalid');
      }

      if(!this.isWon()) {
        this.run(completionCallback);
      } else {
        console.log('You win!');
        completionCallback();
      }
    });
  }

  promptMoves(callback) {
    this.print();

    reader.question('Please enter first column: ', (answer1) => {
      var col1 = parseInt(answer1) - 1;
      reader.question('Please enter second column: ', (answer2) => {
        var col2 = parseInt(answer2) - 1;
        callback.apply(this, [col1, col2]);
      });
    });
  }

  isValidMove(col1, col2) {
    if(col1 < 0 || col1 > 2 || col2 < 0 || col2 > 2) {
      return false;
    } else if(this.stacks[col1].length === 0) {
      return false;
    } else if(this.stacks[col2].length > 0 && (this.stacks[col1][this.stacks[col1].length-1] > this.stacks[col2][this.stacks[col2].length-1])) {
      return false;
    } else {
      return true;
    }
  }

  move(col1, col2) {
    if (this.isValidMove(col1, col2)) {
      this.stacks[col2].push(this.stacks[col1].pop());
      return true;
    } else {
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.stacks));
  }

  isWon() {
    if(JSON.stringify(this.stacks) === JSON.stringify([[], [3,2,1], []]) || JSON.stringify(this.stacks) === JSON.stringify([[], [], [3,2,1]])) {
      return true;
    }
    return false;
  }

}


const game = new TowersOfHanoi();
game.run(function() {
  reader.close();
});
// game.run(function () {
//   console.log('lol');
// });
