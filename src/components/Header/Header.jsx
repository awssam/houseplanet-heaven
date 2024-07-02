import React from 'react';
import './Header.css';
import CartIcon from '/cart.svg'
const Header = ({ navigate }) => {

  return (
<header className="header">
<nav className="nav">
        <button onClick={() => navigate('LandingPage')}>Home</button>
        <button onClick={() => navigate('ProductListing')}>Products</button>
        <button onClick={() => navigate('ShoppingCartPage')}><img src={CartIcon}  width={20} height={20}/></button>
      </nav>
    </header>
  );
};

export default Header;
