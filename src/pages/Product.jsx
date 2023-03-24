import React, { useState } from "react";
import ProductList from "../component/ProductList";
import Productdata from "../ProductData";
import Header from '../component/Header'
import Contact from '../component/Contact'
import '../component/style/Product.css'
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate()
    const [isGrid, setIsGrid] = useState(false);
    const [gender, setGender] = useState("");
    const filteredTop = Productdata.filter(e => e.type === 'top')
    console.log(filteredTop)
    // console.log(Productdata)

    // const hamdleFilter = () => {
    //     navigate('/')
    // }

    return (
        <>
            <Header />
            
            <section className="main">
                <div className="min-header stick-on-scroll">
                    <button className="font-weight-normal text-dark button-women" onClick={() => setGender("women")}> 
                        <a>Women</a>
                    </button>

                    <button className="font-weight-normal text-dark button-men" onClick={() => setGender("men")}>
                        Men
                    </button>
                </div> 

                {gender == "" ? <h1 className="text-center text-uppercase">TOPS</h1> : <h1 className="text-center text-uppercase">TOPS FOR {gender}</h1> } 
                

                <img
                    className="img-fluid d-block border border-dark border-1 border-opacity-50"
                    src="https://balenciaga.dam.kering.com/m/3abae70dcbadb55d/Large-Banner-New_Balenciaga_Summer23_Campaign_Look18_2600x1016px-3x1.jpg"
                    alt="..."
                />

                <div className="d-flex justify-content-between  pt-3 px-4 border-top border-bottom border-dark border-1 border-opacity-75 stick-on-scroll-filter">
                    <p>{Productdata.length} Results</p>
                    <i
                        onClick={() => {
                            setIsGrid(!isGrid);
                        }}
                        class="bi bi-grid-fill"
                    >
                        
                    </i>
                </div>

                <section className="product--section">
                    <div className="container-fluid overflow-hidden">
                        <div className="row gx-5 ">
                            {filteredTop.filter(item => {
                                if ( gender === "") {
                                    return item; 
                                } else if (item.gender === gender) {
                                    return item;
                                } 
                            })
                            .map(createProduct).slice(0, 12)}
                            <img
                            className="img-fluid w-100 g-0"
                            src="https://balenciaga.dam.kering.com/m/625d2beb9b5ab1a4/Large-MB_Balenciaga_Summer23_Campaign_Look24_3200x1800px-16x9.jpg"
                            alt="..."
                            />
                            {filteredTop.filter(item => {
                                if ( gender === "") {
                                    return item;
                                } else if (item.gender === gender) {
                                    return item;
                                } 
                            })
                            .map(createProduct).slice(12, 16)}
                        </div>
                    </div>
                </section>
            </section>

            <Contact />
        </>
    );
}

export default Product