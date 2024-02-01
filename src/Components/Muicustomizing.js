import React from 'react'
import { Box, styled, Button } from '@mui/material';


const Muicustomizing = () => {

    // const StyledBox = styled(Box)(({ theme }) => ({
    //     height: "200px",
    //     width: "200px",
    //     backgroundColor: theme.newcolor
    // }))

     const StyledButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#096FFF",
        color:"white",
        '&:hover': {
            "opacity":"0.7",
            backgroundColor: "#096FFF"
        },
    }))

    // const StyledButton = styled(Box)`
    // && {
    // background: red;
    // border: 1px solid red;
    // font-weight: bold;
    // height:200px;
    // width:200px;
    // }`;

    return (<>
        {/* <Box
            sx={{ width: "300px", bgcolor: "newcolor", minHeight: "300px" }}
            m={3}
        >Box</Box> */}
        <StyledButton>usvgehbxjn</StyledButton>
    </>)
}

export default Muicustomizing;