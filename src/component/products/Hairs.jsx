import React, { useState } from "react";
import Productdata from "../../ProductData";
import Header from '../Header'
import Contact from '../Contact'
import '../style/Product.css'
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import '../style/ProductList.css'

const Hairs = () => {
    const navigate = useNavigate()
    const [showEffect, setShowEffect] = useState(false);
    const [isGrid, setIsGrid] = useState(false);
    const [gender, setGender] = useState("");
    const filteredTop = Productdata.filter(e => e.type === 'top')
    const dataLength = filteredTop.filter(e => e.gender === gender)
    console.log(filteredTop)

  return (
    <div>
        <Header />
            
        <section className="main">
            <div className="min-header stick-on-scroll">
                <button className="font-weight-normal text-dark button-men" onClick={() => setGender("women")}> 
                    <a>All</a>
                </button>

                {/*<button className="font-weight-normal text-dark button-men" onClick={() => setGender("men")}>
                    Men
                </button>*/}
            </div> 

            {gender == "" ? <h1 className="text-center text-uppercase">Hairs</h1> : <h1 className="text-center text-uppercase">Hairs FOR {gender}</h1> } 
            

            <img
                className="img-fluid d-block border border-dark border-1 border-opacity-50"
                src="https://balenciaga.dam.kering.com/m/3abae70dcbadb55d/Large-Banner-New_Balenciaga_Summer23_Campaign_Look18_2600x1016px-3x1.jpg"
                alt="..."
            />

            <div className="d-flex justify-content-between  pt-3 px-4 border-top border-bottom border-dark border-1 border-opacity-75 stick-on-scroll-filter">
                <p>{gender === "" ? filteredTop.length : dataLength.length} Results</p>
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
                        .map((prod) => (
                            <div
                                className={isGrid ? "col-md-6 col-sm-6 col-6 col-lg-6 mx-0 px-0 pt-3 pb-5 product--img text-center wrapper" : "col-md-4 col-sm-6 col-6 col-lg-4 mx-0 px-0 pt-3 pb-5 product--img text-center wrapper"}
                                onMouseEnter={() => {
                                    setShowEffect(!showEffect);
                                }}
                                onMouseLeave={() => {
                                    setShowEffect(showEffect);
                                }}
                            >

                                <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                pagination={{
                                    clickable: true
                                }}
                                navigation={showEffect ? true : false}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                > 
                                    <SwiperSlide>
                                        <img className="img-fluid" src={prod.imgURL} alt="..." />
                                    </SwiperSlide>
                        
                                    <SwiperSlide>
                                        <img className="img-fluid" src={prod.img2} alt="..." />
                                    </SwiperSlide>
                        
                                    <SwiperSlide>
                                        <img className="img-fluid" src={prod.img3} alt="..." />
                                    </SwiperSlide>
                                </Swiper>
                    
                                <span className="text-uppercase product--details">
                                    {showEffect ? prod.size : prod.details}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>

        <Contact />
    </div>
  )
}

export default Hairs