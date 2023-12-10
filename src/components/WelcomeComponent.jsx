import React from "react";
import { Container, Divider, Typography, Box, Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const WelcomeComponent = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate(ROUTES.REGISTER);
  };

  return (
    <Container sx={{ backgroundColor: "background.paper", padding: 3 }}>
      <Typography variant="h2" textAlign="center" mt={3} color="primary">
        Welcome to BIZCARD!
      </Typography>
      <Typography
        variant="body1"
        fontWeight={600}
        textAlign="center"
        mt={3}
        color="text.primary"
      >
        Elevate your business presence with BIZCARD – your premier solution for
        enhancing visibility to potential clients. 🚀 <br />
        Our user-friendly platform empowers you to effortlessly design,
        customize, and publish your business card. Explore a diverse range of
        inspiring business cards, add your favorites, and spark creativity!
      </Typography>

      <Box mt={3} mb={3} textAlign="center">
        <Fab
          size="large"
          color="primary"
          variant="extended"
          onClick={handleSignUp}
        >
          Create an account
        </Fab>
      </Box>

      <Divider mt={3} />
    </Container>
  );
};

export default WelcomeComponent;
