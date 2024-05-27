import React, { useState } from "react";
import Board from "./board.component";
import EndGameMenu from "./../end-game/end-game.component";
import "./game-board.css";
import Timer from "../../helpers/timer";

function GameBoard(props) {
  let [flagCount, setFlagCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleReturnConfigMenu = () => {
    props.onQuitClick();
  };

  const getFlagCountFromChild = (Count) => {
    setFlagCount(Count);
  };

  const getisGameOverFromChild = (gameOver) => {
    setIsGameOver(gameOver);
  };

  //   const handleReturnClick = () => {
  //     setIsGameModeChoose(false);
  //   };

  return (
    <div className="innerPanel">
      {isGameOver ? (
        <EndGameMenu flagCount={flagCount} />
      ) : (
        <div>
          <div className="gamePanel">
            <span>
              ⏱:
              <Timer />
            </span>
            <span>💣:{props.bombs}</span>
            <span>🚩:{flagCount}</span>
          </div>
          <Board
            rows={props.rows}
            cols={props.cols}
            bombs={props.bombs}
            flagCounterFromParent={getFlagCountFromChild}
            isGameOverFromParent={getisGameOverFromChild}
          />

          <div className="actionBar">
            <button className="btnBack" onClick={handleReturnConfigMenu}>
              Quit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameBoard;
