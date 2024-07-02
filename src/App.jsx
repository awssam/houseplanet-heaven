import React, { useState } from 'react'
import LandingPage from './pages/LandingPage'
import ProductListing from './pages/ProductListing'
import './App.css'
import Header from './components/Header/Header'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'


function App() {

  const [page, setPage] = useState('LandingPage')

  return (
    <>
      {page != 'LandingPage' && <Header navigate={setPage} />}
      {page === 'ProductListing' && <ProductListing navigate={setPage} />}
      {page === 'LandingPage' && <LandingPage navigate={setPage} />}
      {page === 'ShoppingCartPage' && <ShoppingCart navigate={setPage} />}
    </>
  )
}

export default App
