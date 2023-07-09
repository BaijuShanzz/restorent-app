import {Typography,styled} from "@mui/material";
import { Box,Container } from "@mui/material";
import houseCard from "../../../assets/ambience.jpg";

const Ambience = ()=>{

    const CustomBox = styled(Box)(({theme})=>({
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        [theme.breakpoints.down("md")]:{
            flexDirection : "column",
            textAlilgn : "center"
        },
    }));

    const ImgContainer = styled(Box)(({theme})=>({
        width: "100%",
        [theme.breakpoints.down("md")]:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
    }));

    const LargeText = styled(Box)(({theme})=>({
        fontSize: "64px",
        color: "#000",
        fontWeight:"700",
        [theme.breakpoints.down("md")]:{
            fontSize: "32px"
        },
    }));

    const SmallText = styled(Box)(({theme})=>({
        fontSize: "18px",
        color: "7B8087",
        fontWeight: "500",
        [theme.breakpoints.down("md")]:{
            fontSize: "14px"
        },
    }));

    const TextFlexBox = styled(Box)(({theme})=>({
        marginTop: theme.spacing(7),
        display: "flex",
        justifyContent: "space-between",
        padding: theme.spacing(0,5,0,5),
        [theme.breakpoints.down("sm")]:{
            flexDirection: "column",
            gap: theme.spacing(5),
        },
    }));


    const Divider = styled("div")(({theme})=>({
        width: "13%",
        height: "5px",
        backgroundColor: "#000339",
        [theme.breakpoints.down("md")]:{
            marginLeft: "auto",
            marginRight: "auto"
        }
    }))
    return(
        <>
        <Box sx={{py:10}}>
            <Container>
                <CustomBox>
                    <ImgContainer>
                    <img src={houseCard} alt="house card" style={{maxWidth: "100%"}} />
                    </ImgContainer>
                    <Box>
                        <Divider/>
                        <Typography sx={{fontSize: "35px",color: "#000339",fontWeight: "700",my:3}}>
                            You've found a ambience you love.
                        </Typography>
                        <Typography>
                            Discover the opitome of culinary excellence at Savoria , where every visit is an enchanting redezvous with the art of dinig.
                        </Typography>
                    </Box>
                </CustomBox>
                <TextFlexBox>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <LargeText>250+</LargeText>
                        <SmallText>Dishes</SmallText>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <LargeText>300+</LargeText>
                        <SmallText>Trusted Clients</SmallText>
                    </Box>
                    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <LargeText>250+</LargeText>
                        <SmallText>Delivery</SmallText>
                    </Box>
                </TextFlexBox>
            </Container>
        </Box>
        </>
    )
}

export default Ambience;