import { Box, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledGrid = styled(Grid)`
  justify-content: center;
`;

const BlogArticles = [
  {
    title: "Blog title 1",
    image: "/images/blog1.png",
    description:
      "Popularita saunovania pri jazerach ma svoje caro, chlieb, chladnicka a mnoho dalsich vyhod. Neprechldnete ani po 100 rokoch v stane.",
  },
  {
    title: "Blog title 2",
    image: "/images/blog2.png",
    description:
      "Popularita saunovania pri jazerach ma svoje caro, chlieb, chladnicka a mnoho dalsich vyhod. Neprechldnete ani po 100 rokoch v stane.",
  },
  {
    title: "Blog title 3",
    image: "/images/blog3.jpeg",
    description:
      "Popularita saunovania pri jazerach ma svoje caro, chlieb, chladnicka a mnoho dalsich vyhod. Neprechldnete ani po 100 rokoch v stane.",
  },
  {
    title: "Blog title 4",
    image: "/images/blog2.png",
    description:
      "Popularita saunovania pri jazerach ma svoje caro, chlieb, chladnicka a mnoho dalsich vyhod. Neprechldnete ani po 100 rokoch v stane.",
  },
  {
    title: "Blog title 5",
    image: "/images/blog3.jpeg",
    description:
      "Popularita saunovania pri jazerach ma svoje caro, chlieb, chladnicka a mnoho dalsich vyhod. Neprechldnete ani po 100 rokoch v stane.",
  },
  {
    title: "Blog title 6",
    image: "/images/blog1.png",
    description:
      "Popularita saunovania pri jazerach ma svoje caro, chlieb, chladnicka a mnoho dalsich vyhod. Neprechldnete ani po 100 rokoch v stane.",
  },
];

export default function BlogPreview() {
  return (
    <Container>
      <StyledGrid container spacing={3}>
        {BlogArticles.map((blog, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="220"
                image={blog.image}
                alt="green tent"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "right" }}>
                <Button size="small">Viac</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </StyledGrid>
    </Container>
  );
}
