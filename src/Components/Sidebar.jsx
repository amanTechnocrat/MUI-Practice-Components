import React from 'react'

// Customizable Area Start
import { Avatar, Box, Typography, TextField, InputAdornment, Button, Dialog } from '@mui/material';
import { createTheme, ThemeProvider, withStyles, Theme, createStyles } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import TestPage from './TestPage';
// Customizable Area End


class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    // Customizable Area Start

    // Customizable Area End

    render() {
        return (
            // Customizable Area Start


            <ThemeProvider theme={theme}>
                <Box sx={webStyles.container}>

                    <Box sx={webStyles.sidebarWrapper}>

                        <Box>
                            <Box>
                                <img src="./logo.png" width={37} height={58} />
                            </Box>

                            <Box sx={webStyles.listContainer}>
                                {sidebarArray.map(({ label, icon }) => (<Box sx={webStyles.listWrapper}>
                                    <Box>
                                        {icon}
                                    </Box>
                                    <Typography variant='subtitle2'>{label}</Typography>
                                </Box>))}
                            </Box>
                        </Box>

                        <Box>
                            <Box sx={webStyles.profileWrapper}>

                                <Box sx={webStyles.profileRage}>
                                    <Avatar variant='square' src="./profile.png" />
                                    <Box>
                                        <Typography variant='body1'>Easin Arafat</Typography>
                                        <Typography style={{ color: "#788B9A" }} variant='body1'>Admin</Typography>
                                    </Box>
                                </Box>

                                <Box>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.24547 8.35866C6.88089 8.35866 6.59261 8.64199 6.59261 9.00033C6.59261 9.35033 6.88089 9.64199 7.24547 9.64199H12.3327V13.6253C12.3327 15.667 10.6454 17.3337 8.55967 17.3337H4.43055C2.35327 17.3337 0.666016 15.6753 0.666016 13.6337V4.37533C0.666016 2.32533 2.36175 0.666992 4.43903 0.666992H8.57663C10.6454 0.666992 12.3327 2.32533 12.3327 4.36699V8.35866H7.24547ZM15.3579 6.11716L17.7912 8.54216C17.9162 8.66716 17.9829 8.8255 17.9829 9.0005C17.9829 9.16716 17.9162 9.33383 17.7912 9.4505L15.3579 11.8755C15.2329 12.0005 15.0662 12.0672 14.9079 12.0672C14.7412 12.0672 14.5745 12.0005 14.4495 11.8755C14.1995 11.6255 14.1995 11.2172 14.4495 10.9672L15.7829 9.64216H12.3329V8.35883H15.7829L14.4495 7.03383C14.1995 6.78383 14.1995 6.3755 14.4495 6.1255C14.6995 5.86716 15.1079 5.86716 15.3579 6.11716Z" fill="#9A3F3B" />
                                    </svg>
                                </Box>


                            </Box>
                        </Box>


                    </Box>

                    <Box sx={webStyles.secondaryPage}>
                        <Box sx={webStyles.topBarWrapper}>
                            <Box>
                                <TextField
                                    style={webStyles.searchInput}
                                    data-test-id="text"
                                    variant="outlined"
                                    size="small"
                                    placeholder="search"
                                    type="text"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Box>

                            <Box sx={webStyles.topbarprofileWrapper}>
                                <Box sx={webStyles.topbarprofileRage}>
                                    <Avatar variant='circular' src="./profile.png" />
                                    <Box>
                                        <Typography style={{ color: "#788B9A" }} variant='body1'>Welcome</Typography>
                                        <Typography variant='body1'>Easin Arafat</Typography>
                                    </Box>
                                </Box>

                                <Box>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.9998 14.9748C11.8665 14.9748 11.7371 14.9498 11.6118 14.8998C11.4865 14.8498 11.3825 14.7831 11.2998 14.6998L6.6998 10.0998C6.51647 9.91647 6.4248 9.68314 6.4248 9.3998C6.4248 9.11647 6.51647 8.88314 6.6998 8.6998C6.88314 8.51647 7.11647 8.4248 7.3998 8.4248C7.68314 8.4248 7.91647 8.51647 8.0998 8.6998L11.9998 12.5998L15.8998 8.6998C16.0831 8.51647 16.3165 8.4248 16.5998 8.4248C16.8831 8.4248 17.1165 8.51647 17.2998 8.6998C17.4831 8.88314 17.5748 9.11647 17.5748 9.3998C17.5748 9.68314 17.4831 9.91647 17.2998 10.0998L12.6998 14.6998C12.5998 14.7998 12.4915 14.8708 12.3748 14.9128C12.2581 14.9548 12.1331 14.9755 11.9998 14.9748Z" fill="#444444" />
                                    </svg>
                                </Box>
                            </Box>

                        </Box>

                        <Box sx={webStyles.pages}>
                           <TestPage />
                        </Box>

                    </Box>

                </Box>
            </ThemeProvider>
            // Customizable Area End
        )
    }
}

