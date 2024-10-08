import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

const Category = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <h2>{categoryName.toUpperCase()}</h2>
      <ProductList category={categoryName} />
    </div>
  );
};

export default Category;
