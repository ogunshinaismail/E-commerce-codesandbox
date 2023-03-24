import React from 'react'
import './style/EmptyCart.css'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
      <div className="cartempty-section">
          <h1 className="cart-disapointmment-face">😞</h1>
          <p>No product is found in your Cart.</p>
          <button onClick={() => {navigate('/product')}}>Shop Now</button>
      </div>
  )
}

export default EmptyCart