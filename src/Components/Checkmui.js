import React, { useState } from 'react'
import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, FormGroup } from '@mui/material'
import { Bookmark } from '@mui/icons-material'
import { BookmarkBorder } from '@mui/icons-material'

const Checkmui = () => {
    const [check, setcheck] = useState(false)
    const [arr, setarr] = useState([])

    console.log(arr)
    const handlechange = (e) => {
        setcheck(e.target.checked)
    }
    const skilss=(e)=>{
        let index = arr.indexOf(e.target.value)
        if(index==-1){
            setarr([...arr,e.target.value])
        }else{
            setarr(arr.filter((val)=>val!=e.target.value))
        }
    }
    return (
        <>
            <Box>
                <FormControlLabel control={<Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />} label="Accept t&c" checked={check} onChange={handlechange} />
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="js" value="js" checked={arr.includes("js")} onChange={skilss} />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="css" value="css" checked={arr.includes("css")} onChange={skilss} />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="html" value="html" checked={arr.includes("html")} onChange={skilss} />
                    </FormGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default Checkmui