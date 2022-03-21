import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  height: "10em",

  [theme.breakpoints.up("sm")]: {
    height: "20em",
  },
  [theme.breakpoints.up("md")]: {
    height: "30em",
  },
  [theme.breakpoints.up("lg")]: {
    height: "40em",
  },
}));

const sliderImages = [
  "/images/slider/city.jpeg",
  "/images/slider/river.jpeg",
  "/images/slider/winter.jpeg",
];

export default function HeroSlider() {
  const slides = sliderImages.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <StyledContainer>
          <Image
            alt={`slide-${index}`}
            src={image}
            layout="fill"
            objectFit="cover"
          />
        </StyledContainer>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
    >
      {slides}
    </Swiper>
  );
}
