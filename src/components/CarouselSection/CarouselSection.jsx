import "./CarouselSection.css";
import { carousel1, carousel2, carousel3 } from "../../assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CarouselSection = () => {
  return (
    <div className="carousel_section">
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
        <SwiperSlide>
          <img src={carousel1} alt="carousel" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel2} alt="carousel2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel3} alt="carousel3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselSection;
