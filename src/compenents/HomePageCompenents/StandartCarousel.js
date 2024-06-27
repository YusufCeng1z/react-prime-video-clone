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
                {seriesBg[show.id] && seriesBg[show.id]['file_path'] ? (
                  <img src={`${BASE_IMAGE_URL}${seriesBg[show.id]['file_path']}`} alt="" />
                ) : (
                  <img src={`${BASE_IMAGE_URL}${show.backdrop_path}`} alt="" />
                )}
              </div>
              <div className='infoArea p-5'>
                <div className='detail flex text-white justify-left items-center text-sm'>
                  <p className='flex w-auto font-semibold items-center'><Ok className='mr-1 text-blue-500' /> Prime’a Dahil</p>
                </div>
                <div className='buttons flex mt-5 items-center '>
                  <div className='playBtn flex justify-center items-center'>
                    <div className='flex h-14 w-14 bg-white rounded-full justify-center items-center mr-2 hover:scale-110 cursor-pointer transition ease-in-out '>
                      <img src={'/icons/play.svg'} className=' h-7 w-7 ' alt="Play Icon" />
                    </div>
                    <span className='text-white ml-1 font-semibold text-xl'>Oynat <p>1.S 1.B</p></span>
                  </div>
                  <div className='plusBtn text-white w-12 h-12 bg-[hsla(0,0%,100%,.2)] ml-4 rounded-full flex justify-center items-center hover:scale-105 hover:bg-white hover:text-black transition ease-in-out cursor-pointer'>
                    <Plus />
                  </div>
                  <div className='infoBtn text-white w-12 h-12 bg-[hsla(0,0%,100%,.2)] ml-2 rounded-full flex justify-center items-center hover:scale-105 hover:bg-white hover:text-black transition ease-in-out cursor-pointer'>
                    <Block />
                  </div>
                </div>
                <div className='title text-white text-left mt-4 font-bold'>
                  {show.name}
                </div>
                <div className='date flex w-full text-white mt-4'>
                  <div className='text-sm'>{show.first_air_date.slice(0, 4)}</div>
                  <div className='ml-2 bg-[#33373d] pl-2 pr-2 rounded-md text-sm font-bold'>16+</div>
                </div>
                <div className='desc text-left mt-2 font-bold text-gray-400 text-sm line-clamp-3'>
                  {show.overview}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StandartCarousel;
