import React, { useCallback, useEffect, useState } from "react";
import "./game-board.css";
import createBoard from "../../helpers/createBoard";

function Board(props) {
  const [grid, setGrid] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  let [leftCells, setLeftCells] = useState(0);
  let [flagCount, setFlagCount] = useState(0);

  const renderBoard = useCallback(() => {
    const newBoard = createBoard(props.rows, props.cols, props.bombs);
    setLeftCells(props.rows * props.cols - props.bombs);
    setGrid(newBoard.board);
  }, [props.rows, props.cols, props.bombs]);

  useEffect(() => {
    renderBoard();
  }, [renderBoard]);

  const updateFlagCount = (newGrid, x, y) => {
    if (newGrid[x][y].state === 2) {
      flagCount++;
      setFlagCount(flagCount);
    }

    if (newGrid[x][y].state === 3) {
      flagCount--;
      setFlagCount(flagCount);
    }

    props.flagCounterFromParent(flagCount);
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

    if (newGrid[x][y].isRevealed || isGameOver) {
      return;
    }

    if (!newGrid[x][y].isRevealed && newGrid[x][y].value !== "X") {
      leftCells--;
      setLeftCells(leftCells);

      newGrid[x][y].isRevealed = true;

      if (leftCells === 0) {
        alert("Game over");
        setIsGameOver(true);
        setTimeout(() => {
          props.isGameOverFromParent(true);
        }, 800);
      }

      setGrid(newGrid);
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
      setGrid(newGrid);
      setIsGameOver(true);
      setTimeout(() => {
        props.isGameOverFromParent(true);
      }, 800);
    }
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

  return (
    <div>
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
    </div>
  );
}

export default Board;

// const cellStyle = {
//   background
// }
