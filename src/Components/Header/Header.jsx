import React from "react";
// importing material ui components
import { Box, Typography } from "@mui/material";

// importing styled component for customising mui component in manual
import { styled } from "@mui/system";

import CustomButton from "../CustomButton/CustomButton";
import logoImg from "../../assets/logo.png";
function Header() {
  // creating navigation links
  const navTitles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "Services",
    },
    {
      path: "/",
      display: "Dishes",
    },
  ];

  // manualy customizing mui component
  // theme provide the breakpoints and responsiveness
  // styled function inside provide the which component want to be customizing
  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const NavBarLink = styled(Typography)(() => ({
    fontSize: "15px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));


  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "40px",
          maxWidth: "auto",
          backgroundColor: "#FED801",
          marginLeft: "0px",
          marginBottom: "-24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
            <Box sx={{
            display: "flex",
            alignItems: "center",
          }}>
                <NavBarLogo src={logoImg} alt="" />
            </Box>
          {/* set the customised component */}
          <NavBarLinksBox variant="body2">
            {
              // iterting the nav links with help of map function
              navTitles.map((item, index) => (
                <NavBarLink>{item.display}</NavBarLink>
              ))
            }
          </NavBarLinksBox>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <NavBarLink variant="body2">Sign up</NavBarLink>
          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="Register"
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
