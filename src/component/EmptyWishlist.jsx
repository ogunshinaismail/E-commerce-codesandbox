import React from 'react'
import './style/EmptyWishlist.css'

const EmptyWishlist = () => {
  return (
    <div>
        <section className="wishlistempty-section">
            <h1 className="wish-disapointmment-face">😞</h1>
            <p>You don't have any product your wishlist yet.</p>
            <button>Shop Now</button>
        </section>
    </div>
  )
}

export default EmptyWishlist