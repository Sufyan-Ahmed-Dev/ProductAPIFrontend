import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';
import CheckAllProducts from './components/CheckAllProducts';

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* Add the fixed-top class */}
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Product Management</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/update">
                  Update Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/delete">
                  Delete Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/check">
                  Check All Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route exact path="/" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/delete" element={<DeleteProduct />} />
          <Route path="/check" element={<CheckAllProducts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
