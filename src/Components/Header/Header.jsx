import React from 'react';
// importing material ui components
import { Box,Typography } from "@mui/material";

// importing styled component for customising mui component in manual
import { styled } from '@mui/system';

function Header() {
    // creating navigation links
    const navTitles = [{
        path: '/',
        display: "Home"
    },{
        path: '/',
        display: "Services"
    },
    {
        path: '/',
        display: "Dishes"
    },
]

// manualy customizing mui component
// theme provide the breakpoints and responsiveness
// styled function inside provide the which component want to be customizing
const NavBarLinksBox = styled(Box)(({theme}) =>({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        display: "none",
    },
}));

const NavBarLink = styled(Typography)(() =>({
    fontSize: "15px",
    color: "#4F5361",
    fontWeight: 'bold',
    cursor: "pointer",
    '&:hover':{
        color: "#fff"
    }
}));

  return (
    <>
    <Box>
        <Box>
            {/* set the customised component */}
            <NavBarLinksBox>
                {
                    // iterting the nav links with help of map function
                    navTitles.map((item,index)=>(
                       <NavBarLink>
                        {item.display}
                       </NavBarLink> 
                    ))
                }
            </NavBarLinksBox>
        </Box>
        <Box>
        </Box>
    </Box>
    </>
  )
}

export default Header