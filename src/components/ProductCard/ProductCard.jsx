import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductCard.css';
const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
  
  };

  const isInCart = false; // cartItems.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={handleAddToCart} disabled={isInCart}>
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
