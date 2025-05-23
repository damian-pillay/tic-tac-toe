export default function GameOver({winner, onRestart}) {
  return <div id="game-over">
    <h2>Game Over!</h2>
    {winner ? <p>Congrats {winner}!<br />You Win !</p> : <p>It's a Draw !</p>}
    <p>
      <button onClick={onRestart}>Rematch</button>
    </p>
  </div>
}