// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css'

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';


import { ReactComponent as Plus } from '../../img/icons/plus.svg'
import { ReactComponent as Info } from '../../img/icons/info.svg'
import { ReactComponent as Ok } from '../../img/icons/ok.svg'



export default function SwiperSlider() {

  const bannerData = [
      {
        name:'çizmeli kedi',
        bgImage:'https://m.media-amazon.com/images/S/sonata-images-prod/TR_PSINB_CS_UI_V2/162c9f20-2d25-458e-adb5-2ed3c39de1d3._UR3840,1440_SX1440_FMwebp_.jpeg',
        titleImage : 'https://m.media-amazon.com/images/S/sonata-images-prod/TR_PSINB_CS_UI_V2/caa2e917-5cbd-4b23-b679-f12c475ea8cc._BR-6_AC_SX1000_FMwebp_.png'
      },
      {
        name:'john wick',
        bgImage:'https://m.media-amazon.com/images/S/sonata-images-prod/TR_John_Wick_4_CS_UI/f61b4467-c09e-4356-9058-12342c7af526._UR3840,1440_SX1440_FMwebp_.jpeg',
        titleImage : 'https://m.media-amazon.com/images/S/sonata-images-prod/TR_John_Wick_4_CS_UI/12ccf133-01e7-41b6-8496-6e7abac77aa5._BR-6_AC_SX1000_FMwebp_.png'
      },
     
      {
        name:'bihter',
        bgImage:'https://m.media-amazon.com/images/S/sonata-images-prod/TR_Bihter_CS_UI/b0c9e8d2-0720-4ae3-8590-4efa3fd995a2._UR3840,1440_SX1440_FMwebp_.jpeg',
        titleImage : 'https://m.media-amazon.com/images/S/sonata-images-prod/TR_Bihter_CS_UI/9e64d28a-f59e-47fc-b392-4e672f16466b._BR-6_AC_SX1000_FMpng_.png',

      },
      {
        name:'guven bana',
        bgImage:'https://m.media-amazon.com/images/S/sonata-images-prod/TR_Guven_Bana_CS_UI/f1cee7c2-2d4d-4b4e-ac60-6be18a99eb0f._UR3840,1440_SX1440_FMwebp_.jpeg',
        titleImage : 'https://m.media-amazon.com/images/S/sonata-images-prod/TR_Guven_Bana_CS_UI/fa9c678c-e04b-456d-a236-756108b600a5._BR-6_AC_SX1000_FMwebp_.png'
      }
  ]



  return (

    
    <div className='swiper-slider-container' >
      
      <Swiper navigation={true} 
          pagination={{
          clickable: true,
          el: '.swiper-pagination',
            }} modules={[Pagination]} className="SwiperSlider"  spaceBetween={30} centeredSlides={true} slidesPerView={'auto'}  coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
         
          >
          
         {bannerData.map((banner,key) => (
          <SwiperSlide key={key}>
            <div className='info'>
                <div className='title'>
                   <img src={banner.titleImage} alt="" />
                </div>
                <div className='detail flex mt-12 text-white w-full items-center'>
                      <p className='flex w-auto'><Ok  className='mr-2 text-blue-500'/> Prime Dahil</p>
                      <div className='ml-2 bg-[#33373d] pl-2 pr-2 rounded-md text-sm font-bold'>16+</div>
                </div>
                <div className='buttons flex mt-5 items-center lg:flex hidden'>
                      <div className='playBtn flex justify-center items-center'>
                        <div className='flex h-20 w-20 bg-white rounded-full justify-center items-center mr-2 hover:scale-110 cursor-pointer transition ease-in-out '>
                          <img src={'/icons/play.svg'} className=' h-12 w-12 '/> 
                        </div>
                      <span className='text-white ml-1 font-semibold text-xl'>Oynat</span>
                      </div>
                      <div className='plusBtn text-white w-16 h-16 bg-[hsla(0,0%,100%,.2)] ml-4 rounded-full flex justify-center items-center hover:scale-105 hover:bg-white hover:text-black transition ease-in-out cursor-pointer'>
                         <Plus/>
                      </div>
                      <div className='infoBtn text-white w-16 h-16 bg-[hsla(0,0%,100%,.2)] ml-2 rounded-full flex justify-center items-center hover:scale-105 hover:bg-white hover:text-black transition ease-in-out cursor-pointer'>
                         <Info/>
                      </div>
                </div>
            </div>
            <img className='bg-image' src={banner.bgImage} alt="" />
          </SwiperSlide>
         ))}
      </Swiper>
      <div className='swiper-pagination'></div>
    </div>
   
  );
}
