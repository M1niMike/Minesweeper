import React, { useState } from "react";
import Board from "./board.component";
import EndGameMenu from "./../end-game/end-game.component";
import "./game-board.css";
import Timer from "../../helpers/timer";

function GameBoard(props) {
  let [flagCount, setFlagCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [leftCells, setLeftCells] = useState(0);
  const [typeOfGameOver, setTypeOfGameOver] = useState(0);
  const { seconds, stopTimer } = Timer();

  const handleReturnConfigMenu = () => {
    props.onQuitClick();
  };

  const getFlagCountFromChild = (Count) => {
    setFlagCount(Count);
  };

  const getIsGameOverFromChild = (gameOver, leftCells, typeOfGameOver) => {
    stopTimer();
    setLeftCells(leftCells);
    setTypeOfGameOver(typeOfGameOver);
    setIsGameOver(gameOver);
  };

  return (
    <div className="innerPanel">
      {isGameOver ? (
        <EndGameMenu
          flagCount={flagCount}
          finalTimer={seconds}
          leftCells={leftCells}
          typeOfGameOver={typeOfGameOver}
          rows={props.rows}
          cols={props.cols}
          bombs={props.bombs}
          onQuitClick={props.onQuitClick}
        />
      ) : (
        <div>
          <div className="gamePanel">
            <span>⏱: {seconds}</span>
            <span>💣: {props.bombs}</span>
            <span>🚩: {flagCount}</span>
          </div>
          <Board
            rows={props.rows}
            cols={props.cols}
            bombs={props.bombs}
            flagCounterToParent={getFlagCountFromChild}
            isGameOverToParent={getIsGameOverFromChild}
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
