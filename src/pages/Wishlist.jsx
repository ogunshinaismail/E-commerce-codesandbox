import React, { useState, useEffect } from 'react'
import '../component/style/Wishlist.css'
import Header from '../component/Header'
import Contact from '../component/Contact'
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
            <section className="wishlist-section">
                <div class="row">
                <div class="col-12">
                    <table class="table">
                        <thead>
                            <tr class="text-uppercase wishlist-heading">
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">cart</th>
                            </tr>
                        </thead>

                        {wishlist.length > 0 ? (
                            <tbody className="wishlist-details">
                            {wishlist.map(item => (
                                <tr>
                                    <th 
                                        scope="row"
                                        onClick={() => {
                                            dispatch({
                                                type: "REMOVE_FROM_WISHLIST",
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
                                    <td className="wishlist__name">
                                        {item.details}
                                    </td>
                                    <td className="wishlist--price">₦{item.price}</td>
                                    <td className="wishlist--crat">
                                        {cart.some( (p) => p.id === item.id) ? (
                                            <p onClick={() => 
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: item
                                                })
                                            }
                                            >Remove</p>
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
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        ): (
                            <p className='empty-cart'>Your wishlist is empty</p>
                        )}
                    </table>
                </div>
                </div>
            </section>
        <Contact />
    </div>
  )
}

export default Wishlist