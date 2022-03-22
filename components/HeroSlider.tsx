import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  height: "10em",
  position: "relative",

  [theme.breakpoints.up("sm")]: {
    height: "20em",
  },

  [theme.breakpoints.up("md")]: {
    height: "30em",
  },

  [theme.breakpoints.up("lg")]: {
    height: "50em",
  },
}));

const StyledSwiper = styled(Swiper)`
  & .swiper-button-prev,
  .swiper-button-next {
    text-shadow: 0 0 0.2em black;
    color: white;
    font-weight: bold;
  }
`;

const sliderImages = [
  "/images/slider/city.jpeg",
  "/images/slider/river.jpeg",
  "/images/slider/winter.jpeg",
];

export default function HeroSlider() {
  const slides = sliderImages.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <StyledContainer maxWidth={false}>
          <Image
            alt={`slide-${index}`}
            src={image}
            // placeholder="blur"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </StyledContainer>
      </SwiperSlide>
    );
  });

  return (
    <StyledSwiper
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
    >
      {slides}
    </StyledSwiper>
  );
}
