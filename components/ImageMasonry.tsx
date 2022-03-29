import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const StyledContainer = styled(Grid)(({ theme }) => ({
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

const ImageTile = styled(Grid)`
  position: relative;
  overflow: hidden;
`;

const ImageList = [
  "/images/slider/city.jpeg",
  "/images/slider/river.jpeg",
  "/images/slider/winter.jpeg",
  "/images/slider/winter.jpeg",
  "/images/slider/city.jpeg",
  "/images/slider/river.jpeg",
];

export default function ImageMasonry() {
  return (
    <StyledContainer container>
      {ImageList.map((image, index) => (
        <ImageTile item xs={4} key={index}>
          <Image
            alt="image"
            src={image}
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </ImageTile>
      ))}
    </StyledContainer>
  );
}
