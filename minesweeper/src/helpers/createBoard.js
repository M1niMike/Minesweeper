/* eslint-disable import/no-anonymous-default-export */
export default (_rows, _cols, _bombs) => {
  let board = [];
  let mineLocation = [];

  /*---BUILD BOARD---*/
  for (let x = 0; x < _rows; x++) {
    let row = [];
    for (let y = 0; y < _cols; y++) {
      row.push({
        value: 0,
        x: x,
        y: y,
        isFound: false,
        isTagged: false,
      });
    }
    board.push(row);
  }

  /*---BUILD BOARD---*/

  /*---SET BOMBS RANDOM---*/
  let bombCount = 0;
  while (bombCount < _bombs) {
    let x = randomNum(0, _rows - 1);
    let y = randomNum(0, _cols - 1);

    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      mineLocation.push([x, y]);
      bombCount++;
    }
  }

  /*---SET BOMBS RANDOM---*/

  /*---SET NUMBERS ON CELLS ABOUT BOMBS---*/
  //   for (let row = 0; row < _rows; row++) {
  //     for (let col = 0; col < _cols; col++) {
  //       if (board[row][col].value === "X") {
  //         continue;
  //       }

  //       // Top
  //       if (row > 0 && board[row - 1][col].value === "X") {
  //         board[row][col].value++;
  //       }

  //       // Top Right
  //       if (row > 0 && col < _cols - 1 && board[row - 1][col + 1].value === "X") {
  //         board[row][col].value++;
  //       }

  //       // Right
  //       if (col < _cols - 1 && board[row][col + 1].value === "X") {
  //         board[row][col].value++;
  //       }

  //       // Botoom Right
  //       if (
  //         row < _rows - 1 &&
  //         col < _cols - 1 &&
  //         board[row + 1][col + 1].value === "X"
  //       ) {
  //         board[row][col].value++;
  //       }

  //       // Bottom
  //       if (row < _rows - 1 && board[row + 1][col].value === "X") {
  //         board[row][col].value++;
  //       }

  //       // Bottom Left
  //       if (row < _rows - 1 && col > 0 && board[row + 1][col - 1].value === "X") {
  //         board[row][col].value++;
  //       }

  //       // LEft
  //       if (col > 0 && board[row][col - 1].value === "X") {
  //         board[row][col].value++;
  //       }

  //       // Top Left
  //       if (row > 0 && col > 0 && board[row - 1][col - 1].value === "X") {
  //         board[row][col].value++;
  //       }
  //     }
  //   }
  /*---SET NUMBERS ON CELLS ABOUT BOMBS---*/

  return { board, mineLocation };
};

function randomNum(min = 0, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
