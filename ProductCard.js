import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, image, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/product/${id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
