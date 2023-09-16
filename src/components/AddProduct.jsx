import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const newProduct = { name, description, price }
      console.log(newProduct)
      await axios.post('https://product-api-backend-phi.vercel.app/postProduct', newProduct);
      alert('Product added successfully!');
      document.getElementById("myForm").reset();
    } catch (err) {
      console.error(err);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container shadow p-5 bg-white rounded">
        <h2 className="mb-4">Add Product</h2>
        <form id='myForm' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
