import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://127.0.0.1:3000/api/products/${productId}`);
      alert('Product deleted successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to delete product.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container shadow p-5 bg-white rounded">
        <h2>Delete Product</h2>
        <form onSubmit={handleDelete}>
          <div className="mb-3">
            <label className="form-label">Product ID:</label>
            <input
              type="text"
              className="form-control"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-danger">Delete Product</button>
        </form>
      </div>
    </div>
  );
};

export default DeleteProduct;
