import {EffectFade,  Autoplay } from 'swiper';
import domhill from '../assets/domhill.jpg'
import croptop from '../assets/croptop.jpeg'
import fresh from '../assets/fresh.jpeg'
import womenjogger from '../assets/womenjogger.jpeg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Swiperr =  () => {
  return (
    <div className='mx-3 pt-11'> 
  
    <Swiper 
      // install Swiper modules
      modules={[EffectFade,  Autoplay]}
      spaceBetween={30}
      effect={"fade"}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
    >
      <div>
       <SwiperSlide>  <div className='h-[50vh] w-full relative '> <div className = ' w-full mt-52  items flex justify-center absolute'> <button className = 'bg-black  uppercase text-white  p-3' type = 'button'> shop now </button></div> <img className='h-full w-full  object-cover' src={domhill} alt="" /> </div> </SwiperSlide>
      <SwiperSlide>  <div className='h-[50vh] w-full relative '> <div className = ' w-full mt-52  items flex justify-center absolute'> <button className = 'bg-black  uppercase text-white  p-3' type = 'button'> shop now </button></div> <img className = 'h-full w-full  object-cover object-top' src= {croptop} alt="" /> </div>  </SwiperSlide>
      <SwiperSlide>  <div className='h-[50vh] w-full relative '> <div className = ' w-full mt-52  items flex justify-center absolute'> <button className = 'bg-black  uppercase text-white  p-3' type = 'button'> shop now </button></div> <img className = 'h-full w-full   object-cover object-top' src= {womenjogger} alt="" /> </div>  </SwiperSlide>
      <SwiperSlide>  <div className='h-[50vh] w-full relative '> <div className = ' w-full mt-52  items flex justify-center absolute'> <button className = 'bg-black  uppercase text-white  p-3' type = 'button'> shop now </button></div> <img className = 'h-full w-full  object-cover object-top' src= {fresh} alt="" /> </div>  </SwiperSlide>
      </div>      
    </Swiper>
    </div>
  );
};

export default Swiperr;