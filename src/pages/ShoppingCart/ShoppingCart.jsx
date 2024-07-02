import React from 'react';
import { useSelector } from 'react-redux';
import './ShoppingCart.css';
import CartItem from '../../components/CartItem/CartItem';
import CartValue from '../../components/CartValue/CartValue';
const ShoppingCart = ({ navigate }) => {
    const cartItems = useSelector((state) => state.cart.items);
    

  return (
    
    <div className="container shopping-cart">
      <button className="back-button" onClick={() => navigate('ProductListing')}>Continue Shopping</button>
      <h1>Shopping Cart</h1>
      <CartValue />
      {cartItems.map((item) => (
        <div key={item.id}>
          <CartItem {...item} />
        </div>
      ))}
      <button className="checkout-button" onClick={() => alert('Coming Soon')}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
