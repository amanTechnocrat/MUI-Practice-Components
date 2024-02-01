import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'
import { KeyboardArrowDown } from '@mui/icons-material'
const Navbar = () => {
    const [an, setan] = useState(null)
    const handleclick = (e) => {
        setan(e.currentTarget)
    }
    console.log(an)
    const open = Boolean(an)
    return (
        <AppBar position='static' >
            <Toolbar>
                <IconButton size='large' aria-label='logo' color="inherit">
                    <CatchingPokemon />
                </IconButton>
                <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>Navbar</Typography>
                <Stack direction={"row"} spacing={1}>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">See</Button>
                    <Button color="inherit">About Us</Button>
                    <Button color="inherit" id='resources-button' onClick={handleclick} aria-control={open ? "resources-menu" : null} aria-haspopup="true" aria-expanded={open ? true : null} endIcon={<KeyboardArrowDown />}
                    >Contact</Button>
                </Stack>
                <Menu id='resources-menu' anchorEl={an} open={open} MenuListProps={{
                    "aria-labelledby": "resources-button"
                }} onClose={() => setan(null)}>
                    <MenuItem>test</MenuItem>
                    <MenuItem>test</MenuItem>
                    <MenuItem>test</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;