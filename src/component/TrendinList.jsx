import React, { useRef, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
  const [ open, setOpen ] = useState("")
  const formatNumInit = new Intl.NumberFormat('en-US');


  const toggleElement = (i) => {
    if(i === open) {
        //Close panel
        setOpen("")
      } else {
        //open specific panel
        setOpen(i)
        // isSetReact(true)
      }
  };

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
        centerMode={true}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        // renderDotsOutside={false}
        rewind={true}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        // showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        
      {products.filter(item => {
         if (item.trending == true) {
              return item;
          }
        })
        .map((prod, index) => (
        <div
          className="trending-list"
          onMouseEnter={() => toggleElement(index)}
          onMouseLeave={() => toggleElement(index)}
        >
              <span className="trending-bagde">{prod.badge}</span>
              <img
                class="img-fluid d-block w-100"
                className="product-img"
                src={prod.imgURL}
                alt="..."
              />
              <div className={open === index ? "react show" : "react"}>
                <div>
                  {cart.some( (p) => p.id === prod.id) ? (
                    <i onClick={() => 
                        dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod
                        })
                      }
                      class="bi bi-check2"
                    ></i>
                    ) : (
                    <i 
                      onClick={() => {
                          dispatch({
                              type: 'ADD_TO_CART',
                              payload: prod
                          })
                      }}
                    >
                      <i class="bi bi-cart3"></i>
                    </i>
                  )}
                </div>
                
                <Link to={`/product/${prod.id}`}>
                  <i style={{fontSize: '1.8rem'}} class="bi bi-eye"></i>
                </Link>

                <div>
                  {wishlist.some( (p) => p.id === prod.id) ? (
                    <i onClick={() => 
                        dispatch({
                            type: "REMOVE_FROM_WISHLIST",
                            payload: prod
                        })
                      }
                      class="bi bi-check2"
                    ></i>
                    ) : (
                    <i 
                      onClick={() => {
                          dispatch({
                              type: 'ADD_TO_WISHLIST',
                              payload: prod
                          })
                      }}
                    >
                      <i class="bi bi-heart"></i>
                    </i>
                  )}
                </div>
              </div>
              <p>
                <Link to={`/product/${prod.id}`}>{prod.details}</Link>
              </p>
              <span className="price">₦{formatNumInit.format(prod.price)}</span>
        </div>
      ))}
       
      </Carousel>
    </section>

    </div>
  )
}

export default TrendinList