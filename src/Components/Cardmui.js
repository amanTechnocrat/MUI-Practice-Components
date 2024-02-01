import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

const Cardmui = () => {
    return (
        // <Box width="300px" m={2}>
        <Grid container>

        <Grid item xs={12} sx={{ m: 2}} >
            <Card sx={{minHeight:"90vh",backgroundColor:"gold"}}>
            {/* <CardMedia component="img" height="140" image='https://source.unsplash.com/random' alt='image'/>

 
                <CardContent>
                    <Typography variant='h5' component="div">Card</Typography>
                    <Typography variant='body2' color="text.secondary">
                        A small, rectangular piece of card or plastic, often with your signature, photograph, or other information proving who you are, that allows you to do something, such as make a payment, get money from a bank, or enter a particular place.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>share</Button>
                    <Button>learn more</Button>
                </CardActions> */}
            </Card>
            </Grid>
            </Grid>
        // </Box>
    )
}

export default Cardmui