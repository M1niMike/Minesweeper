import React, { useState } from "react";
import Board from "./board.component";
import "./game-board.css";

function GameBoard(props) {
  let [flagCount, setFlagCount] = useState(0);

  const handleReturnConfigMenu = () => {
    props.onQuitClick();
  };

  const getFlagCountFromChild = (Count) => {
    setFlagCount(Count);
  };

  //   const handleReturnClick = () => {
  //     setIsGameModeChoose(false);
  //   };

  return (
    <div className="innerPanel">
      <span>
        GAME BOARD COMPONENT WORKS!!! {props.rows} e {props.cols}
      </span>

      <div className="gamePanel">
        <span>⏱:</span>
        <span>💣: {props.bombs}</span>
        <span>🚩: {flagCount}</span>
        <Board
          rows={props.rows}
          cols={props.cols}
          bombs={props.bombs}
          FlagCounterOnParent={getFlagCountFromChild}
        />
      </div>

      <div className="actionBar">
        <button className="btnBack" onClick={handleReturnConfigMenu}>
          Quit
        </button>
      </div>
    </div>
  );
}

export default GameBoard;
