import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function ImgTextSlider() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
    >
      <SwiperSlide>Img 1 With Text</SwiperSlide>
      <SwiperSlide>Img 2 With Text</SwiperSlide>
      <SwiperSlide>Img 3 With Text</SwiperSlide>
      <SwiperSlide>Img 4 With Text</SwiperSlide>
    </Swiper>
  );
}
