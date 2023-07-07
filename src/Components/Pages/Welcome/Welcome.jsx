import {Box,Typography} from "@mui/material";
import {styled} from "@mui/system";
import { Container } from "@mui/system";
import CustomButton from "../../CustomButton/CustomButton";
import welcome from "../../../assets/welcome.png";
import React from 'react'

function Welcome() {
    // creating a styled component for hero component
    const CustomBox = styled(Box)(({theme})=>({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(3),
        [theme.breakpoints.down("md")]:{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        }
    }));

    // creating custom styled component for paragram/heading
    const Title = styled((Typography))(({theme})=>({
        fontsize: "64px",
        color: "#fff",
        fontWeight: "bold",
        margin: theme.spacing(4,0,4,0),
        [theme.breakpoints.down("md")]:{
            fontsize: "40px"
        }
    }))
  return (
    <Box sx={{ backgroundColor: "#FED801" , minHeight: "80vh"}}>
        <Container>
            <CustomBox>
                <Box sx={{flex: "1"}}>
                    <Typography variant="body2" sx={{
                        fontSize: "18px",
                        color : "#687690",
                        fontWeight: "500",
                        mt: 10,
                        md: 4
                    }}>
                        Welcome to Techflix Restorent
                    </Typography>
                    <Title variant="h1" sx={{fontSize: "18px", color: "#546473" , my:4}}>
                        Discover a place where you'll love to Eat
                    </Title>
                    <Typography variant="body2" sx={{fontSize: "18px", color: "#5A6473", my:4}}>
                        Imerse yourself in the elegant ambiance as you saver each bite, accompanied by our selection of hand-picked wines and careful
                    </Typography>
                    <CustomButton 
                    backgroundColor="#0F1B4C"
                    color="#fff"
                    buttonText="More About us"
                    welcomeBtn={true}/>
                </Box>
                <Box sx={{flex: "1.25"}}>
                    <img src={welcome} alt="welcome" style={{maxWidth: "100%", marginBottom: "2rem"}} />
                </Box>
            </CustomBox>
        </Container>
    </Box>
  )
}

export default Welcome;
