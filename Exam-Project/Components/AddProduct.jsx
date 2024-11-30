import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, description }));
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;