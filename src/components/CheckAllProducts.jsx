import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CheckAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://easy-blue-barnacle-wrap.cyclic.cloud/check')
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
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-sm-6 col-md-5 col-lg-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Name: {product.name}</h5>
                  <p className="card-text">Description: {product.description}</p>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">ID: ${product._id}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckAllProducts;
