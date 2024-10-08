import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/jewelery">Jewelry</Link></li>
        <li><Link to="/category/electronics">Electronics</Link></li>
        <li><Link to="/category/men's clothing">Men's Clothing</Link></li>
        <li><Link to="/category/women's clothing">Women's Clothing</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
