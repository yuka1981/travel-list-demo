import initialItems from "./fixtures/items";

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <State />
    </div>
  );
}

const Logo = () => {
  return <h1>Far Away</h1>;
};

const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
};

const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.description} />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
