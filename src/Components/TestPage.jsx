import React from 'react'

// Customizable Area Start
import { Box, Typography, Divider, Avatar, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider, withStyles, Theme, createStyles } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
// Customizable Area End


class TestPage extends React.Component {
    constructor(props) {
        super(props);
    }
    // Customizable Area Start

    // Customizable Area End

    render() {
        return (
            // Customizable Area Start
            <ThemeProvider theme={theme}>
                <Box sx={webStyles.header}>
                    <Typography style={{ color: "#9C292D" }} variant='h3'>Account Settings</Typography>
                    <Typography color="secondary" variant='h3'>Password</Typography>
                </Box>
                <Divider variant='fullWidth' />
                <Box sx={webStyles.formContainer}>

                    <Box sx={webStyles.profileContainer}>
                        <Typography color="secondary" variant='h3'>Your Profile Picture</Typography>
                        <Box sx={webStyles.profileRage}>
                            <Avatar sx={webStyles.profileImage} variant='square' src="./Image.png" />
                            <Box sx={webStyles.profileActionBtn}>
                                <Button sx={webStyles.profileBtn1} variant='contained'>Update New</Button>
                                <Button sx={webStyles.profileBtn2} variant='contained'>Remove Profile Picture</Button>
                            </Box>
                        </Box>
                    </Box>

                    <Grid sx={webStyles.formGrid} container justifyContent="space-between" alignItems="center">
                        <Grid item xs={5}>
                            <Box>
                                <Typography color="secondary" variant='h3'>Full Name</Typography>
                                <input style={webStyles.inputRage} />
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <Box>
                                <Typography color="secondary" variant='h3'>User Name</Typography>
                                <input style={webStyles.inputRage} />
                            </Box>

                        </Grid>
                        <Grid item xs={1}>
                            <Typography color="secondary" variant='h3'>‎ </Typography>
                            <Button variant='outlined'>Edit</Button>
                        </Grid>
                    </Grid>

                </Box>
            </ThemeProvider>
            // Customizable Area End
        )
    }
}

// Customizable Area Start
const webStyles = {
    formGrid: {
        marginTop: "36px"
    },
    profileContainer: {
        display: "flex",
        flexDirection: "column",
        gap: "23px"
    },
    profileBtn1: {
        "borderRadius": "26px",
        "background": "#9C292D",
        "width": "171px",
        "height": "51px",
        '&:hover': {
            opacity: '0.8',
            "background": "#9C292D",
        }
    },
    profileBtn2: {
        "borderRadius": "26px",
        "background": "rgba(224, 224, 224, 0.67)",
        "width": "270px",
        "height": "51px",
        color: "#6F6F70",
        '&:hover': {
            opacity: '0.8',
            "background": "rgba(224, 224, 224, 0.67)",
        }
    },
    profileRage: {
        display: "flex",
        flexDirection: "row",
        gap: "40px",
        alignItems: "center"
    },
    profileActionBtn: {
        display: "flex",
        flexDirection: "row",
        gap: "13px"
    },
    header: {
        height: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    formContainer: {
        padding: "35px"
    },
    profileImage: {
        width: "87px",
        height: "81px"
    },
    inputRage: {
        marginTop: "8px",
        width: "100%",
        height: "51px",
        borderRadius: "26px",
        padding: "19px 30px",
        color: "#ACACAC",
        fontSize: "15px",
        border: "1px solid #E0E0E0",
        fontWeight: 300,
        "boxSizing": "border-box"
    },
}

const theme = createTheme({
    palette: {
        secondary: { main: '#565656' },
        error: { main: "#FF6060" },
        primary: { main: '#096FFF' },
    },
    typography: {
        body1: {
            fontSize: "16px",
            fontStyle: 'normal',
            fontWeight: 400,

        },
        h3: {
            fontSize: "18px",
            fontStyle: 'normal',
            fontWeight: 400,
        }
    },
});

export default TestPage
// Customizable Area End


