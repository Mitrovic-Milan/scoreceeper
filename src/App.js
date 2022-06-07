import { useEffect, useState } from "react";
import "./App.css";
import Button from "./Button.js";
import Player from "./Player.js";
import PlayerForm from "./PlayerForm.js";
import { getFromLocal, setToLocal } from "./lib/localStorage";

function App() {
  const [players, setPlayers] = useState(getFromLocal("players") ?? []);
  useEffect(() => setToLocal("players", players), [players]);

  function createPlayer(player) {
    setPlayers([...players, player]);
  }

  function increaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score + 1 },
      ...players.slice(index + 1),
    ]);
  }

  function decreaseScore(index) {
    const currentPlayer = players[index];
    setPlayers([
      ...players.slice(0, index),
      { ...currentPlayer, score: currentPlayer.score - 1 },
      ...players.slice(index + 1),
    ]);
  }

  function resetAllScores() {
    setPlayers(
      players.map((player) => ({
        ...player,
        score: 0,
      }))
    );
  }

  function resetAllPlayers() {
    setPlayers([]);
  }

  return (
    <div className="App">
      <ul className="Player-list" role="list">
        {players.map((player, index) => (
          <Player
            key={player.name}
            name={player.name}
            score={player.score}
            onIncreaseScore={() => increaseScore(index)}
            onDecreaseScore={() => decreaseScore(index)}
          />
        ))}
      </ul>
      <Button onClick={resetAllScores}>Reset scores</Button>
      <Button onClick={resetAllPlayers}>New game</Button>
      <PlayerForm onCreatePlayer={createPlayer} />
    </div>
  );
}

export default App;
