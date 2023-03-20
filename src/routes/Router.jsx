import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';
import Homepage from '../pages/Homepage';
import Wishlist from '../pages/Wishlist';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
        </Routes>
    </div>
  )
}

export default Router