import React, { useState, useEffect } from 'react'
import '../component/style/ViewCart.css'
import Header from '../component/Header'
import Contact from '../component/Contact'
import { CartState } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
  const { state: { cart }, dispatch } = CartState()
  const [subTotal, setSubTotal] = useState()

  useEffect(() => {
    setSubTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
        <Header />
            <section className="viewcart-section">
                <div class="row g-0 gap-5">
                <div class="col-lg-12">
                    <table class="table">
                        <thead>
                            <tr class="text-uppercase viewcart-heading">
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        
                        {cart.length > 0 ? (
                            <tbody className="viewcart-details">
                            {cart.map(item => (
                                <tr>
                                    <th 
                                        scope="row"
                                        onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item
                                            })
                                          }
                                        }
                                    >X</th>
                                    <td>
                                        <img
                                        style={{ width: "100px" }}
                                        class="img-fluid d-block"
                                        src={item.imgURL}
                                        alt="..."
                                        />
                                    </td>
                                    <td className="product__name">
                                        {item.details}
                                    </td>
                                    <td className="viewcart--price">₦{item.price}</td>
                                    <td>
                                        <div class="d-flex align-items-center increment-button">
                                            <span class="p-2">-</span>
                                            <span class="p-2">{item.qty}</span>
                                            <span class="p-2">+</span>
                                        </div>
                                    </td>
                                    <td className="sub-total">₦{item.price * item.qty}</td>
                                </tr>
                            ))}
                            </tbody>
                        ) : (
                            <p className='empty-cart'>Your cart is empty</p>
                        )}
                    </table>

                    <div class="mt-5 total-bal">
                        <h3>
                            Total Balance : <span>₦{subTotal + ".00"}</span>
                        </h3>
                    </div>

                    <button 
                        class="mt-4 p-3 w-100 text-center text-uppercase checkout-btn col-12 "
                        onClick={() => navigate('/checkout')}
                    >
                        CHECK Out
                    </button>
                </div>
                </div>
            </section>
        <Contact />
    </div>
  )
}

export default Cart