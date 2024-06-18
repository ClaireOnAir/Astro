import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  useEffect(() => {
    axios.get('http://localhost:8000/api/items/')
      .then(response => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/items/', newItem)
      .then(response => {
        setItems([...items, response.data]);
        setNewItem({ name: '', description: '' });
      })
      .catch(error => {
        console.error("There was an error creating the item!", error);
      });
  };

  return (
    <div className="App">
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}: {item.description}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={newItem.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default App;


