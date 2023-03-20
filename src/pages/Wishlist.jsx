import React, { useState, useEffect } from 'react'
import '../component/style/Wishlist.css'
import Header from '../component/Header'
import { CartState } from '../context/Context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
  const { state: { wishlist, cart }, dispatch } = CartState()
  const [subTotal, setSubTotal] = useState()

  useEffect(() => {
    setSubTotal(
      wishlist.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [wishlist]);

  return (
    <div>
      <Header />
      

      <div className='wishlist-page'>
        <div className="cart-details-header">
              <div></div>

              <div className='span-2'>
                <p>PRODUCT</p>
              </div>

              <div>
                <p>PRICE</p>
              </div>

              <div>
                <p>ADD TO CART</p>
              </div>
        </div>

        <div>
          {wishlist.length > 0 ? (
              <div>
                {wishlist.map(item => (
                  <div className="cart-details-content">
                      <div className='first-col'>
                        <p
                          className='close'
                          onClick={() => {
                              dispatch({
                                  type: "REMOVE_FROM_WISHLIST",
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
            
                      <div>
                  {cart.some( (p) => p.id === item.id) ? (
                    <p onClick={() => 
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item
                        })
                      }
                    >rmv</p>
                    ) : (
                    <i 
                      onClick={() => {
                          dispatch({
                              type: 'ADD_TO_CART',
                              payload: item
                          })
                      }}
                    >
                      <FontAwesomeIcon icon={faShoppingCart} />
                    </i>
                  )}
                </div>

                  </div>
                ))}
              </div>
            ) : (
              <p className='empty-cart'>Your wishlist is empty</p>
          )}    
        </div>
      </div>
    </div>
  )
}

export default Wishlist