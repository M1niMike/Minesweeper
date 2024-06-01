import React, { useState } from "react";
import "./config-menu.css";
import GameBoard from "./../game-board/game-board.component";

function ConfigMenu(props) {
  /*---RETURN BTN---*/
  const handleReturnClick = () => {
    props.onReturnClick();
  };

  /*---GAME-MODES BTNs---*/
  const [isGameModeChoose, setIsGameModeChoose] = useState(false);

  const handleGameMode = (level) => {
    setSelectedLevel(level);
    setIsGameModeChoose(true);
  };

  const handleReturnConfigMenu = () => {
    setIsGameModeChoose(false);
  };

  /*---SELECT LEVEL---*/
  const [selectedLevel, setSelectedLevel] = useState(null);

  const boardConfig = {
    easy: { rows: 9, cols: 9, bombs: 10 },
    normal: { rows: 16, cols: 16, bombs: 40 },
    hard: { rows: 16, cols: 30, bombs: 99 },
  };

  const handleLevelSelect = () => {
    const config = boardConfig[selectedLevel];

    return (
      <GameBoard
        onQuitClick={handleReturnConfigMenu}
        rows={config.rows}
        cols={config.cols}
        bombs={config.bombs}
      />
    );
  };

  return (
    <div>
      {isGameModeChoose ? (
        handleLevelSelect()
      ) : (
        <div className="innerPanel">
          <div className="gameModePanel">
            <span className="textMode">Difficulty</span>
            <button className="modeEasy" onClick={() => handleGameMode("easy")}>
              Easy
            </button>
            <button
              className="modeNormal"
              onClick={() => handleGameMode("normal")}
            >
              Normal
            </button>
            <button className="modeHard" onClick={() => handleGameMode("hard")}>
              Hard
            </button>
          </div>
          <div className="actionBar">
            <button className="btnBack" onClick={handleReturnClick}>
              Go back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfigMenu;
