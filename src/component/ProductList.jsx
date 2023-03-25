import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './style/ProductList.css'
import { useNavigate } from 'react-router-dom';

const ProductList = (props) => {
    const navigate = useNavigate()
    const [showEffect, setShowEffect] = useState(false);
    const [isGrid, setIsGrid] = useState(false);
    
  return (
    <>
        <div
            className={isGrid ? "col-md-6 col-sm-6 col-6 col-lg-6 mx-0 px-0 pt-3 pb-5 product--img text-center wrapper" : "col-md-4 col-sm-6 col-6 col-lg-4 mx-0 px-0 pt-3 pb-5 product--img text-center wrapper"}
            onMouseEnter={() => {
                setShowEffect(true);
            }}
            onMouseLeave={() => {
                setShowEffect(false);
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
                <img className="img-fluid" src={props.imgURL} alt="..." />
            </SwiperSlide>

            <SwiperSlide>
                <img className="img-fluid" src={props.img2} alt="..." />
            </SwiperSlide>

            <SwiperSlide>
                <img className="img-fluid" src={props.img3} alt="..." />
            </SwiperSlide>
            </Swiper>

            <span 
                className="text-uppercase product--details"
                onClick={() => navigate(`/product/${props.id}`)}
            >
                {showEffect ? props.size : props.details}
            </span>
        </div>
    </>
  )
}

export default ProductList