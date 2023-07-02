import { useState } from "react";
import { v4 as uuid } from "uuid";
import initialItems from "./fixtures/items";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItems = (item) => {
    setItems([...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => {
      return (
        // true -> keep item
        items.filter((item) => item.id !== id)
      );
    });
  };

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <State />
    </div>
  );
}

const Logo = () => {
  return <h1>Far Away</h1>;
};

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: uuid(),
    };

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

const PackingList = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.description}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, onDeleteItem }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* when click button -> trigger onDeleteItem function */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
};

const State = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X %)</em>
    </footer>
  );
};
export default App;