// Customizable Area Start
const webStyles = {
    dialogRage: {
        "borderRadius": "40px",
        "background": "gold",
        "width": "539px",
        "height": "592px"
    },
    container: {
        height: "100vh",
        width: "100vw",
        bgcolor: "#F2F4FA",
        display: "flex",
        flexDirection: "row"
    },
    sidebarWrapper: {
        width: "15%",
        bgcolor: "white",
        height: "100vh",
        padding: "27px 25px 30px 28px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        justifyContent: "space-between"
    },
    listContainer: {
        marginTop: "57px",
        display: "flex",
        gap: "10px",
        flexDirection: "column",
    },
    listWrapper: {
        display: "flex",
        gap: "14px",
        flexDirection: "row",
        alignItems: "center",
    },
    profileWrapper: {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        // marginTop: "auto"
    },
    profileRage: {
        "display": "flex",
        "alignItems": "center",
        "gap": "10px"
    },
    topBarWrapper: {
        height: "87px",
        bgcolor: "white",
        width: "100%",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-around"
    },
    topbarprofileRage: {
        "display": "flex",
        "alignItems": "center",
        "gap": "16px"
    },
    topbarprofileWrapper: {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "space-between",
        gap: "42px"
    },
    searchInput: {
        width: "513px",
        borderRadius: "10px",
        border: "1px solid #DDDDE8"
    },
    secondaryPage: {
        width: "85%"
    },
    pages: {
        bgcolor: "white",
        margin: "28px",
        "height": "calc(100vh - 143px)",
        "overflowX": "hidden",
        boxSizing: "border-box",
        "::-webkit-scrollbar": {
            width: "3px"
        },
        "::-webkit-scrollbar-track": {
            background: "#f1f1f1"
        },
        "::-webkit-scrollbar-thumb": {
            background: "#888"
        }
    }
}

const theme = createTheme({
    palette: {
        secondary: { main: '#FFF' },
        error: { main: "#FF6060" },
        primary: { main: '#096FFF' },
    },
    typography: {
        subtitle2: {
            fontSize: "16px",
            fontStyle: 'normal',
            fontWeight: 400,
            color: "#BCC5CD"
        },
        body1: {
            fontSize: "12px",
            fontStyle: 'normal',
            fontWeight: 400,
        }
    },
});

