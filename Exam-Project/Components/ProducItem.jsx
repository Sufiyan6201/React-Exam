import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      {/* Add buttons for editing and deleting here */}
    </li>
  );
};

export default ProductItem;