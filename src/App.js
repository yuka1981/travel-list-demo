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
  return <div className="list">List</div>;
};

const State = () => {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X %)</em>
    </footer>
  );
};
export default App;
