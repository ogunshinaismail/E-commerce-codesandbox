import React, { useState, useEffect } from 'react'
import '../component/style/Checkout.css'
import Header from '../component/Header'
import Contact from '../component/Contact'
import Sucessfulcheckout from '../component/Sucessfulcheckout'
import EmptyCart from '../component/EmptyCart'
import { CartState } from '../context/Context'

const Checkout = () => {
  const { state: { cart }, dispatch } = CartState()
  const [subTotal, setSubTotal] = useState()
  const [showCheckout, setShowCheckout] = useState(false)
  const formatNumInit = new Intl.NumberFormat('en-US');

  useEffect(() => {
    setSubTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
        <Header />
            <section className="checkout--section">
                <div class="row gx-0">
                    <div class="col-lg-6 col-md-12 checkout-form">
                        <h2 class="text-uppercase mb-4">BILLING DETAILS</h2>
                        <form class="row g-0 needs-validation" novalidate>
                        <div class="col-lg-5 col-md-5 first-name">
                            <label for="validationCustom01" class="form-label">
                            First name <b>*</b>
                            </label>
                            <input
                            type="text"
                            class="form-control"
                            id="validationCustom01"
                            required
                            />

                            <div class="invalid-feedback">
                            Please provide your firstname.
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5">
                            <label for="validationCustom02" class="form-label">
                            Last name <b>*</b>
                            </label>
                            <input
                            type="text"
                            class="form-control"
                            id="validationCustom02"
                            required
                            />
                            <div class="invalid-feedback">
                            Please provide your lastname.
                            </div>
                        </div>

                        <label for="validationCustom02" class="form-label mt-4">
                            Country / Region <b>*</b>
                        </label>
                        <p>Nigeria</p>

                        <div class="col-lg-11 col-md-12">
                            <label for="validationCustom03" class="form-label">
                            Street address <b>*</b>
                            </label>
                            <input
                            type="text"
                            class="form-control mb-4"
                            id="validationCustom03"
                            placeholder="House number and street name"
                            required
                            />
                            <div class="invalid-feedback">
                            Please provide your Street address
                            </div>
                        </div>

                        <div class="col-lg-11 col-md-12">
                            <label for="validationCustom04" class="form-label">
                            Town / City <b>*</b>
                            </label>
                            <input
                            type="text"
                            class="form-control mb-4"
                            id="validationCustom04"
                            required
                            />
                            <div class="invalid-feedback">
                            Please provide your Town / City.
                            </div>
                        </div>

                        <div class="col-lg-11 col-md-12">
                            <label for="validationCustom05" class="form-label">
                            State <b>*</b>
                            </label>
                            <input
                            type="text"
                            class="form-control mb-4"
                            id="validationCustom05"
                            required
                            />
                            <div class="invalid-feedback">Please provide your State.</div>
                        </div>

                        <div class="col-lg-11 col-md-12">
                            <label for="validationCustom06" class="form-label">
                            Phone Number <b>*</b>
                            </label>
                            <input
                            type="number"
                            class="form-control mb-4"
                            id="validationCustom06"
                            required
                            />
                            <div class="invalid-feedback">
                            Please provide your phone number.
                            </div>
                        </div>

                        <div class="col-lg-11 col-md-12">
                            <label for="validationCustom03" class="form-label">
                            Email Address <b>*</b>
                            </label>
                            <input
                            type="email"
                            class="form-control mb-4"
                            id="validationCustom03"
                            placeholder="example@mail.com"
                            required
                            />
                            <div class="invalid-feedback">
                            Please provide a valid email address.
                            </div>
                        </div>
                        <div class="col-lg-11 col-md-12">
                            <label for="validationCustom03" class="form-label">
                            Order notes (optional) <b>*</b>
                            </label>
                            <br />
                            <textarea class="mb-5" />
                        </div>
                        </form>
                    </div>

                    <div class="col-lg-6 col-md-12 mb-5">
                        <div className="order-review">
                            <h2 class="text-center text-uppercase">Your Order</h2>
                            {cart.length > 0 ? (
                                <div>
                                    <table class="table table-sm order-review-table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Subtotal</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            {cart.map(item => (
                                                <tr>
                                                    <td scope="row">
                                                        {item.details}
                                                    </td>
                                                    <td className="order-amount">₦{formatNumInit.format(item.price * item.qty)}</td>
                                                </tr>     
                                            ))}

                                            <tr>
                                                <th scope="row">Subtotal</th>
                                                <td className="order-amount">₦{formatNumInit.format(subTotal)}</td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Shipping</th>
                                                <td>
                                                    <input
                                                    type="radio"
                                                    id="shop1"
                                                    name="fav_language"
                                                    value="Store pickup (Surulere)"
                                                    />
                                                      <label for="shop1">Store pickup (Surulere)</label>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th scope="row">Total</th>
                                                <td className="order-amount">₦{formatNumInit.format(subTotal)}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    
                                    <button 
                                        class="mt-4 mb-0 w-100 p-3 text-center text-uppercase checkout-btn"
                                        onClick={() => {
                                            dispatch({
                                                type: "ON_DELETE_ALL_ITEMS_FROM_CART",
                                                payload: cart
                                            })
                                            setShowCheckout(!showCheckout)
                                        }}
                                    >
                                        CHECK Out 
                                    </button>
                                </div>
                            ) : (
                                <EmptyCart />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {showCheckout ? <Sucessfulcheckout /> : null}

        <Contact />
    </div>
  )
}

export default Checkout