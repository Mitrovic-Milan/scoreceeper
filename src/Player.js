import "./Player.css";

export default function Player({
  name,
  score,
  onIncreaseScore,
  onDecreaseScore,
}) {
  return (
    <li className="Player">
      <span className="Player__name">{name}</span>
      <button onClick={onDecreaseScore}>-</button>
      {score}
      <button onClick={onIncreaseScore}>+</button>
    </li>
  );
}
