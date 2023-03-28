import React, { useState, useEffect } from 'react'
import '../component/style/ViewCart.css'
import Header from '../component/Header'
import Contact from '../component/Contact'
import { CartState } from '../context/Context'
import { useNavigate, Link } from 'react-router-dom'
import EmptyCart from '../component/EmptyCart'

const Cart = () => {
  const navigate = useNavigate()
  const { state: { cart }, dispatch } = CartState()
  const [subTotal, setSubTotal] = useState()

  useEffect(() => {
    setSubTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]); 

  const formatNumInit = new Intl.NumberFormat('en-US');

  console.log(cart);

  return (
    <div>
        <Header />
            <section className="viewcart-section">
                {cart.length > 0 ? (
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
                                            ><i class="bi bi-x-circle"></i></th>
                                            <td>
                                                <img
                                                style={{ width: "100px" }}
                                                class="img-fluid d-block"
                                                src={item.imgURL}
                                                alt="..."
                                                />
                                            </td>
                                            <td className="product__name">
                                                <Link to={`/product/${item.id}`}>
                                                    {item.details}
                                                </Link>
                                            </td>
                                            <td className="viewcart--price">₦{formatNumInit.format(item.price)}</td>
                                            <td>
                                                <div class="d-flex align-items-center increment-button">
                                                    <span 
                                                        class="p-2"
                                                        onClick={() => {
                                                            dispatch({ 
                                                                type: "DECREASE_CART_QTY",
                                                                payload: item.id
                                                            })
                                                        }}
                                                    >-</span>
                                                    <span class="p-2">{item.qty}</span>
                                                    <span 
                                                        class="p-2" 
                                                        onClick={() => {
                                                            dispatch({
                                                                type: "INCREASE_CART_QTY",
                                                                payload: item.id
                                                            })
                                                        }}
                                                    >+</span>
                                                </div>
                                            </td>
                                            <td className="sub-total">₦{formatNumInit.format(item.price * item.qty)}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                            </table>
                            
                            <div class="mt-5 total-bal">
                                <h3>
                                    Total Balance : <span>₦{formatNumInit.format(subTotal)}</span>
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
                    ) : (
                        <EmptyCart />
                )}
            </section>
        <Contact />
    </div>
  )
}

export default Cart