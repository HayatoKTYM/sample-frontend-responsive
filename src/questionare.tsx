import 'swiper/css';

import { Pagination } from 'swiper/modules';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import { Q1 } from './questions/q1';
import { Q2 } from './questions/q2';
import { Q3 } from './questions/q3';

export const Questionare = () => (
  <div className='py-8 relative h-screen'>
    <Swiper
      spaceBetween={500}
      speed={2000}
      centeredSlides={true}
      slidesPerView={1}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination]}
    >
        <SwiperSlide>
          <Q1 first={true}/>
        </SwiperSlide>
        <SwiperSlide>
          <Q2 />
        </SwiperSlide>
        <SwiperSlide>
          <Q3 last={true} />
        </SwiperSlide>
    </Swiper>
  </div>
);