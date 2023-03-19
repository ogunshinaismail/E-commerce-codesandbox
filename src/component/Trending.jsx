import React, { useState } from "react";
import "./style/Trending.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import { CartState } from "../context/Context";

export default function Entry(props) {
  const [isReact, isSetReact] = useState(false);
  const [ open, setOpen ] = useState("")
  const { 
      state: { products, cart },
      dispatch, 
  } = CartState();   
      
    const handleClickIndex = (i) => {
        if(i === open) {
            setOpen("")
          } else {
            setOpen(i)
          }
      };

  return ( 
    <>
      <div class="col-md-4 col-sm-6 col-6 col-lg-4 col-xl-3">
        <div
          className="trending-list"
          onMouseEnter={() => {
            isSetReact(!isReact);
          }}
        >
          <span className="trending-bagde">{props.badge}</span>
          <img
            class="img-fluid"
            className="product-img"
            src={props.imgURL}
            alt=""
          />
          <div className={isReact ? "react show" : "react"}>
            <div onClick={()=> handleClickIndex(props.index)}>
              {cart.some( (p) => p.id === props.id) && open === props.index ? (
                <p onClick={() => 
                    dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: props
                    })
                  }
                >rmv</p>
                ) : (
                <i 
                  onClick={() => {
                      dispatch({
                          type: 'ADD_TO_CART',
                          payload: props
                      })
                  }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                </i>
              )}
            </div>

            {/* <i class="bi bi-cart3"></i> */}
            {/* <i class="bi bi-search"></i> */}
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
            {/* <i class="bi bi-heart"></i> */}
            <i>
              <FontAwesomeIcon icon={faHeart} />
            </i>
          </div>
          <p>
            <a href="#">{props.details}</a>
          </p>
          <span className="price">{props.price}</span>
        </div>
      </div>
    </>
  );
}
