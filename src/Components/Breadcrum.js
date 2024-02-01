import { Box ,Breadcrumbs,Link,Typography} from '@mui/material';
import { NavigateNext } from '@mui/icons-material';
import React from 'react'

const Breadcrum = () => {
  return (
    <Box>
        <Breadcrumbs maxItems={3} itemsBeforeCollapse={2} separator={<NavigateNext fontSize='small'/>}>
            <Link underline='hover'>Home</Link>
            <Link underline='hover'>Catalog</Link>
            <Link underline='hover'>Options</Link>
            <Typography  color="text.primary">hello</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default Breadcrum;