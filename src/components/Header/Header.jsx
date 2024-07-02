import React from 'react';
import { useSelector } from 'react-redux';

import './Header.css';
import CartIcon from '../../assets/cart.svg'
const Header = ({ navigate }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
<header className="header">
  <div className="container">
    <nav className="nav">
        <button onClick={() => navigate('LandingPage')}>Home</button>
        <button onClick={() => navigate('ProductListing')}>Products</button>
        <button onClick={() => navigate('ShoppingCartPage')}><img src={CartIcon}  width={20} height={20}/> {totalItems > 0 ? totalItems : ''}</button>
      </nav>
      </div>
    </header>
  );
};

export default Header;
