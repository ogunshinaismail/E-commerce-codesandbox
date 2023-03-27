import React from 'react';
import './style/EmptyCart.css';
import { useNavigate } from 'react-router-dom';
import EmptyImg from '../images/empty.png';

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
      
      <div className="cartempty-section">
          <img src={EmptyImg} alt="..."/>
          <p>No product is found in your Cart.</p>
          <button onClick={() => {navigate('/product')}}>Shop Now</button>
      </div>
  );
}

export default EmptyCart