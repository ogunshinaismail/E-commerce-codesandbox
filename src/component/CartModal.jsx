import React, { useState, useEffect } from 'react';
import './style/CartModal.css';
import { CartState } from '../context/Context';
import { Link, useNavigate } from 'react-router-dom';
import EmptyImg from '../images/empty.png';

const CartModal = ({setShowCart}) => {
    const navigate = useNavigate()
    const { state: { cart }, dispatch } = CartState()
    const [total, setTotal] = useState()
    const [open, setOpen] = useState("")
    const formatNumInit = new Intl.NumberFormat('en-US');

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
    <div className="main-container">
        <div className='cart-container'> 
            <div>
                <div className="cart">
                    <div className="cart-header">
                        <p>SHOPPING CART</p>
                        <p onClick={() => setShowCart(false)} className='close close-top bi bi-x-lg'> CLOSE</p>
                    </div>

                    <div className="cart-items">
                    {cart.length > 0 ? (
                        <div className='cart__modal'>
                            {cart.map((item, index) => (
                                <div className='item' key={item.id}>
                                    <img src={item.imgURL} alt="" />
                                    <div className='item-det'>
                                        <div className="flex-between"> 
                                            {/*<p className='item-name'>{item.details}</p>*/}
                                            <Link to={`/product/${item.id}`} className='item-name'>{item.details}</Link>
                                            <div>
                                                
                                                    <p 
                                                        className='close bi bi-x-lg'
                                                        onClick={() => {
                                                            dispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: item
                                                            })
                                                        }
                                                    }
                                                    >
                                                        
                                                    </p>
                                            
                                            </div>
                                        </div>
                                        <div>
                                            <div class="mt-1 d-flex align-items-center gap-5">
                                                <div class="d-flex align-items-center cartmodal-incrementt-button">
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
                                                <p className='mt-2'>₦{formatNumInit.format(item.price)}.00</p>
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div class='text-center mt-5 empty-cart'>
                            <img src={EmptyImg} />
                            <p class='mt-1'>Your cart is empty</p>
                        </div>
                    )}
                    </div>

                    <div className="cart-base">
                        <div className="flex-between">
                            <p className='sub-total'>SUBTOTAL:</p>
                            <p className='total'>₦{formatNumInit.format(total)}.00</p>
                        </div>

                        <div className="cart-btns">
                            <Link to='/cart'>
                                <button className='view-cart'>View Cart</button>
                            </Link>
                            
                                <button className='checkout' disabled={cart.length < 1 ? true : false} onClick={() => navigate('/checkout')}>Checkout</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartModal
