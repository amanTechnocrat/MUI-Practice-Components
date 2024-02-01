import { Box,Grid ,Paper} from '@mui/material'

const Gridmui = () => {
    return (
        <Paper sx={{margin:"100px"}}>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={2} p={1}>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor="primary.light">item 1</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor="secondary.main">item 2</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor="info.main">item 3</Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box bgcolor="error.main">item 4</Box>
                    </Grid>
                    
                </Grid>
            </Box>
            </Paper>
    )
}

export default Gridmui