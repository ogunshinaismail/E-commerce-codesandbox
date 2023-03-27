import React, { useState, useEffect } from 'react'
import '../component/style/Wishlist.css'
import Header from '../component/Header'
import Contact from '../component/Contact'
import { CartState } from '../context/Context'
import EmptyWishlist from '../component/EmptyWishlist'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  const { state: { wishlist, cart }, dispatch } = CartState()
  const [subTotal, setSubTotal] = useState()
  const formatNumInit = new Intl.NumberFormat('en-US');

  useEffect(() => {
    setSubTotal(
      wishlist.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [wishlist]);

  return (
    <div>
        <Header />
            <section className="wishlist-section">
            {wishlist.length > 0 ? (
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
                                ><i class="bi bi-x-circle"></i></th>

                                <td>
                                    <img
                                    style={{ width: "100px" }}
                                    class="img-fluid d-block"
                                    src={item.imgURL}
                                    alt="..."
                                    />
                                </td>
                                <td className="wishlist__name">
                                <Link to={`/product/${item.id}`}>
                                    {item.details}
                                </Link>
                                </td>
                                <td className="wishlist--price">₦{formatNumInit.format(item.price)}</td>
                                <td className="wishlist--crat">
                                    {cart.some( (p) => p.id === item.id) ? (
                                        <p onClick={() => 
                                            dispatch({
                                                type: "REMOVE_FROM_CART",
                                                payload: item
                                            })
                                        }
                                        className='remove-wish'
                                        >Remove</p>
                                        ) : (
                                        <i 
                                        onClick={() => {
                                            dispatch({
                                                type: 'ADD_TO_CART',
                                                payload: item
                                            })
                                        }}
                                        class="bi bi-cart3"
                                        >
                                        
                                        </i>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                        
                    </table>
                </div>
                </div>
                ): (
                    <EmptyWishlist />
                )}
            </section>
        <Contact />
    </div>
  )
}

export default Wishlist