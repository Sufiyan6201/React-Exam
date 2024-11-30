import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
 import { fetchProducts } from '../src/Features/Product/ProductSlice';
import ProductItem from './ProducItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;