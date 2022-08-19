import React from 'react';
import { OffersImagesUrl } from '../../utils/urls';
import './Offers.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
import { Pagination } from "swiper";


const Offers = () => {
  return(
    <>
    {/* offers images for desktop screen  */}
    <div className = "offers-div mt-4 ">
        {OffersImagesUrl.map (element => {
            return (
                <img src={element} alt="1" key= {Math.random()} className= "offers-img" />
            )
        })}
    </div>


        {/* offers images slider for tablets and mobile screen  */}
    <div className = "tab-offers">
    <Swiper 
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper">
      <SwiperSlide>
        {OffersImagesUrl.slice(0,3).map(element =>{
          return (
            <img src={element} alt="" key={Math.random()} className= "sliders-img"/>
          )
        })}
              
      </SwiperSlide>

      <SwiperSlide>
        {OffersImagesUrl.slice(3).map(element =>{
          return (
            <img src={element} alt="" key={Math.random()} className= "sliders-img"/>
          )
        })}
        
      </SwiperSlide>
    </Swiper>
    
    </div>
    </>
  )
}

export default Offers;