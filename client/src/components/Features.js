import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Features = () => {
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
    <section id="features" className="bg-white py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature text-center p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="feature text-center p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="feature text-center p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
        <div className="items mt-8">
          <h2 className="text-2xl font-bold text-center mb-4">Items</h2>
          <ul className="list-disc list-inside">
            {items.map(item => (
              <li key={item.id} className="mb-2">{item.name}: {item.description}</li>
            ))}
          </ul>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center">
            <input
              type="text"
              name="name"
              value={newItem.name}
              onChange={handleChange}
              placeholder="Name"
              className="mb-2 p-2 border rounded"
            />
            <input
              type="text"
              name="description"
              value={newItem.description}
              onChange={handleChange}
              placeholder="Description"
              className="mb-2 p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Features;

