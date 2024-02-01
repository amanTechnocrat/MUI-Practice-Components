import React,{useState} from 'react'
import { Drawer,Box,Typography,IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const MuiDrawer = () => {
    const [drawer, setdrawer] = useState(false);

  return (
    <>
    <IconButton onClick={()=>setdrawer(true)}>
        <MenuIcon/>
    </IconButton>
    <Drawer anchor="top" open={drawer} onClose={()=>setdrawer(false)}>
        <Box p={2} width="250px" textAlign="center">
            <Typography varient="h6" component="div">Side Bar</Typography>
        </Box>
    </Drawer>
    </>
  )
}

export default MuiDrawer;