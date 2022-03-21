import { Container } from "@mui/material";
import ApplicationBar from "../components/AppBar";
import BlogPreview from "../components/BlogPreview";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import ImageMasonry from "../components/ImageMasonry";
import ImgTextSlider from "../components/ImgTextSlider";
import Options from "../components/Options";
import SingleImage from "../components/SingleImage";

export default function Landing() {
  return (
    <>
      <ApplicationBar />
      <HeroSlider />
      <Container maxWidth="xl">
        <ImgTextSlider />
        <ContentBox />
        <Options />
        <SingleImage />
        <ImageMasonry />
        <BlogPreview />
        <Footer />
      </Container>
    </>
  );
}
