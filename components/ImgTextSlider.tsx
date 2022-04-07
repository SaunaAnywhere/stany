import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Container, Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: "30em",
  flexFlow: "wrap-reverse",

  [theme.breakpoints.up("md")]: {
    height: "30em",
    flexFlow: "initial",
  },
  [theme.breakpoints.up("lg")]: {
    height: "40em",
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

const SliderText = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 2em;
`;

const StyledImageGridItem = styled(Grid)`
  position: relative;
`;

const sliderImages = [
  {
    url: "/images/slider/half/kamna.png",
    title: "Kamna",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  {
    url: "/images/slider/half/material.png",
    title: "Material",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
  {
    url: "/images/slider/half/river.png",
    title: "River",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
  },
];

export default function HeroSlider() {
  const slides = sliderImages.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <StyledGrid container spacing={2}>
          <StyledImageGridItem item xs={12} md={8}>
            <Image
              alt={`slide-${index}`}
              src={image.url}
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </StyledImageGridItem>
          <Grid item xs={12} md={4}>
            <SliderText>
              <Typography
                variant="h4"
                fontWeight="700"
                component="div"
                gutterBottom
              >
                {image.title}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {image.description}
              </Typography>
            </SliderText>
          </Grid>
        </StyledGrid>
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
