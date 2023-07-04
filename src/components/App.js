import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import State from "./State";
// import initialItems from "../fixtures/items";

function App() {
  const [items, setItems] = useState([]);

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

  const handleClearList = () => {
    const confirmed = window.confirm("Are you sure delete all items?");
    if (confirmed) {
      setItems([]);
    }
  };

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <State items={items} />
    </div>
  );
}

export default App;
