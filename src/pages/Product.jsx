import React, { useState } from "react";
import ProductList from "../component/ProductList";
import Productdata from "../ProductData";
import Header from '../component/Header'
import Contact from '../component/Contact'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import '../component/style/Product.css'

function createProduct(goods) {
    return (
      <ProductList
        key={goods.id}
        imgURL={goods.imgURL}
        img2={goods.img2}
        img3={goods.img3}
        details={goods.details}
        size={goods.size}
      />
    );
  }

const Product = () => {
    const [isGrid, setIsGrid] = useState(false);

    return (
        <>
            <Header />
            
            <section className="main">
                <div className="min-header stick-on-scroll">
                    <button className="font-weight-normal text-dark button-women"> 
                        <a>Women</a>
                    </button>

                    <button className="font-weight-normal text-dark button-men">
                        <a>Men</a>
                    </button>
                </div> 

                <h1 className="text-center text-uppercase">TOPS FOR MEN</h1>

                <img
                    className="img-fluid d-block border border-dark border-1 border-opacity-50"
                    src="https://balenciaga.dam.kering.com/m/3abae70dcbadb55d/Large-Banner-New_Balenciaga_Summer23_Campaign_Look18_2600x1016px-3x1.jpg"
                    alt="..."
                />

                <div className="d-flex justify-content-between  pt-3 px-4 border-top border-bottom border-dark border-1 border-opacity-75 stick-on-scroll-filter">
                    <p>68 Results</p>
                    <i
                        onClick={() => {
                            setIsGrid(!isGrid);
                        }}
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </i>
                </div>

                <section className="product--section">
                    <div className="container-fluid overflow-hidden">
                        <div className="row gx-5 ">
                            {Productdata.map(createProduct).slice(0, 12)}
                            <img
                            className="img-fluid w-100 g-0"
                            src="https://balenciaga.dam.kering.com/m/625d2beb9b5ab1a4/Large-MB_Balenciaga_Summer23_Campaign_Look24_3200x1800px-16x9.jpg"
                            alt="..."
                            />
                            {Productdata.map(createProduct).slice(12, 16)}
                        </div>
                    </div>
                </section>
            </section>

            <Contact />
        </>
    );
}

export default Product