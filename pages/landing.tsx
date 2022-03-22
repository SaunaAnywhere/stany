import { Grid } from "@mui/material";
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
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <HeroSlider />
        </Grid>
        <Grid item xs={12}>
          <ImgTextSlider />
        </Grid>
        <Grid item xs={12}>
          <ContentBox />
        </Grid>
        <Grid item xs={12}>
          <Options />
        </Grid>
        <Grid item xs={12}>
          <SingleImage />
        </Grid>
        <Grid item xs={12}>
          <ImageMasonry />
        </Grid>
        <Grid item xs={12}>
          <BlogPreview />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
