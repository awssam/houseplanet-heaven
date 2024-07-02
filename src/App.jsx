import React, { useState } from 'react'
import LandingPage from './pages/LandingPage/LandingPage'
import ProductListing from './pages/ProductListing/ProductListing'
import './App.css'
import Header from './components/Header/Header'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'


function App() {

  const [page, setPage] = useState('LandingPage')

  return (
    <>
      {page != 'LandingPage' && <Header navigate={setPage} />}
    <div className="">
      {page === 'ProductListing' && <ProductListing navigate={setPage} />}
      {page === 'LandingPage' && <LandingPage navigate={setPage} />}
      {page === 'ShoppingCartPage' && <ShoppingCart navigate={setPage} />}
      </div>
    </>
  )
}

export default App
