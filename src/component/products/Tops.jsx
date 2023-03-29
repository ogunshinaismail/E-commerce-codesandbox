import React, { useState } from "react";
import Productdata from "../../ProductData";
import Header from '../Header'
import Contact from '../Contact'
import '../style/Product.css'
import { useNavigate, useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import '../style/ProductList.css'

const Tops = () => {
    const navigate = useNavigate()
    const [showEffect, setShowEffect] = useState(false);
    const [isWBtn, setWBtn] = useState(false);
    const [isMBtn, setMBtn] = useState(false);
    const [isABtn, setABtn] = useState(false);
    const [isGrid, setIsGrid] = useState(false);
    const [gender, setGender] = useState("");
    const [ open, setOpen ] = useState("");
    const [ searchParams, setSearchParams ] = useSearchParams({filter: ""})
    const filteredTop = Productdata.filter(e => e.type === 'top')
    const dataLength = filteredTop.filter(e => e.gender === searchParams.get('filter'))
    
    const toggleElement = (i) => {
    if(i === open) {
        setOpen("") 
      } else {
        setOpen(i)
      }
    }; 

  return (
    <div>
        <Header />
        
        <section className="main">
            <div className="min-header stick-on-scroll">
                <button className={isWBtn ? "button-effect" : "button-women"} onClick={() => {setSearchParams({ filter: 'women'}), setWBtn(!isWBtn), setABtn(false), setMBtn(false)}}> 
                    <a>Women</a>
                </button>

                <button className={isMBtn ? "button-effect" : "button-men"} onClick={() => {setSearchParams({ filter: 'men'}), setMBtn(!isMBtn), setABtn(false), setWBtn(false)}}>
                    Men
                </button>

                <button className={isABtn ? "button-effect" : "button-all"} onClick={() => {setSearchParams({ filter: '' }), setWBtn(false), setMBtn(false)}}>
                    All
                </button>
            </div> 

            {searchParams.get('filter') === "" ? <h1 className="text-center text-uppercase">TOPS</h1> : <h1 className="text-center text-uppercase">TOPS FOR {searchParams.get('filter')}</h1> } 
            

            <img
                className="img-fluid d-block w-100 border border-dark border-1 border-opacity-50"
                src="https://balenciaga.dam.kering.com/m/3abae70dcbadb55d/Large-Banner-New_Balenciaga_Summer23_Campaign_Look18_2600x1016px-3x1.jpg"
                alt="..."
            />

            <div className="d-flex justify-content-between pt-3 px-4 border-top border-bottom border-dark border-1 border-opacity-75 stick-on-scroll-filter">
                <p>{searchParams.get('filter') === "" ? filteredTop.length : dataLength.length} Results</p>
                <i
                    onClick={() => {
                        setIsGrid(!isGrid);
                    }}
                    class="bi bi-grid-fill grid-icon"
                >     
                </i>
            </div>

            <section className="product--section">
                <div className="container-fluid overflow-hidden">
                    <div className="row gx-5 ">
                        {filteredTop.filter(item => {
                            if ( searchParams.get('filter') === "") {
                                return item;
                            } else if (item.gender === searchParams.get('filter')) {
                                return item;
                            }
                        })
                        .map((prod, index) => (
                            <div
                                className={isGrid ? "col-md-6 col-sm-6 col-6 col-lg-6 mx-0 px-0 pt-3 pb-5 product--img text-center wrapper" : "col-md-4 col-sm-6 col-6 col-lg-4 mx-0 px-0 pt-3 pb-5 product--img text-center wrapper"}
                                onMouseEnter={() => toggleElement(index)}
                                onMouseLeave={() => toggleElement(index)}
                            >
                                <div className="product__card"> 
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        loop={true}
                                        pagination={{
                                            clickable: true
                                        }}
                                        navigation={open === index ? true : false}
                                        modules={[Pagination, Navigation]}
                                        className="mySwiper"
                                    >  
                                        <SwiperSlide>
                                            <img className="img-fluid w-100 g-0" src={prod.imgURL} alt="..." />
                                        </SwiperSlide>
                            
                                        <SwiperSlide>
                                            <img className="img-fluid w-100 g-0" src={prod.img2} alt="..." />
                                        </SwiperSlide>
                            
                                        <SwiperSlide>
                                            <img className="img-fluid w-100 g-0" src={prod.img3} alt="..." />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                        
                                <span className="text-uppercase product--details" onClick={() => navigate(`/product/${prod.id}`)}>
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

export default Tops