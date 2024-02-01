import React from "react";

// Customizable Area Start
import {
    Button,
    Typography,
    IconButton,
    Grid,
    Box, FormGroup, FormControlLabel, Checkbox, Select, Slider
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BackupIcon from '@mui/icons-material/Backup';
import ReactPlayer from 'react-player'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import VideoAdsController from "./VideoAdsController";
// Customizable Area End

// Customizable Area Start
const theme = createTheme({
    palette: {
        primary: { main: '#096FFF' },
    },
    typography: {
        "fontFamily": `inter, sans-serif`,
        h6: {
            textAlign: "center"
        }
    },
});
// Customizable Area End





export default class VideoAds extends VideoAdsController {
    constructor(props) {
        super(props);
        // Customizable Area Start
        this.fileUploadRes = React.createRef();
        // Customizable Area End
    }

    // Customizable Area Start
    fileUploadRes
    GenUploadPage = () => {
        return (
            <Grid item xs={6}>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Box>
                        <IconButton color="primary"
                            onClick={() => this.fileUploadRes.current?.click()}>
                            <BackupIcon style={webStyle.uploadIcon} />
                        </IconButton>
                        <input
                            data-test-id="fileInput"
                            type="file"
                            ref={this.fileUploadRes}
                            style={{ display: "none" }}
                            onChange={this.handleFileUpload}
                            accept="video/*"
                        />
                    </Box>
                    <Typography variant="h6">Please click on icon for uploading Video</Typography>
                </Grid>
            </Grid>
        )
    }
    // Customizable Area End

    render() {
        return (
            // Customizable Area Start
            <ThemeProvider theme={theme}>
                <Grid container style={webStyle.containerWrapper} direction="row" justifyContent="center" alignItems="center">

                    {!this.state.videoFileStats.file && !this.state.enablePreview && this.GenUploadPage()}

                    {this.state.videoFileStats.file && !this.state.enablePreview &&
                        <Grid item xs={6}>
                            <Grid container direction="column" justifyContent="center" alignItems="center">
                                <Grid item xs={12}>
                                    <ReactPlayer
                                        width={'100%'}
                                        height={'100%'}
                                        controls={true}
                                        onReady={this.handleVideoReady}
                                        playing={false}
                                        url={this.state.videoFileStats.file}
                                    />
                                </Grid>
                                <Grid item xs={12} style={webStyle.formWrapper}>
                                    <FormGroup style={webStyle.formRage}>
                                        <FormControlLabel style={webStyle.inputRage}
                                            control={<Checkbox checked={this.state.formState.ads} onChange={this.handleCheckChange} name="ads" color="primary" />}
                                            label="Do you want to play ads in Video"
                                            labelPlacement="start"
                                        />

                                        {this.state.formState.ads && <FormControlLabel
                                            style={webStyle.inputRage}
                                            control={
                                                <Slider
                                                    onChange={(e, value) => this.handleSliderTime(value)}
                                                    style={{ width: "30%" }}
                                                    value={this.minutesToSeconds(this.state.formState.timePointForAd)}
                                                    getAriaValueText={this.secondsToMinutes}
                                                    valueLabelFormat={this.secondsToMinutes}
                                                    valueLabelDisplay="auto"
                                                    min={0}
                                                    max={this.state.videoDuration}
                                                    marks={[
                                                        {
                                                            value: 0,
                                                            label: '00:00',
                                                        },
                                                        {
                                                            value: this.state.videoDuration,
                                                            label: this.secondsToMinutes(this.state.videoDuration),
                                                        }
                                                    ]}
                                                />
                                            }
                                            label="Pick a point to place a Ads in Video"
                                            labelPlacement="start"
                                        />}

                                        {this.state.formState.ads &&
                                            <FormControlLabel style={webStyle.inputRage}
                                                control={
                                                    <Select value={this.state.formState.adDuration} onChange={(e) => this.handleSelectChange('adDuration', e.target.value)} native style={webStyle.selectRage}
                                                    >
                                                        <option value={undefined}>Please select</option>
                                                        <option value={20}>10-20 sec</option>
                                                        <option value={30}>20-30 sec</option>
                                                        <option value={40}>30-40 sec</option>
                                                    </Select>
                                                }
                                                label="Select Ads duration"
                                                labelPlacement="start"
                                            />}

                                        {this.state.formState.ads &&
                                            <FormControlLabel style={webStyle.inputRage}
                                                control={<Checkbox checked={this.state.formState.adSkipable} onChange={this.handleCheckChange} name="adSkipable" color="primary" />}
                                                label="Do you want to Ads to be skipable"
                                                labelPlacement="start"
                                            />}

                                        {this.state.formState.adSkipable && this.state.formState.ads && <FormControlLabel style={webStyle.inputRage}
                                            control={
                                                <Select value={this.state.formState.adSkipTime} onChange={(e) => this.handleSelectChange('adSkipTime', e.target.value)} native style={webStyle.selectRage}
                                                >
                                                    <option value={undefined}>Please select</option>
                                                    <option value={5}>5 sec</option>
                                                    <option value={10}>10 sec</option>
                                                    <option value={15}>15 sec</option>
                                                </Select>
                                            }
                                            label="Make Ads skipable after how many sec"
                                            labelPlacement="start"
                                        />}

                                        <Button onClick={this.handlePreview} style={webStyle.buttonRage} variant="contained" color="primary">Preview</Button>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    }

                    {this.state.videoFileStats.file && this.state.enablePreview &&
                        <Grid item xs={6}>
                            <Grid spacing={3} container direction="column" justifyContent="center" alignItems="center">
                                <Grid item xs={12} style={{ position: "relative" }}>
                                    <ReactPlayer
                                        ref={this.playerRef}
                                        width={'100%'}
                                        height={'100%'}
                                        controls={this.state.playbackStats.controls}
                                        onEnded={this.handleVideoEnded}
                                        playing={this.state.playbackStats.playing}
                                        onProgress={this.handleAdAppearance}
                                        url={this.state.videoFileStats.file}
                                    />
                                    {this.state.enableSkipBtn &&
                                        <Button onClick={this.handleVideoEnded} style={webStyle.skipBtnRage} endIcon={<SkipNextIcon />}>Skip Ads
                                        </Button>
                                    }
                                </Grid>
                                <Grid item xs={12} style={webStyle.actionBtnContainer}>
                                    <Button onClick={this.handleGoBack} variant="contained" color="primary">Go Back</Button>
                                    <Button variant="contained" color="primary">Submit</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    }

                </Grid>
            </ThemeProvider>
            // Customizable Area End
        );
    }
}

// Customizable Area Start
const webStyle = {
    containerWrapper: {
        background: "#f5f5f5",
        height: '100vh',
        width: '100vw'
    },
    uploadIcon: {
        fontSize: "90px"
    },
    selectRage: {
        marginLeft: "10px"
    },
    formRage: {
        alignItems: 'flex-start'
    },
    formWrapper: {
        width: '100%',
        padding: "20px"
    },
    inputRage: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "0px"
    },
    buttonRage: {
        alignSelf: "center"
    },
    skipBtnRage: {
        backgroundColor: "black",
        color: "white",
        border: "2px solid white",
        borderRight: '0',
        textTransform: "none",
        opacity: "0.8",
        position: "absolute",
        bottom: "70px",
        right: "12px",
        borderRadius: "4px 0px 0px 4px"
    },
    actionBtnContainer: {
        justifyContent: "space-around",
        display: "flex",
        width: "100%"
    }
}
// Customizable Area End