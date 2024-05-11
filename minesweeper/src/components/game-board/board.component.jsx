import React, { useEffect, useState } from "react";
import "./game-board.css";
import createBoard from "../../helpers/createBoard";

function Board(props) {
  const [grid, setGrid] = useState([]);
  //   const [nonMineCount, setNonMineCount] = useState(0);
  //   const [mineLocations, setMineLocations] = useState([]);

  useEffect(() => {
    // Creating a board

    // Calling the function
    renderBoard();
  }, []);

  const renderBoard = () => {
    const newBoard = createBoard(props.rows, props.cols, props.bombs);
    console.log(newBoard);
    // setNonMineCount(props.rows * props.cols - props.bombs);
    // setMineLocations(newBoard.mineLocation);
    setGrid(newBoard.board);
  };

  return (
    <div className="gameBoard">
      {grid.map((singleRow) => {
        return (
          <div className="boardRow">
            {singleRow.map((singleBlock) => {
              return <div className="cell">{singleBlock.value}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
