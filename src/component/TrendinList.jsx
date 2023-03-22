import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style/Trending.css";
import "../App.css"
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1400 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1400, min: 800 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const TrendinList = () => {
  const [isReact, isSetReact] = useState(false);

  const { 
    state: { products, cart, wishlist },
    dispatch,
  } = CartState()

  return (
    <div>
    <section className="trending-section" id="trending">
      <h2>Trending</h2>

      <Carousel
        responsive={responsive}
        additionalTransfrom={0}
        // arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
      >
        
      {products.map(prod => (
        <div
          className="trending-list"
          onMouseEnter={() => isSetReact(true)}
          onMouseLeave={() => isSetReact(false)}
        >
              <span className="trending-bagde">{prod.badge}</span>
              <img
                class="img-fluid"
                className="product-img"
                src={prod.imgURL}
                alt=""
              />
              <div className={isReact ? "react show" : "react"}>
                <div>
                  {cart.some( (p) => p.id === prod.id) ? (
                    <p onClick={() => 
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod
                        })
                      }
                    >rmv</p>
                    ) : (
                    <i 
                      onClick={() => {
                          dispatch({
                              type: 'ADD_TO_CART',
                              payload: prod
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

                <div>
                  {wishlist.some( (p) => p.id === prod.id) ? (
                    <p onClick={() => 
                        dispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: prod
                        })
                      }
                    >wish</p>
                    ) : (
                    <i 
                      onClick={() => {
                          dispatch({
                              type: 'ADD_TO_WISHLIST',
                              payload: prod
                          })
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </i>
                  )}
                </div>
              </div>
              <p>
                <Link to={`/product/${prod.id}`}>{prod.details}</Link>
              </p>
              <span className="price">{prod.price}</span>
        </div>
      ))}
       
      </Carousel>
    </section>

    </div>
  )
}

export default TrendinList