import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";

// passing drawe component values from props
export default function TemporaryDrawer({state,toggleDrawer,navTitles}) {


  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* navigation tils and icons component */}
      <List>
        {/* mapping each icons and names one by one */}
        {navTitles.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              
              <ListItemIcon>
                {index === 0 && <HomeIcon/>}
                {index === 1 && <FeaturedPlayListIcon/>}
                {index === 2 && <MiscellaneousServicesIcon/>}
                {index === 3 && <ContactsIcon/>}
              </ListItemIcon>
              <ListItemText primary={text.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    // drawe component
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}