import React,{useState} from 'react'
import { Stack,CircularProgress,Button, LinearProgress } from '@mui/material'

const MuiPRogress = () => {
    const [cal, setcal] = useState(20);
  return (
    <Stack spacing={3} m={3}>

    <CircularProgress/>
    <CircularProgress color='success'/>
    <CircularProgress variant='determinate' value={cal}/>
    <Button onClick={()=>setcal(cal+20)}>Click Me</Button>

    <LinearProgress/>
    <LinearProgress color='success'/>
    <LinearProgress variant='determinate' value={cal}/>
    </Stack>
  )
}

export default MuiPRogress