import { styled } from "@mui/system";
import { Box, Container } from "@mui/material";
import Image from "next/image";

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

export default function SingleImage() {
  return (
    <StyledContainer maxWidth={false}>
      <Image
        alt="image"
        src="/images/slider/winter.jpeg"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
    </StyledContainer>
  );
}
