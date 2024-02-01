

// Customizable Area Start
// import { adTesting } from "./assets";
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import React,{Component} from "react";
// Customizable Area End





export default class VideoAdsController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtInputValue: "",
      txtSavedValue: "A",
      enableField: false,
      tempVideoFile: null,
      enableSkipBtn: false,
      enablePreview: false,
      formState: {
        timePointForAd: "00:00",
        ads: false,
        adSkipable: false,
        adSkipTime: undefined,
        adDuration: undefined
      },
      playbackStats: {
        playing: false,
        controls: true
      },
      videoFileStats: {
        typeAd: "",
        file: ""
      },
      videoDuration: 0
    };
    // Customizable Area End
  }

 


  playerRef 
  intervalRef

  //web events
  handleCheckChange = (event) => {
    this.setState({ formState: { ...this.state.formState, [event.target.name]: event.target.checked } })
  }

  handleSelectChange = (name, value) => {
    this.setState({ formState: { ...this.state.formState, [name]: value } })
  }

  handleSliderTime = (value) => {
    this.setState({ formState: { ...this.state.formState, timePointForAd: this.secondsToMinutes(value) } })
  }

  handleFileUpload = (event) => {
    const selectedFile = event.target.files?.[0];
    const allowedFormats = [
      'video/mp4',
      'video/webm',
      'video/ogg',
      'video/mpeg',
      'video/quicktime',
      'video/x-matroska',
      'video/x-msvideo',
      'video/x-flv',
      'video/3gpp',
      'video/quicktime'
    ];
    if (selectedFile) {
      const fileSizeInMB = selectedFile.size / (1024 * 1024);
      if (fileSizeInMB <= 100) {
        if (allowedFormats.includes(selectedFile.type)) {
          this.setState({ videoFileStats: { typeAd: false, file: URL.createObjectURL(selectedFile) }, tempVideoFile: URL.createObjectURL(selectedFile) });
        } else {
          alert(`File '${selectedFile.name}' is not video format.`);
        }
      } else {
        alert(`File '${selectedFile.name}' exceeds the 10MB file size limit.`);
      }
    }
  };

  handlePreview = () => {
    this.setState({ playbackStats: { ...this.state.playbackStats, playing: true }, enablePreview: true });
    console.log(this.state.formState, "formstateformstate")
  }

  handleVideoEnded = () => {
    if (this.state.videoFileStats.typeAd) {
      this.setState({
        videoFileStats: { typeAd: false, file: this.state.tempVideoFile },
        playbackStats: { ...this.state.playbackStats, playing: true, controls: true },
        enableSkipBtn: false
      }, () => {
        this.playerRef.current?.seekTo(this.minutesToSeconds(this.state.formState.timePointForAd))
        clearInterval(this.intervalRef)
      });
    }
  }

  handleVideoReady = ({ getDuration }) => {
    const duration = getDuration();
    const formattedDuration = Number(Math.floor(duration));
    this.setState({ videoDuration: formattedDuration })
  };

  handleSkipAdBtnAppearance = () => {
    if (this.state.formState.adSkipable) {
      let skiptime = this.state.formState.adSkipTime * 1 * 1000
      this.intervalRef = setTimeout(() => {
        this.setState({ enableSkipBtn: true })
      }, skiptime);
    }
  }

  handleAdAppearance = (videoStats) => {
    let playedSeconds = this.secondsToMinutes(Math.floor(videoStats.playedSeconds))
    if (this.state.formState.timePointForAd == playedSeconds && this.state.formState.ads) {
      this.setState({
        videoFileStats: { typeAd: true },
        playbackStats: { ...this.state.playbackStats, playing: true, controls: false }
      });
      this.handleSkipAdBtnAppearance()
    }
  }

  handleGoBack=()=>{
    this.setState({ playbackStats: { ...this.state.playbackStats, playing: false }, enablePreview: false, videoFileStats: { typeAd: false, file: this.state.tempVideoFile } });
  }

  secondsToMinutes = (seconds) => {
    let timevalue = seconds ? seconds : 0
    let minutes = Math.floor(timevalue / 60);
    let remainingSeconds = timevalue % 60;
    let minutesString = minutes < 10 ? "0" + minutes : minutes;
    let secondsString = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
    return minutesString + ":" + secondsString;
  }

  minutesToSeconds = (timeString) => {
    let [minutesString, secondsString] = timeString.split(':');
    let minutes = parseInt(minutesString, 10);
    let seconds = parseInt(secondsString, 10);
    let totalSeconds = (minutes * 60) + seconds + 1;
    return totalSeconds;
  };
  // Customizable Area End
}
