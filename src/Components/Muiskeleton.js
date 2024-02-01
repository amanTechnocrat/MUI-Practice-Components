import React, { useState, useEffect } from 'react'
import { Stack, Skeleton, Typography, Avatar, Box } from '@mui/material';


const Muiskeleton = () => {
    const [loading, setloading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => { setloading(false) }, 3000)
    }, []);

    return (
        <Stack spacing={2}>
            <Box sx={{ width: "300px" }}>
                {loading ? (<Skeleton variant='rectangular' width={256} height={144}></Skeleton>) :
                    <img scr="" alt='skeleton' width={256} height={144} />}
            </Box>
            <Box sx={{ maxWidth: "400px" }}>
                {loading ? (<Skeleton variant='circular' width={40} height={40}></Skeleton>) :
                    <Avatar>V</Avatar>}
                {loading ? (<>
                    <Typography variant='body1'>
                        <Skeleton variant='text' width='100%'></Skeleton>
                    </Typography>
                </>) :
                    <Typography>lorem ipsum</Typography>
                    }
            </Box>
        </Stack>
    )
}

export default Muiskeleton;