import React from 'react'
import './style/Sucessfulcheckout.css'
import { Link } from 'react-router-dom'

const Sucessfulcheckout = () => {
  return (
    <div className='success'>
      <div className="success-card">
        <section className="sucess-section">
            <h1 className="flower">💐</h1>
            <p>Thank you for shopping with us.</p>
            <Link to='/'>Go back to homepage</Link>
        </section> 
      </div>
    </div>
  )
}

export default Sucessfulcheckout