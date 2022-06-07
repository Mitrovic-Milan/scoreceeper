import "./PlayerForm.css";

export default function PlayerForm({ onCreatePlayer }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name } = form.elements;
    const newPlayer = { name: name.value, score: 0 };
    onCreatePlayer(newPlayer);
    form.reset();
    name.focus();
  }

  return (
    <form onSubmit={handleSubmit} className="PlayerForm">
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
      <button>Create player</button>
    </form>
  );
}
