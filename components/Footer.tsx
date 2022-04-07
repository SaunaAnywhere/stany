import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

const BlackContainer = styled(Box)`
  background-color: #101011;
  color: white;
  overflow: hidden;
`;

const StyledContainer = styled(Container)`
  padding: 2em;
`;

export default function Footer() {
  return (
    <>
      <BlackContainer>
        <StyledContainer maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                fontWeight="700"
                component="div"
                gutterBottom
              >
                Kontakty
              </Typography>
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="div"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <SendIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="janci@saunovaciestany.sk" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="+421 949 022 771" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <InstagramIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="@SaunovacieStany" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <FacebookIcon sx={{ color: "#ffffff" }} />
                  </ListItemIcon>
                  <ListItemText primary="SaunovacieStany" />
                </ListItemButton>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                fontWeight="700"
                component="div"
                gutterBottom
              >
                Dôležité odkazy
              </Typography>
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="div"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton>
                  <ListItemText primary="Sauny" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Blog" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemText primary="Eshop" />
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </StyledContainer>
      </BlackContainer>
      <StyledContainer maxWidth="xl">
        <Grid container>
          <Grid item xs={6}>
            Logo
          </Grid>
          <Grid item xs={6} textAlign="right">
            Copyright 2020 | SaunovacieStany.sk
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
}
