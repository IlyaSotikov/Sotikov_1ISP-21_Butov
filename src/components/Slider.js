import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './Slider.css';

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="slide">
          <img src="dobro.jpg" alt="Слайд 1" />
          <div className="slide-text">Добро пожаловать</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img src="dobro2.jpg" alt="Слайд 2" />
          <div className="slide-text">Добро пожаловать</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img src="dobro3.jpg" alt="Слайд 3" />
          <div className="slide-text">Добро пожаловать</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img src="dobro4.jpg" alt="Слайд 4" />
          <div className="slide-text">Добро пожаловать</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
