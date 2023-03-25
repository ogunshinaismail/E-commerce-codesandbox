import React from 'react'
import { Routes, Route } from "react-router-dom";
import ProductDetails from '../component/ProductDetails';
import Bags from '../component/products/Bags';
import Belts from '../component/products/Belts';
import Hairs from '../component/products/Hairs';
import Shoes from '../component/products/Shoes';
import Tops from '../component/products/Tops';
import Trousers from '../component/products/Trousers';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Homepage from '../pages/Homepage';
import Product from '../pages/Product';
import Wishlist from '../pages/Wishlist';

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/product' element={<Product />} /> 
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path='/product/tops' element={<Tops />} />
            <Route path='/product/trousers' element={<Trousers />} />
            <Route path='/product/bags' element={<Bags />} />
            <Route path='/product/belts' element={<Belts />} />
            <Route path='/product/hairs' element={<Hairs />} />
            <Route path='/product/shoes' element={<Shoes />} />
            
        </Routes>
    </div>
  )
}

export default Router