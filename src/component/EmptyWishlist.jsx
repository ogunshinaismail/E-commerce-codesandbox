import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/EmptyWishlist.css'

const EmptyWishlist = () => {
  const navigate = useNavigate()
  return (
    <div>
        <section className="wishlistempty-section">
            <h1 className="wish-disapointmment-face">😞</h1>
            <p>You don't have any product your wishlist yet.</p>
            <button onClick={() => navigate('/product')}>Shop Now</button>
        </section>
    </div>
  )
}

export default EmptyWishlist