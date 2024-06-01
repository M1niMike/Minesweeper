import React, { useState, useEffect } from "react";
import GameBoard from "./../game-board/game-board.component";
import "./end-game.css";

function EndGameMenu(props) {
  const [bigMessage, setBigMessage] = useState("");
  const [message, setMessage] = useState("");
  const [tryAgain, setTryAgain] = useState(false);

  useEffect(() => {
    if (props.typeOfGameOver === 1) {
      setBigMessage("You lost!");
      setMessage("You clicked on a bomb!");
    } else if (props.typeOfGameOver === 2) {
      setBigMessage("You won");
      setMessage("You revealed all the cells");
    }
  }, [props.typeOfGameOver]);

  const handleTryAgain = () => {
    setTryAgain(true);
  };

  const renderGameBoard = () => {
    return (
      <GameBoard
        onQuitClick={props.onQuitClick}
        rows={props.rows}
        cols={props.cols}
        bombs={props.bombs}
      />
    );
  };

  return (
    <div>
      {tryAgain ? (
        renderGameBoard()
      ) : (
        <div>
          <div className="endGamePanel">
            <h3>{bigMessage}</h3>
            <h4>{message}</h4>
            <br />
            <div className="endGameInfo">
              <span>Flags placed 🚩: {props.flagCount}</span>
              <span>Timer ⏱: {props.finalTimer}</span>
              <span>Cells left: {props.leftCells}</span>
            </div>
          </div>
          <br />
          <div className="actionBar">
            <button className="btnBack" onClick={handleTryAgain}>
              Try again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EndGameMenu;
