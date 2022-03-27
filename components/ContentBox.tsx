import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { relative } from "node:path/win32";

const StyledGrid = styled(Grid)(({ theme }) => ({
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

const SliderText = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const StyledImageGridItem = styled(Grid)`
  position: relative;
`;

const StyledContainer = styled(Box)`
  background-color: #101011;
  color: white;
  overflow: hidden;
`;

const StlyledButton = styled(Button)`
  width: 7em;
  margin-top: 1em;
`;

export default function ContentBox() {
  return (
    <StyledContainer>
      <Container maxWidth="xl">
        <StyledGrid container spacing={2}>
          <Grid item xs={4}>
            <SliderText>
              <Typography
                variant="h2"
                fontWeight="500"
                component="div"
                gutterBottom
              >
                Sauna
              </Typography>
              <Typography variant="subtitle1" component="div">
                Lorem ipsum dolor sit amet. Vel repellat aliquid est
                reprehenderit voluptatem quo animi repellendus. Et molestias
                saepe ut minima consequatur rem cupiditate sint ex obcaecati
                nulla et dolorem voluptatem.
              </Typography>
              <StlyledButton variant="outlined">
                Viac <DoubleArrowIcon />
              </StlyledButton>
            </SliderText>
          </Grid>
          <StyledImageGridItem item xs={8}>
            <Image
              alt={`slide`}
              src="/images/slider/half/material.png"
              layout="fill"
              objectFit="cover"
              priority={true}
            />
          </StyledImageGridItem>
        </StyledGrid>
      </Container>
    </StyledContainer>
  );
}
