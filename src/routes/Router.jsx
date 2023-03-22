import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../component/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Homepage from '../pages/Homepage';
import Wishlist from '../pages/Wishlist';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    </div>
  )
}

export default Router