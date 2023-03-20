import React, { useState, useEffect } from 'react'
import '../component/style/Cart.css'
import Header from '../component/Header'
import { CartState } from '../context/Context'

const Cart = () => {
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

      <div>
        <div className='cart-details'>
          <div className="cart-details-header">
            <div></div>

            <div className='span-2'>
             <p>PRODUCT</p>
            </div>

            <div>
              <p>PRICE</p>
            </div>

            <div>
              <p>QUANTITY</p>
            </div>

            <div>
              <p>SUBTOTAL</p>
            </div>
          </div>

          <div>
            {cart.length > 0 ? (
              <div>
                {cart.map(item => (
                  <div className="cart-details-content">
                      <div className='first-col'>
                        <p
                          className='close'
                          onClick={() => {
                              dispatch({
                                  type: "REMOVE_FROM_CART",
                                  payload: item
                              })
                            }
                          }
                        >
                          X
                        </p>
                        <img src={item.imgURL} alt="" width='80px' />
                      </div>
            
                      <div className='span-2'>
                      <p>{item.badge}</p>
                      </div>
            
                      <div>
                        <p>₦{item.price}</p>
                      </div>
            
                      <div className='qty'>
                        <input 
                          type="number" 
                          value={item.qty}
                          min="1"
                          onChange={(e) => {
                              if (item.qty.value < 1) {
                                  item.qty.value = 1
                              }
                              dispatch({
                                  type: "CHANGE_CART_QTY",
                                  payload: {
                                      id: item.id,
                                      qty: e.target.value,
                                  },
                              })
                          }}
                        />
                      </div>
            
                      <div>
                        <p>₦{item.price * item.qty}</p>
                      </div>

                  </div>
                ))}
              </div>
            ) : (
              <p className='empty-cart'>Your cart is empty</p>
          )}
            
          </div>
        </div>

        <div className='cart-total'>
          <h3>CART TOTALS</h3>
          <div className="sub-total">
            <p>Subtotal</p>
            <p>₦{subTotal + ".00"}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart