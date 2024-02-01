import { Box, List, ListItem, ListItemText, ListItemIcon, Avatar, ListItemAvatar, ListItemButton, Divider } from '@mui/material';
import React from 'react'
import { MailOutline } from '@mui/icons-material';

const MuiListitem = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }} m={1}>
      <List>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <MailOutline />
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="First" secondary="lorem" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Second" />
        </ListItem>

        <ListItem>
          <ListItemText primary="Third" />
        </ListItem>

      </List>
    </Box>
  )
}

export default MuiListitem;