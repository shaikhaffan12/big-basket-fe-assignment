import './ImageSlider.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { imageUrl } from '../../utils/urls';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
    {/* iamge slider using swiper.js */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
            {imageUrl.map(element => {
                return(
                    <SwiperSlide key = {element.id}><img src={element} alt=""  height={70}/></SwiperSlide>
                )
            })}

        </div>

      </Swiper>
    </>
  );
}