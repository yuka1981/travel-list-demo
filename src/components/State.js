const State = ({ items }) => {
  // early return for performance
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start add some items to your paccking list.</em>
      </footer>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Read to Go!!"
          : `You have ${numItems} items on your list, and you already packed
        ${packedItems} (${percentage} %)`}
      </em>
    </footer>
  );
};

export default State;
