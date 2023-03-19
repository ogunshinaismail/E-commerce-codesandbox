import React, { useState, useEffect } from 'react'
import './style/Cart.css'
import { CartState } from '../context/Context'

const Cart = ({setShowCart}) => {
    const { state: { cart }, dispatch } = CartState()
    const [total, setTotal] = useState()
    const [open, setOpen] = useState("")

    useEffect(() => {
        setTotal(
          cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);


      const handleClickIndex = (i) => {
        if(i === open) {
            setOpen("")
          } else {
            setOpen(i)
          }
      };

  return (
    <div className='cart-container'>
        <div>
            <div className="cart">
                <div className="cart-header">
                    <p>Cart</p>
                    <p onClick={() => setShowCart(false)}>X</p>
                </div>

                <div className="cart-items">
                {cart.length > 0 ? (
                    <div>
                        {cart.map((item, index) => (
                            <div className='item' key={item.id}>
                                <img src={item.imgURL} alt="" />
                                <div className='item-det'>
                                    <div className="flex-between">
                                        <p>{item.badge}</p>
                                        <div>
                                            
                                                <button 
                                                    type='button'
                                                    onClick={() => {
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: item
                                                        })
                                                    }
                                                }
                                                >
                                                    X
                                                </button>
                                          
                                        </div>
                                    </div>
                                    <div className="qty-price">
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
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Cart is empty</p>
                )}
                </div>

                <div className="cart-base">
                    <div className="flex-between">
                        <p>SUBTOTAL:</p>
                        <p>₦{total + ".00"}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart