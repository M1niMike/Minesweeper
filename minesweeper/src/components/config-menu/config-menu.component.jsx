import React from "react";
import "./config-menu.css";

function ConfigMenu({ onReturnClick }) {
  const handleReturnClick = () => {
    onReturnClick();
  };

  return (
    <div className="configPanel">
      <span>COMPONENT "CONFIG-MENU" WORKS!!</span>
      <button onClick={handleReturnClick}>Voltar</button>
    </div>
  );
}

export default ConfigMenu;
