import React, { useState } from "react";
import '../App.css'
import Header from "../component/Header";
import Home from "../component/Home";
import Entry from "../component/Trending";
// import trendinglist from "./Trending";
import Category from "../component/Category";
import CategoryList from "../category";
import Side from "../component/Side";
import Contact from "../component/Contact";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { Navigation, Pagination } from "swiper";
// import { Autoplay, Pagination, Navigation } from "swiper";
import "../component/style/Trending.css";
import "../component/style/Category.css";
import { CartState } from "../context/Context";
import "../component/style/Trending.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TrendinList from "../component/TrendinList";

function createEntry(trend, index) {
    const { 
      state: { products }
    } = CartState()
  
    // console.log(products);
  
    return (
      <Entry
        index={index}
        key={trend.id}
        badge={trend.badge}
        imgURL={trend.imgURL}
        details={trend.details}
        price={trend.price}
      />
    );
  }
  function createCategory(items) {
    return (
      <Category
        key={items.id}
        imgURL={items.imgURL}
        details={items.details}
        type1={items.type1}
        type2={items.type2}
      />
    );
  }
  
  const dd = {
    paddingTop: `0px  !important`
  };

const Homepage = () => {
    const [isReact, isSetReact] = useState(false);
    const { 
      state: { products, cart },
      dispatch,
    } = CartState()


  return (
    <div>
        <Header />
        <Home />

        <TrendinList />

        {/* <section className="trending-section" id="trending">
        <h2>Trending</h2>
        <div className="col-md-4 col-sm-6 col-6 col-lg-4 col-xl-3 trend-grid">
            {products.map(prod => (
                <div
                className="trending-list"
                onMouseEnter={() => {
                    isSetReact(!isReact);
                }}
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
        
                    
                    <i>
                    <FontAwesomeIcon icon={faSearch} />
                    </i>
                    <i>
                    <FontAwesomeIcon icon={faHeart} />
                    </i>
                </div>
                <p>
                    <a href="#">{prod.details}</a>
                </p>
                <span className="price">{prod.price}</span>
                </div>
            ))}
        </div>


        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 4500,
            disableOnInteraction: false
            }}
            pagination={{
            clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
            <div style={dd} class="row rr">
                {products.map(createEntry).slice(0, 8)}
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{ paddingTop: `0px ${" !important"}` }} class="row rr">
                {products.map(createEntry).slice(8, 16)}
            </div>
            </SwiperSlide> 
        </Swiper>
        </section>*/}

        <section className="category-section" id="category">
        <h2>Categories</h2>
        <div class="row g-0">{CategoryList.map(createCategory)}</div>
        </section> 
        <Side />
        <Contact />
    </div>
  )
}

export default Homepage