import React, { useState } from "react";
import '../App.css'
import Header from "../component/Header";
import Home from "../component/Home";
import Category from "../component/Category";
import Side from "../component/Side";
import Contact from "../component/Contact";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
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

        <section className="category-section" id="category">
          <h2>Categories</h2>
          {/*<div class="row g-0">{CategoryList.map(createCategory)}</div>*/}
          <Category />
        </section> 

        <Side />
        <Contact />
    </div>
  )
}

export default Homepage