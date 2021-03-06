import { Grid } from "@mui/material";
import { GetStaticProps } from "next";

import { getContentData } from "../lib/content";
import ApplicationBar from "../components/AppBar";
import BlogPreview from "../components/BlogPreview";
import ContentBox from "../components/ContentBox";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import ImageMasonry from "../components/ImageMasonry";
import ImgTextSlider from "../components/ImgTextSlider";
import Options from "../components/Options";
import SingleImage from "../components/SingleImage";

export default function Landing({
  contentData,
}: {
  contentData: {
    date: string;
    "3-options": { title: string; description: string }[];
  };
}) {
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
          <Options content={contentData["3-options"]} />
        </Grid>
        <Grid item xs={12}>
          <SingleImage />
        </Grid>
        <Grid item xs={12}>
          <BlogPreview />
        </Grid>
        <Grid item xs={12}>
          <ImageMasonry />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const contentData = await getContentData("landing");

  return {
    props: {
      contentData,
    },
  };
};
