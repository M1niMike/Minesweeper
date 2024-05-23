import React, { useState } from "react";
import "./config-menu.css";
import GameBoard from "./../game-board/game-board.component";

function ConfigMenu(props) {
  /*---RETURN BTN---*/
  const handleReturnClick = () => {
    props.onReturnClick();
  };
  /*---RETURN BTN---*/

  /*---GAME-MODES BTNs---*/
  const [isGameModeChoose, setIsGameModeChoose] = useState(false);

  /*
  recebe o nivel como argumento e da set a selectedLevel ('easy' or 'normal' or 'hard')
  da set a flag isGameModeChoose para chamar a funcao handleLevelSelect
  */
  const handleGameMode = (level) => {
    setSelectedLevel(level);
    setIsGameModeChoose(true);
  };

  const handleReturnConfigMenu = () => {
    setIsGameModeChoose(false);
  };
  /*---GAME-MODES BTNs---*/

  /*---SELECT LEVEL---*/
  const [selectedLevel, setSelectedLevel] = useState(null);

  /*
  define as props (rows e cols) para o component gameBoard
  */
  const boardConfig = {
    easy: { rows: 5, cols: 5, bombs: 1 },
    normal: { rows: 16, cols: 16, bombs: 40 },
    hard: { rows: 30, cols: 16, bombs: 99 },
  };

  /*
    retorna o component gameBoard com rows e cols, de acordo com o nivel selecionado
  */
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

  /*---SELECT LEVEL---*/
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
