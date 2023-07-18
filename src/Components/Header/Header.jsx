import React from "react";
import { useState } from "react"; 
// importing material ui components
import { Box, Typography } from "@mui/material"; 
// importing styled component for customising mui component in manual
import { styled } from "@mui/system";
import TemporaryDrawer from "../Sidebar/Sidebar";
import CustomButton from "../CustomButton/CustomButton";
import logoImg from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import {useNavigate} from "react-router-dom";


function Header() {

  const navigate = useNavigate();
  //  creating a state for drawer working open and close
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  // creating a function for functionality for drawer component
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };
  
  // creating navigation links
  const navTitles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/dishes",
      display: "Dishes",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about-us",
      display: "About us",
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

  // create a customized componet for navigation links
  const NavBarLink = styled(Typography)(() => ({
    fontSize: "15px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  // creating customized component for logo
  const NavBarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  // create a customized component for  navigation menu bar for mobile devices
  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CustomMenuIcon  onClick={toggleDrawer("left", true)}/>
            
            <NavBarLogo src={logoImg} alt="logo" />
          </Box>
          {/* set the customised component */}
          <NavBarLinksBox variant="body2">
            {
              // iterting the nav links with help of map function
              navTitles.map((item, index) => (
                <NavBarLink key={index} variant="body2" onClick={()=>navigate(item.path)}>{item.display}</NavBarLink>
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
      {/* importing the drawe component */}
      <TemporaryDrawer state={mobileMenu} toggleDrawer={toggleDrawer} navTitles={navTitles}/>
    </>
  );
}

export default Header;
