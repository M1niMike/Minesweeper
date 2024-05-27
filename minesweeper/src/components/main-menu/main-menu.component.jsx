/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "./main-menu.css";
import ConfigMenu from "../config-menu/config-menu.component";

function MainMenu() {
  /*TRATAMENTO DO BOTAO START (ABRE NOVO COMPONENT)*/
  const [isStarted, setIsStarted] = useState(false);

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const handleReturnClick = () => {
    setIsStarted(false);
  };
  /*TRATAMENTO DO BOTAO START (ABRE NOVO COMPONENT)*/

  let mineIcon = require("../../assets/images/Mine-Icon.png");
  let flagIcon = require("../../assets/images/Flag-Icon.png");

  return (
    <div className="panel">
      <div className="logo">
        <div className="row">
          <div className="col">
            <img className="mineIcon" src={mineIcon} alt="image not found" />
          </div>
          <div className="col-6">
            <span>MINESWEEPER</span>
          </div>
          <div className="col">
            <img className="flagIcon" src={flagIcon} alt="image not found" />
          </div>
        </div>
      </div>

      {isStarted ? (
        <ConfigMenu onReturnClick={handleReturnClick} />
      ) : (
        <div className="actionBtns">
          <button className="btnPlay" onClick={handleStartClick}>
            Start Game
          </button>
          {/* <button className="btnScoreboard">Scoreboard</button>
          <button className="btnAbout">About Us</button> */}
        </div>
      )}

      <div className="footer">
        <span>Linguagem Script 23/24 - Micael Eid | Carlos Lima</span>
      </div>
    </div>
  );
}

export default MainMenu;
