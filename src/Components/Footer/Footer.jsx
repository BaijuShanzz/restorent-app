import React from 'react'
import {Typography} from "@mui/material";
import { styled} from '@mui/system';
import { Box,Container } from '@mui/system';

import fbIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagraminIcon from "../../assets/instagram.png";

function Footer() {
    const CustomContainer = styled(Container)(({theme})=>({
        display: "flex",
        justifyContent: "space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]:{
            flexDirection: "column",
            textAlign: "center"
        },
    }));

    const FooterLink = styled("span")(({theme})=>({
        fontSize : "16px",
        color : "#000066",
        fontWeight: "300",
        cursor : "pointer",
        "&:hover":{
            color: "#66B2FF",
        }
    }));

    const IconBox = styled(Box)(({theme})=>({
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        [theme.breakpoints.down("sm")]:{
            justifyContent: "center"
        }
    }))
  return (
    <>
    <Box sx={{ py: 10, backgroundColor: "#FFF6B2"}}>
        <CustomContainer>
            <Box>
                <Typography sx={{fontSize:"20px",color: "#1C1C1D",fontWeight: "700"}}>
                    Featured
                </Typography>
                <FooterLink>Guides</FooterLink>
                <br />
                <FooterLink>Services</FooterLink>
                <br />
                <FooterLink>Contact us</FooterLink>
            </Box>
            <Box>
            <Typography sx={{fontSize:"20px",color: "#1C1C1D",fontWeight: "700"}}>
                    Overview
                </Typography>
                <FooterLink>Partnership</FooterLink>
                <br />
                <FooterLink>Location</FooterLink>
                <br />
                <FooterLink>Terms of use & privacy polices</FooterLink>
            </Box>
            <Box>
                <Typography sx={{fontSize: "20px", color: "#1C1C1D" ,fontWeight: "700"}}>
                    Get in touch
                </Typography>
                <Typography sx={{fontSize: "16px", color: "#7A7A7E" ,fontWeight: "500"}}>
                    Keep in touch with our social media pages
                </Typography>
                <IconBox>
                    <img src={fbIcon} alt="fbicon" style={{cursor: "pointer"}} />
                    <img src={twitterIcon} alt="twittericon" style={{cursor: "pointer"}} />
                    <img src={instagraminIcon} alt="instagram icon" style={{cursor: "pointer"}} />
                </IconBox>
            </Box>
        </CustomContainer>
    </Box>
    </>
  )
}

export default Footer