import React from 'react'
import './style/EmptyCart.css'

const EmptyCart = () => {
  return (
    <div>
        <section className="cartempty-section">
            <h1 className="cart-disapointmment-face">😞</h1>
            <p>No product is found in your Cart.</p>
            <button>Shop Now</button>
        </section>
    </div>
  )
}

export default EmptyCart