const sidebarArray = [
    {
        label: "Dashboard",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.54 2H7.92C9.33 2 10.46 3.15 10.46 4.561V7.97C10.46 9.39 9.33 10.53 7.92 10.53H4.54C3.14 10.53 2 9.39 2 7.97V4.561C2 3.15 3.14 2 4.54 2ZM4.54 13.4697H7.92C9.33 13.4697 10.46 14.6107 10.46 16.0307V19.4397C10.46 20.8497 9.33 21.9997 7.92 21.9997H4.54C3.14 21.9997 2 20.8497 2 19.4397V16.0307C2 14.6107 3.14 13.4697 4.54 13.4697ZM19.4601 2H16.0801C14.6701 2 13.5401 3.15 13.5401 4.561V7.97C13.5401 9.39 14.6701 10.53 16.0801 10.53H19.4601C20.8601 10.53 22.0001 9.39 22.0001 7.97V4.561C22.0001 3.15 20.8601 2 19.4601 2ZM16.0801 13.4697H19.4601C20.8601 13.4697 22.0001 14.6107 22.0001 16.0307V19.4397C22.0001 20.8497 20.8601 21.9997 19.4601 21.9997H16.0801C14.6701 21.9997 13.5401 20.8497 13.5401 19.4397V16.0307C13.5401 14.6107 14.6701 13.4697 16.0801 13.4697Z" fill="#BCC5CD" />
        </svg>
    },
    {
        label: "Active Users",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33049 2H16.6695C20.0705 2 21.9905 3.929 22.0005 7.33V16.67C22.0005 20.07 20.0705 22 16.6695 22H7.33049C3.92949 22 2.00049 20.07 2.00049 16.67V7.33C2.00049 3.929 3.92949 2 7.33049 2ZM12.0495 17.86C12.4805 17.86 12.8395 17.54 12.8795 17.11V6.92C12.9195 6.61 12.7705 6.299 12.5005 6.13C12.2195 5.96 11.8795 5.96 11.6105 6.13C11.3395 6.299 11.1905 6.61 11.2195 6.92V17.11C11.2705 17.54 11.6295 17.86 12.0495 17.86ZM16.6505 17.86C17.0705 17.86 17.4295 17.54 17.4805 17.11V13.83C17.5095 13.509 17.3605 13.21 17.0895 13.04C16.8205 12.87 16.4805 12.87 16.2005 13.04C15.9295 13.21 15.7805 13.509 15.8205 13.83V17.11C15.8605 17.54 16.2195 17.86 16.6505 17.86ZM8.21949 17.11C8.17949 17.54 7.82049 17.86 7.38949 17.86C6.95949 17.86 6.59949 17.54 6.56049 17.11V10.2C6.53049 9.889 6.67949 9.58 6.95049 9.41C7.21949 9.24 7.56049 9.24 7.83049 9.41C8.09949 9.58 8.25049 9.889 8.21949 10.2V17.11Z" fill="#788B9A" />
            </g>
        </svg>
    },
    {
        label: "Active Banks",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7872 10.539C21.6518 10.6706 21.4681 10.7457 21.2747 10.7457C20.559 10.7457 19.9787 11.3095 19.9787 11.9953C19.9787 12.6858 20.5522 13.2467 21.2611 13.2543C21.6605 13.258 22 13.5286 22 13.9166V16.3265C22 18.3549 20.3075 20 18.2186 20H15.0658C14.7398 20 14.4758 19.7435 14.4758 19.4269V17.3975C14.4758 17.0029 14.1567 16.6929 13.7505 16.6929C13.354 16.6929 13.0251 17.0029 13.0251 17.3975V19.4269C13.0251 19.7435 12.7611 20 12.4362 20H5.78143C3.70213 20 2 18.3558 2 16.3265V13.9166C2 13.5286 2.33946 13.258 2.73888 13.2543C3.44874 13.2467 4.02128 12.6858 4.02128 11.9953C4.02128 11.3282 3.46035 10.8209 2.72534 10.8209C2.53191 10.8209 2.34816 10.7457 2.21277 10.6142C2.07737 10.4827 2 10.3042 2 10.1163V7.68291C2 5.65731 3.706 4 5.7911 4H12.4362C12.7611 4 13.0251 4.25649 13.0251 4.57311V6.97827C13.0251 7.36348 13.354 7.68291 13.7505 7.68291C14.1567 7.68291 14.4758 7.36348 14.4758 6.97827V4.57311C14.4758 4.25649 14.7398 4 15.0658 4H18.2186C20.3075 4 22 5.64416 22 7.67352V10.0411C22 10.229 21.9226 10.4075 21.7872 10.539ZM13.7505 14.8702C14.1567 14.8702 14.4758 14.5508 14.4758 14.1656V10.4075C14.4758 10.0223 14.1567 9.70288 13.7505 9.70288C13.354 9.70288 13.0251 10.0223 13.0251 10.4075V14.1656C13.0251 14.5508 13.354 14.8702 13.7505 14.8702Z" fill="#788B9A" />
            </g>
        </svg>
    },
    {
        label: "Document Storage",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.81 2H16.191C19.28 2 21 3.78 21 6.83V17.16C21 20.26 19.28 22 16.191 22H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2ZM8.08 6.66V6.65H11.069C11.5 6.65 11.85 7 11.85 7.429C11.85 7.87 11.5 8.22 11.069 8.22H8.08C7.649 8.22 7.3 7.87 7.3 7.44C7.3 7.01 7.649 6.66 8.08 6.66ZM8.08 12.74H15.92C16.35 12.74 16.7 12.39 16.7 11.96C16.7 11.53 16.35 11.179 15.92 11.179H8.08C7.649 11.179 7.3 11.53 7.3 11.96C7.3 12.39 7.649 12.74 8.08 12.74ZM8.08 17.31H15.92C16.319 17.27 16.62 16.929 16.62 16.53C16.62 16.12 16.319 15.78 15.92 15.74H8.08C7.78 15.71 7.49 15.85 7.33 16.11C7.17 16.36 7.17 16.69 7.33 16.95C7.49 17.2 7.78 17.35 8.08 17.31Z" fill="#788B9A" />
            </g>
        </svg>
    },
    {
        label: 'Subscriptions', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4109 2.76862L16.4119 3.51824C19.1665 3.73413 20.9862 5.61119 20.9891 8.48975L21 16.9155C21.0039 20.054 19.0322 21.985 15.8718 21.99L8.15188 22C5.01119 22.004 3.01482 20.027 3.01087 16.8795L3.00001 8.55272C2.99606 5.65517 4.75153 3.78311 7.50617 3.53024L7.50518 2.78061C7.5042 2.34083 7.83001 2.01 8.26444 2.01C8.69886 2.009 9.02468 2.33883 9.02567 2.77861L9.02666 3.47826L14.8914 3.47027L14.8904 2.77062C14.8894 2.33084 15.2152 2.001 15.6497 2C16.0742 1.999 16.4099 2.32884 16.4109 2.76862ZM4.52148 8.86157L19.4696 8.84158V8.49175C19.4272 6.34283 18.349 5.21539 16.4138 5.04748L16.4148 5.81709C16.4148 6.24688 16.0801 6.5877 15.6556 6.5877C15.2212 6.5887 14.8943 6.24887 14.8943 5.81909L14.8934 5.0095L9.02863 5.01749L9.02962 5.82609C9.02962 6.25687 8.70479 6.5967 8.27036 6.5967C7.83594 6.5977 7.50913 6.25887 7.50913 5.82809L7.50815 5.05847C5.58286 5.25137 4.51753 6.38281 4.52049 8.55072L4.52148 8.86157ZM15.2399 13.4043V13.4153C15.2498 13.8751 15.625 14.2239 16.0801 14.2139C16.5244 14.2029 16.8789 13.8221 16.869 13.3623C16.8483 12.9225 16.4918 12.5637 16.0485 12.5647C15.5944 12.5747 15.2389 12.9445 15.2399 13.4043ZM16.0554 17.892C15.6013 17.882 15.235 17.5032 15.234 17.0435C15.2241 16.5837 15.5884 16.2029 16.0426 16.1919H16.0525C16.5165 16.1919 16.8927 16.5707 16.8927 17.0405C16.8937 17.5102 16.5185 17.891 16.0554 17.892ZM11.1721 13.4203C11.1919 13.8801 11.568 14.2389 12.0222 14.2189C12.4665 14.1979 12.821 13.8181 12.8012 13.3583C12.7903 12.9085 12.425 12.5587 11.9807 12.5597C11.5266 12.5797 11.1711 12.9605 11.1721 13.4203ZM12.0262 17.8471C11.572 17.8671 11.1968 17.5082 11.1761 17.0485C11.1761 16.5887 11.5305 16.2089 11.9847 16.1879C12.429 16.1869 12.7953 16.5367 12.8052 16.9855C12.8259 17.4463 12.4705 17.8261 12.0262 17.8471ZM7.10433 13.4553C7.12408 13.915 7.50025 14.2749 7.95442 14.2539C8.39872 14.2339 8.75317 13.8531 8.73243 13.3933C8.72256 12.9435 8.35725 12.5937 7.91196 12.5947C7.45779 12.6147 7.10334 12.9955 7.10433 13.4553ZM7.95837 17.8521C7.5042 17.8731 7.12901 17.5132 7.10828 17.0535C7.10729 16.5937 7.46273 16.2129 7.9169 16.1929C8.3612 16.1919 8.7275 16.5417 8.73737 16.9915C8.7581 17.4513 8.40365 17.8321 7.95837 17.8521Z" fill="#788B9A" />
            </g>
        </svg>
    },
    {
        label: "Manage Questionnaire", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1796 4.41C17.1796 3.08 18.2596 2 19.5896 2C20.9196 2 21.9996 3.08 21.9996 4.41C21.9996 5.74 20.9196 6.82 19.5896 6.82C18.2596 6.82 17.1796 5.74 17.1796 4.41ZM13.3295 14.7593L16.2195 11.0303L16.1795 11.0503C16.3395 10.8303 16.3695 10.5503 16.2595 10.3003C16.1505 10.0503 15.9095 9.8803 15.6505 9.8603C15.3795 9.8303 15.1105 9.9503 14.9495 10.1703L12.5305 13.3003L9.75951 11.1203C9.58951 10.9903 9.38951 10.9393 9.18951 10.9603C8.99051 10.9903 8.81051 11.0993 8.68951 11.2593L5.73051 15.1103L5.66951 15.2003C5.49951 15.5193 5.57951 15.9293 5.87951 16.1503C6.01951 16.2403 6.16951 16.3003 6.33951 16.3003C6.57051 16.3103 6.78951 16.1893 6.92951 16.0003L9.43951 12.7693L12.2895 14.9103L12.3795 14.9693C12.6995 15.1393 13.0995 15.0603 13.3295 14.7593ZM15.4495 3.7803C15.4095 4.0303 15.3895 4.2803 15.3895 4.5303C15.3895 6.7803 17.2095 8.5993 19.4495 8.5993C19.6995 8.5993 19.9395 8.5703 20.1895 8.5303V16.5993C20.1895 19.9903 18.1895 22.0003 14.7895 22.0003H7.40051C3.99951 22.0003 1.99951 19.9903 1.99951 16.5993V9.2003C1.99951 5.8003 3.99951 3.7803 7.40051 3.7803H15.4495Z" fill="#788B9A" />
            </g>
        </svg>
    },
    {
        label: "Notification", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 8.79633C18.7071 10.0523 19.039 10.7925 19.7695 11.6456C20.3231 12.2741 20.5 13.0808 20.5 13.956C20.5 14.8302 20.2128 15.6601 19.6373 16.3339C18.884 17.1417 17.8215 17.6573 16.7372 17.747C15.1659 17.8809 13.5937 17.9937 12.0005 17.9937C10.4063 17.9937 8.83505 17.9263 7.26375 17.747C6.17846 17.6573 5.11602 17.1417 4.36367 16.3339C3.78822 15.6601 3.5 14.8302 3.5 13.956C3.5 13.0808 3.6779 12.2741 4.23049 11.6456C4.98384 10.7925 5.29392 10.0523 5.29392 8.79633V8.3703C5.29392 6.68834 5.71333 5.58852 6.577 4.51186C7.86106 2.9417 9.91935 2 11.9558 2H12.0452C14.1254 2 16.2502 2.98702 17.5125 4.62466C18.3314 5.67916 18.7071 6.73265 18.7071 8.3703V8.79633ZM9.07367 20.0608C9.07367 19.5573 9.53582 19.3266 9.96318 19.2279C10.4631 19.1222 13.5093 19.1222 14.0092 19.2279C14.4366 19.3266 14.8987 19.5573 14.8987 20.0608C14.8738 20.5402 14.5926 20.9653 14.204 21.2352C13.7001 21.628 13.1088 21.8767 12.4906 21.9664C12.1487 22.0107 11.8128 22.0117 11.4828 21.9664C10.8636 21.8767 10.2723 21.628 9.76938 21.2342C9.37978 20.9653 9.09852 20.5402 9.07367 20.0608Z" fill="#788B9A" />
            </g>
        </svg>
    },
    {
        label: "Settings", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g opacity="0.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4023 13.58C20.76 13.77 21.036 14.07 21.2301 14.37C21.6083 14.99 21.5776 15.75 21.2097 16.42L20.4943 17.62C20.1162 18.26 19.411 18.66 18.6855 18.66C18.3278 18.66 17.9292 18.56 17.6022 18.36C17.3365 18.19 17.0299 18.13 16.7029 18.13C15.6911 18.13 14.8429 18.96 14.8122 19.95C14.8122 21.1 13.872 22 12.6968 22H11.3069C10.1215 22 9.18125 21.1 9.18125 19.95C9.16081 18.96 8.31259 18.13 7.30085 18.13C6.96361 18.13 6.65702 18.19 6.40153 18.36C6.0745 18.56 5.66572 18.66 5.31825 18.66C4.58245 18.66 3.87729 18.26 3.49917 17.62L2.79402 16.42C2.4159 15.77 2.39546 14.99 2.77358 14.37C2.93709 14.07 3.24368 13.77 3.59115 13.58C3.87729 13.44 4.06125 13.21 4.23498 12.94C4.74596 12.08 4.43937 10.95 3.57071 10.44C2.55897 9.87 2.23194 8.6 2.81446 7.61L3.49917 6.43C4.09191 5.44 5.35913 5.09 6.38109 5.67C7.27019 6.15 8.425 5.83 8.9462 4.98C9.10972 4.7 9.20169 4.4 9.18125 4.1C9.16081 3.71 9.27323 3.34 9.4674 3.04C9.84553 2.42 10.5302 2.02 11.2763 2H12.7172C13.4735 2 14.1582 2.42 14.5363 3.04C14.7203 3.34 14.8429 3.71 14.8122 4.1C14.7918 4.4 14.8838 4.7 15.0473 4.98C15.5685 5.83 16.7233 6.15 17.6226 5.67C18.6344 5.09 19.9118 5.44 20.4943 6.43L21.179 7.61C21.7718 8.6 21.4447 9.87 20.4228 10.44C19.5541 10.95 19.2475 12.08 19.7687 12.94C19.9322 13.21 20.1162 13.44 20.4023 13.58ZM9.10972 12.01C9.10972 13.58 10.4076 14.83 12.0121 14.83C13.6165 14.83 14.8838 13.58 14.8838 12.01C14.8838 10.44 13.6165 9.18 12.0121 9.18C10.4076 9.18 9.10972 10.44 9.10972 12.01Z" fill="#A3282D" />
            </g>
        </svg>
    }
]

export default Sidebar
// Customizable Area End

