import {RadioGroup,FormControl,FormLabel,FormControlLabel,Radio,Stack,FormHelperText} from '@mui/material'
import { useState } from 'react';
const Radiomui = () => {
    const [val, setval] = useState("");
    console.log(val)
  return (
    <Stack>
        <FormControl>
            <FormLabel id='test'>
                select exp
            </FormLabel>
            <RadioGroup name="radio" aria-labelledby='value' onChange={(e)=>setval(e.target.value)} row>
                <FormControlLabel control={<Radio color='error'/>} label="9" value={"9"}/>
                <FormControlLabel control={<Radio/>} label="4" value={"4"}/>
                <FormControlLabel control={<Radio/>} label="8" value={"8"}/>
            </RadioGroup>
            {val == 8 &&<FormHelperText>
                invalid 
            </FormHelperText>}
        </FormControl>
    </Stack>
  )
}

export default Radiomui