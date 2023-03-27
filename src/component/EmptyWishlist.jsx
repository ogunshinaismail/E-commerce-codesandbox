import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/EmptyWishlist.css';
import EmptyWImg from '../images/wishempty.png'

const EmptyWishlist = () => {
  const navigate = useNavigate()
  return (
      <div className="wishlistempty-section">
          <img src={EmptyWImg} alt='....'/>
          <p>You don't have any product in your wishlist yet.</p>
          <button onClick={() => navigate('/product')}>Shop Now</button>
      </div>
  )
}

export default EmptyWishlist;