import React from 'react'
import SwiperSlider from '../compenents/HomePageCompenents/SwiperSlider'
import StandartCarousel from '../compenents/HomePageCompenents/StandartCarousel'
import Title from '../compenents/HomePageCompenents/Title'
import VerticalSlider from '../compenents/HomePageCompenents/VerticalSlider'

export default function Home() {
  return (
    <div className='home'>

    <SwiperSlider />

    <Title title={'Seslendirmeli TV dizileri ve filmler'} prime={true} />
    <StandartCarousel />
    <Title title={'Önerilen Dizi'} prime={true} />
    <StandartCarousel />
    <Title title={'Çok İzlenen Diziler'} prime={true} />
    <StandartCarousel />
    <Title title={'Amazon Orijinal ve Özel İçerikler'} prime={true} />
    <VerticalSlider />
    <Title title={'Seslendirmeli TV dizileri ve filmler'} prime={true} />
    <StandartCarousel />
    <Title title={'Önerilen Dizi'} prime={true} />
    <StandartCarousel />
    <Title title={'Çok İzlenen Diziler'} prime={true} />
    <StandartCarousel />
    <Title title={'Amazon Orijinal ve Özel İçerikler'} prime={true} />
    <VerticalSlider />
    <Title title={'Seslendirmeli TV dizileri ve filmler'} prime={true} />
    <StandartCarousel />
    <Title title={'Önerilen Dizi'} prime={true} />
    <StandartCarousel />
    <Title title={'Çok İzlenen Diziler'} prime={true} />
    <StandartCarousel />


    <div className='aps'></div>
   </div>
  )
}
