import React,{useState} from 'react'
import { Accordion , AccordionSummary,AccordionDetails, Typography, Box } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

const Accordian = () => {
    const [expand, setexpand] = useState(false);
    const handlechange = (isExpanded,panel)=>{
        setexpand(isExpanded?panel:null)
    }
  return (
    <Box sx={{m:"56px" }} >
        <Accordion expanded={expand==="panel1"} onChange={(e,isExpanded)=>{handlechange(isExpanded,"panel1")}}>
            <AccordionSummary aria-controls='panle1' id="panel1" expandIcon={<ExpandMore/>}>
                <Typography>Panel 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>Et occaecat enim est ut excepteur eu laboris cillum eiusmod laboris esse incididunt pariatur anim.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded={expand==="panel2"} onChange={(e,isExpanded)=>{handlechange(isExpanded,"panel2")}}>
            <AccordionSummary aria-controls='panle2' id="panel2" expandIcon={<ExpandMore/>}>
                <Typography>Panel 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>Et occaecat enim est ut excepteur eu laboris cillum eiusmod laboris esse incididunt pariatur anim.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion  expanded={expand==="panel3"} onChange={(e,isExpanded)=>{handlechange(isExpanded,"panel3")}}>
            <AccordionSummary aria-controls='panle3' id="panel3" expandIcon={<ExpandMore/>}>
                <Typography>Panel 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>Et occaecat enim est ut excepteur eu laboris cillum eiusmod laboris esse incididunt pariatur anim.</Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default Accordian