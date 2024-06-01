/* eslint-disable import/no-anonymous-default-export */
export default (_rows, _cols, _bombs) => {
  let board = [];

  /*---BUILD BOARD---*/
  for (let x = 0; x < _rows; x++) {
    let row = [];
    for (let y = 0; y < _cols; y++) {
      row.push({
        value: 0,
        x: x,
        y: y,
        isRevealed: false,
        state: 1,
      });
    }
    board.push(row);
  }

  /*---SET BOMBS RANDOM---*/
  let bombCount = 0;
  while (bombCount < _bombs) {
    let x = randomNum(0, _rows - 1);
    let y = randomNum(0, _cols - 1);

    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      bombCount++;
    }
  }

  /*---SET NUMBERS ON CELLS ABOUT BOMBS---*/
  for (let x = 0; x < _rows; x++) {
    for (let y = 0; y < _cols; y++) {
      //se encontrar uma bomba, nao faz nada
      if (board[x][y].value === "X") {
        continue;
      }

      // Em cima
      //verifica se nao esta na primeira linha && verifica se a uma bomba acima
      if (x > 0 && board[x - 1][y].value === "X") {
        board[x][y].value++;
      }

      // Canto superior esquerdo
      // verifica se nao esta na primeira linha && verifica se nao esta na primeira coluna && verifica a posicao
      if (x > 0 && y > 0 && board[x - 1][y - 1].value === "X") {
        board[x][y].value++;
      }

      // canto superior direito
      // verifica se nao esta na primeira linha && verifica se nao esta na ultima coluna && verifica a posição
      if (x > 0 && y < _cols - 1 && board[x - 1][y + 1].value === "X") {
        board[x][y].value++;
      }

      // esquerda
      //verifica se nao esta na primeira coluna && verifica posiçao
      if (y > 0 && board[x][y - 1].value === "X") {
        board[x][y].value++;
      }

      // direita
      // verifica se nao esta na ultima coluna && verifica a posição
      if (y < _cols - 1 && board[x][y + 1].value === "X") {
        board[x][y].value++;
      }

      // embaixo
      // verifica se nao esta na ultima linha && verifica a posição
      if (x < _rows - 1 && board[x + 1][y].value === "X") {
        board[x][y].value++;
      }

      // canto inferior esquerdo
      //verifica se nao esta na ultima linha && verifica se nao esta na primeira coluna && verifica posição
      if (x < _rows - 1 && y > 0 && board[x + 1][y - 1].value === "X") {
        board[x][y].value++;
      }

      // canto inferior direito
      // verifica se nao esta na ultima linha && verificna se nao esta na ultima coluna && verifica posicao
      if (x < _rows - 1 && y < _cols - 1 && board[x + 1][y + 1].value === "X") {
        board[x][y].value++;
      }
    }
  }

  return { board };
};

function randomNum(min = 0, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
