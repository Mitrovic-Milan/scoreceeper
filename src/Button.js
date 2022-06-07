import "./Button.css";

export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick} className="Button">
      {children}
    </button>
  );
}
