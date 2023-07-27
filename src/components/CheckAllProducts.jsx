import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CheckAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/getall')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to fetch products.');
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="container">
        <h2>Check All Products</h2>
        <ul className="list-group">
          {products.map((product) => (
            <li key={product._id} className="list-group-item">
              {product.name} - {product.description} - ${product.price} - ${product._id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckAllProducts;
