import React from "react";
import Board from "./board.component";
import "./game-board.css";

function GameBoard(props) {
  const handleReturnConfigMenu = () => {
    props.onQuitClick();
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
        <span>
          TIMER:
          <p>BOMBS:{props.bombs}</p>
        </span>
        <Board rows={props.rows} cols={props.cols} bombs={props.bombs} />
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
