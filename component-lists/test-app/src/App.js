import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button
        onClick={() => {
          setItems([...items, newItem]);
          setNewItem('');
        }}
      >
        Add List Item
      </button>
    </>
  );
}

export default App;
