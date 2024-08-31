import { useSwiper } from 'swiper/react';

export const SlidePrevButton = () => {
  const swiper = useSwiper();

  return <button onClick={() => swiper.slidePrev()} className='m-2 p-2'>Prev</button>;
};