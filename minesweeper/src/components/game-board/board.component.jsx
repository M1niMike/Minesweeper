import React, { useEffect, useState, useCallback } from "react";
import "./game-board.css";
import createBoard from "../../helpers/createBoard";

function Board(props) {
  const [grid, setGrid] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  const renderBoard = useCallback(() => {
    const newBoard = createBoard(props.rows, props.cols, props.bombs);
    console.log(newBoard);
    console.log(isGameOver);
    setGrid(newBoard.board);
  }, [props.rows, props.cols, props.bombs, isGameOver]);

  useEffect(() => {
    renderBoard();
  }, [renderBoard]);

  const handleCellEvents = (e, x, y) => {
    console.log("Right Click");
    e.preventDefault();

    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].state++;

    if (newGrid[x][y].state > 3) {
      newGrid[x][y].state = 1;
    }

    console.log(newGrid[x][y]);
    setGrid(newGrid);
  };

  const handleCellReveal = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));

    if (newGrid[x][y].value === "X") {
      alert("mine found");
      setIsGameOver(true);
      console.log(isGameOver);
    } else {
      newGrid[x][y].isRevealed = true;
      setGrid(newGrid);
    }
  };

  return (
    <div className="gameBoard">
      {grid.map((row, rowIndex) => (
        <div className="boardRow" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div
              onContextMenu={(e) => handleCellEvents(e, cell.x, cell.y)}
              onClick={() => handleCellReveal(cell.x, cell.y)}
              className="cell"
              key={cellIndex}
            >
              {cell.isRevealed ? cell.value : ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
