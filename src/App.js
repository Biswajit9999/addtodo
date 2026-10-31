import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = (event) => {
    event.preventDefault();

    const trimmed = item.trim();
    if (!trimmed) return;

    setItems((prev) => [...prev, { id: Date.now() + Math.random(), text: trimmed }]);
    setItem("");
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((entry) => entry.id !== id));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Add Items to List</h1>

        <form className="add-form" onSubmit={handleAdd}>
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button
            type="submit"
            className={`add ${item.trim() ? "" : "faded"}`}
          >
            Add
          </button>
        </form>

        {items.length === 0 ? (
          <p className="empty">No items yet. Add your first one!</p>
        ) : (
          <ul className="list">
            {items.map((entry) => (
              <li key={entry.id}>
                <span>{entry.text}</span>
                <button
                  type="button"
                  className="remove"
                  onClick={() => handleRemove(entry.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;