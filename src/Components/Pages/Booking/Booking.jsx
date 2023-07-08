import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// importing icons
import buyIcon from "../../../assets/buy_icon.png";
import sellIcon from "../../../assets/sell_icon.png";
import rentIcon from "../../../assets/sell_icon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "../../CustomButton/CustomButton";

function Booking() {
  // create common styled component container
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  // created a icons hold styled commponent
  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  // one by one icons styled component
  const GuidBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "0 auto",
          }}
        ></div>
        <Typography
          sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
        >
          How to Book?
        </Typography>
        <CustomBox>
          <Typography
            variant="body2"
            sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#5A6473",
              textAlign: "center",
            }}
          >
            Everything you need to know when you book for advance slot
          </Typography>
        </CustomBox>
        <GuidesBox>
          <GuidBox>
            <img src={buyIcon} alt="buy icon" />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#383c45",
                my: 1,
              }}
            >
              Order Guides
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
              >
                How to Order
              </Typography>
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>
          </GuidBox>
          <GuidBox>
            <img src={rentIcon} alt="buy icon" />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#383c45",
                my: 1,
              }}
            >
              Booking Guides
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
              >
                How to Book
              </Typography>
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>
          </GuidBox>
          <GuidBox>
            <img src={sellIcon} alt="buy icon" />
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "20px",
                color: "#383c45",
                my: 1,
              }}
            >
              Payment Guides
            </Typography>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
              >
                Payment Methods
              </Typography>
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>
          </GuidBox>
        </GuidesBox>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="see full Guides"
          guideBtn={true}
        />
      </Box>
    </>
  );
}

export default Booking;
