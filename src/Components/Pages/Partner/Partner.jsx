import React from "react";
import { Box, Typography, Container } from "@mui/material";

// importing images
import { styled } from "@mui/system";
import logoImg from "../../../assets/logo.png";
import starsImg from "../../../assets/Star.png";
import logosImg from "../../../assets/logos.png";
function Partner() {
  // creating custom styled components for logos
  const CustomContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginbottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));
  return (
    <>
      <Box sx={{ mt: 10 }}>
        <Container>
          <CustomContainer>
            <CustomBox>
              <img src={logoImg} alt="logo" />
              <Typography
                variant="body2"
                sx={{
                  color: "#7D8589",
                  fontWeight: "bold",
                  fontSize: "16px",
                  mt: 2,
                }}
              >
                More than 45,000 trust Techflix
              </Typography>
            </CustomBox>
            <Box>
              <img src={starsImg} alt="starimg" />
              <Typography
                variant="body2"
                sx={{
                  color: "7D8589",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mt: 2,
                }}
              >
                5-star Rating (2k+ Reviews)
              </Typography>
            </Box>
          </CustomContainer>
        </Container>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <img src={logosImg} alt="logos img" />
        </Container>
      </Box>
    </>
  );
}

export default Partner;
