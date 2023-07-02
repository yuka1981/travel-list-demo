import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import State from "./components/State";
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

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    // setItems((items) =>
    //   items.map((item) => {
    //     if (item.id === id) {
    //       return {
    //         ...item,
    //         packed: !item.packed,
    //       };
    //     } else {
    //       return item;
    //     }
    //   })
    // );
  };

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <State />
    </div>
  );
}

export default App;
