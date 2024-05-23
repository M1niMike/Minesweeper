import React, { useEffect, useState, useCallback } from "react";
import "./game-board.css";
import createBoard from "../../helpers/createBoard";
import EndGameMenu from "../end-game/end-game.component";

function Board(props) {
  const [grid, setGrid] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  let [leftCells, setLeftCells] = useState(0);
  let [flagCount, setFlagCount] = useState(0);

  const renderBoard = () => {
    const newBoard = createBoard(props.rows, props.cols, props.bombs);
    setLeftCells(props.rows * props.cols - props.bombs);
    setGrid(newBoard.board);
  };

  useEffect(() => {
    renderBoard();
  }, [props.rows, props.cols, props.bombs]);

  const updateFlagCount = (newGrid, x, y) => {
    if (newGrid[x][y].state === 2) {
      flagCount++;
      setFlagCount(flagCount);
    }

    if (newGrid[x][y].state === 3) {
      flagCount--;
      setFlagCount(flagCount);
    }

    props.FlagCounterOnParent(flagCount);
  };

  const handleCellEvents = (e, x, y) => {
    console.log("Right Click");
    e.preventDefault();

    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[x][y].state++;

    updateFlagCount(newGrid, x, y);

    if (newGrid[x][y].state > 3) {
      newGrid[x][y].state = 1;
    }

    console.log(flagCount);
    console.log(newGrid[x][y]);
    setGrid(newGrid);
  };

  const handleCellReveal = (x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid));

    if (!newGrid[x][y].isRevealed && newGrid[x][y].value !== "X") {
      leftCells--;
      setLeftCells(leftCells);

      if (leftCells === 0) {
        alert("Game over");
      }
    }

    if (newGrid[x][y].value === "X") {
      alert("mine found");
      newGrid.forEach((row) => {
        row.forEach((cell) => {
          if (cell.value === "X") {
            cell.isRevealed = true;
          }
        });
      });
      //setIsGameOver(true);
    } else {
      newGrid[x][y].isRevealed = true;
    }

    setGrid(newGrid);
  };

  const setCellContent = (cell) => {
    if (!cell.isRevealed) {
      if (cell.state === 2) {
        return "🚩";
      } else if (cell.state === 3) {
        return "❔";
      } else if (cell.state === 1) {
        return "";
      }
    } else if (cell.value === "X") {
      return "💣";
    } else {
      return cell.value;
    }
  };

  // const cellStyle = {
  //   background: cell.isRevealed,
  // };

  return (
    <div>
      {isGameOver ? (
        <EndGameMenu />
      ) : (
        <div className="gameBoard">
          <span>TESTE CELL: {leftCells}</span>
          {grid.map((row, rowIndex) => (
            <div className="boardRow" key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <div
                  onContextMenu={(e) => handleCellEvents(e, cell.x, cell.y)}
                  onClick={() => handleCellReveal(cell.x, cell.y)}
                  className="cell"
                  key={cellIndex}
                >
                  {setCellContent(cell)}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Board;

// const cellStyle = {
//   background
// }
