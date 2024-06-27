import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './StandartCarousel.css';
import { Navigation } from 'swiper/modules';
import { ReactComponent as Ok } from '../../img/icons/ok.svg';
import { ReactComponent as Plus } from '../../img/icons/plus.svg';
import { ReactComponent as Block } from '../../img/icons/block.svg';
import series from '../../json/series.json'; 
import seriesBg from '../../json/back.json'; 

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const getRandomShows = () => {
  const shuffled = series.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 30);
}

const StandartCarousel = () => {
  const selectedShows = getRandomShows();

  return (
    <div className='standartCarousel'>
      <Swiper
        allowTouchMove={false}
        navigation={true}
        modules={[Navigation]}
        className="StandartCarousel"

        loop={true}
        breakpoints={{
          0:{
            slidesPerView:2.4,
            slidesPerGroup: 2,
            spaceBetween:5,
            allowTouchMove:true
          }, 
          1024:{
            slidesPerView:4.4,
            slidesPerGroup: 4,
            spaceBetween:10,
            allowTouchMove:false
          },
          1250: {
            slidesPerView:6.4,
            slidesPerGroup: 6,
            spaceBetween:25,
            allowTouchMove:false
          },
        }}
      >
        {selectedShows.map(show => (
          <SwiperSlide key={show.id}>
            <div className='slider-content'>
              <div className='bg-image'>
                      <img src={`${BASE_IMAGE_URL}${show.poster_path}`} alt="" />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StandartCarousel;
