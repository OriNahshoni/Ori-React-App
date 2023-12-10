import React from "react";
import { Container, Divider, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";

const AboutPage = () => {
  const navigate = useNavigate();
  const handleSignUP = () => {
    navigate(ROUTES.REGISTER);
  };

  const theme = useTheme();

  return (
    <Container
      sx={{
        marginBottom: 3,
        marginTop: 3,
      }}
    >
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundImage: `url('/assets/imgs/business.jpg')`,
            alt: "businessPIC",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "block",
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: theme.spacing(4),
            }}
          >
            <Box component="form" noValidate>
              <Typography variant="h2" fontFamily="lucida" textAlign="center">
                Welcome to BIZCARDS!
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  marginBottom: 3,
                  fontSize: "1.2rem",
                  [theme.breakpoints.down("sm")]: {
                    fontSize: "1rem",
                  },
                }}
              >
                Discover the power of BIZCARDS, your go-to solution for boosting
                your business's visibility among potential clients. Our
                intuitive platform enables you to effortlessly craft, customize,
                and publish your unique business card. Whether you're a guest
                exploring our diverse collection of inspiring business cards or
                a registered business user showcasing your brand, BIZCARDS
                caters to your needs.
                <br />
                Ready to make your mark? Click below to join us now!
              </Typography>
              <Divider sx={{ marginTop: 2 }} />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, fontSize: "1.2rem" }}
                onClick={handleSignUP}
              >
                Sign Up!
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
