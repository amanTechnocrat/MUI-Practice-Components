import React, { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Favorite } from '@mui/icons-material'

const Muitabs = () => {
  
  const [wic, setwic] = useState('1');

  return (
    <Box>
      <TabContext value={wic}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "400px" }}>
          <TabList onChange={(_, val) => setwic(val)} textColor="secondary" indicatorColor='secondary'
            variant='scrollable' scrollButtons="auto" >
            <Tab label="1" value="1" icon={<Favorite />} iconPosition="start" />
            <Tab label="2" value="2" />
            <Tab label="3" value="3" />
            <Tab label="4" value="4" />
            <Tab label="5" value="5" />
            <Tab label="6" value="6" />
          </TabList>
        </Box>
        <TabPanel value='1'>1</TabPanel>
        <TabPanel value='2'>2</TabPanel>
        <TabPanel value='3'>3</TabPanel>
        <TabPanel value='4'>4</TabPanel>
        <TabPanel value='5'>5</TabPanel>
        <TabPanel value='6'>6</TabPanel>

      </TabContext>
    </Box>
  )
}

export default Muitabs