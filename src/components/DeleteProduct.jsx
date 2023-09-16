import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [productId, setProductId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const Alert = window.prompt("Passwared==>")
      console.log(typeof(Alert))
      if(Alert === "123456789"){
        await axios.delete(`https://product-api-backend-phi.vercel.app/api/products/${productId}`);
        alert('Product deleted successfully!');
        document.getElementById("myForm").reset();
      }
      // console.log(Alert)
      // if()
     else{
      alert('Incorect Passward');
     }
    } catch (err) {
      console.error(err);
      alert('Failed to delete product.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container shadow p-5 bg-white rounded">
        <h2>Delete Product</h2>
        <form id='myForm' onSubmit={handleDelete}>
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
