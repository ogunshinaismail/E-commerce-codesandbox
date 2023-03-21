import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../component/ProductDetails';
import Cart from '../pages/Cart';
import Homepage from '../pages/Homepage';
import ViewCart from '../pages/ViewCart';
import Wishlist from '../pages/Wishlist';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/view-cart' element={<ViewCart />} />
            <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
    </div>
  )
}

export default Router