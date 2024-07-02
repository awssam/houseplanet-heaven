import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ navigate }) => {
  const [cartItems,setCartItem] = useState([
    {
      id: 1,
      name: 'Monstera Deliciosa',
      price: 45.99,
      quantity: 1,
      thumbnail: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Fiddle Leaf Fig',
      price: 35.99,
      quantity: 2,
      thumbnail: 'https://via.placeholder.com/150',
    },
  ]);
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    const incrementItem = (id) => {
    setCartItem(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    };
    const decrementItem = (id) => {
    setCartItem(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );

    }
    const removeFromCart = (id) => {
    setCartItem(cartItems.filter((item) => item.id !== id));
    }

  

  return (
    
    <div className="container shopping-cart">
      <button className="back-button" onClick={() => navigate('ProductListing')}>Continue Shopping</button>
      <h1>Shopping Cart</h1>
      <div className="cart-summary">
        <p>Total Number of Plants: {cartItems.length}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.thumbnail} alt={item.name} className="thumbnail" />
          <div className="item-details">
            <h2>{item.name}</h2>
            <p>Unit Price: ${item.price}</p>
            <div className="item-controls">
              <button onClick={() => decrementItem(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementItem(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)} className="delete-button">Delete</button>
            </div>
          </div>
        </div>
      ))}
      <button className="checkout-button" onClick={() => alert('Coming Soon')}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
