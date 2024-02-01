import React,{useState} from 'react'
import { Stack,Button ,IconButton,ButtonGroup,ToggleButton,ToggleButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MUibutton = () => {
    const [tog, settog] = useState("")
    console.log(tog)
  return (
    <>
    <Stack spacing={2} direction="row">
        <Button>hh</Button>
        <Button variant='contained'>hh</Button>
        <Button variant='outlined'>hh</Button>
        <Button variant='contained' size="large" color="error">large</Button>
        <Button variant='contained' disableElevation disableRipple endIcon={<SendIcon/>}>uu</Button>
        <IconButton aria-label="send" size="large" color="primary" >
        <SendIcon/>
        </IconButton>
    </Stack>
    <br/>
    <ButtonGroup variant='contained' aria-label='buttongrp' orientation='vertical'>
    <Button >hh</Button>
    <Button >hh</Button>
    <Button >hh</Button>
    </ButtonGroup>
    <Stack direction="row" >

    <ToggleButtonGroup
    color='error'
    size='large'
    value={tog}
    onChange={(e,val)=>{settog(val)}}
    variant='contained'
    orientation='vertical'
    exclusive
    aria-label='tt'
    >
        <ToggleButton value="f">f</ToggleButton>
        <ToggleButton value="r">r</ToggleButton>
        <ToggleButton value="p">p</ToggleButton>
    </ToggleButtonGroup>
    </Stack>
    </>
  )
}

export default MUibutton