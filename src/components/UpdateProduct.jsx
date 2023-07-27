import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = () => {
  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = {productId, name, description, price };
      await axios.put(`http://127.0.0.1:3000/api/products/${productId}`, updatedProduct);
      alert('Product updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to update product.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container shadow p-5 bg-white rounded">
        <h2>Update Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product ID:</label>
            <input
              type="text"
              className="form-control"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>
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
          <button type="submit" className="btn btn-primary">Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
