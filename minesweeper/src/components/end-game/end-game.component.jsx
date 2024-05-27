function EndGameMenu(props) {
  return (
    <div>
      <div className="EndGame">
        <p>GAME OVER!!!</p>
        <span>🚩:{props.flagCount}</span>
      </div>
    </div>
  );
}

export default EndGameMenu;
