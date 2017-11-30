/* @flow */
/* eslint react/prop-types: 0 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
The base video component.
@examples
```jsx
<Video
src={"https://smedia.webcollage.net"}
poster={"https://smedia.webcollage.net"}
muted={false}
autoPlay={true}
controls={true}>
</Video>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Video
@import {Video}
@playground
Video
```
<Video
src={"https://smedia.webcollage.net"}
poster={"https://smedia.webcollage.net"}
muted={false}
autoPlay={true}
controls={true}>
</Video>
```
*/

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayBtn: props.showPlayBtn,
      showPlayagain: props.showPlayagain
    };
  }

  _pauseOrPlay() {
    if (this.videoControl) {
      if (this.videoControl.paused === false) {
        //if this video element is NOT paused
        this.videoControl.pause(); //pause this video element
        this.setState({ showPlayBtn: true });
      } else if (this.videoControl.paused === true) {
        this.videoControl.play(); // play this video element
        this.setState({ showPlayBtn: false });
        this.setState({ showPlayagain: false });
      }
    }
  }

  _handleVideoEnded() {
    this.setState({ showPlayBtn: true });
    this.setState({ showPlayagain: true });
  }

  _handleVideoPlay() {
    this.setState({ showPlayBtn: false });
  }

  _handleVideoPause() {
    this.setState({ showPlayBtn: true });
  }

  componentDidMount() {
    if (this.videoControl) {
      this.videoControl.addEventListener("ended", this._handleVideoEnded.bind(this));
      this.videoControl.addEventListener("play", this._handleVideoPlay.bind(this));
      this.videoControl.addEventListener("pause", this._handleVideoPause.bind(this));
    }
  }

  componentWillUnmount() {
    if (this.videoControl) {
      this.videoControl.removeEventListener("ended", this._handleVideoEnded.bind(this));
      this.videoControl.removeEventListener("play", this._handleVideoPlay.bind(this));
      this.videoControl.removeEventListener("pause", this._handleVideoPause.bind(this));
    }
  }

  render() {
    const {
      message,
      playIconLink,
      className = "",
      showPlayBtn: showPlayBtnProp, // eslint-disable-line no-unused-vars
      showPlayagain: showPlayagainProp, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;
    const { showPlayBtn, showPlayagain } = this.state;
    const classes = classNames("video_control", className);
    return (
      <div className="video_wrapper" onClick={this._pauseOrPlay.bind(this)}>
        <video
          className={classes}
          {...other}
          ref={ref => {
            this.videoControl = ref;
          }}
        >
          {message}
        </video>
        <div className={showPlayBtn ? "video_icon_show" : "video_icon_none"}>
          <img src={playIconLink} />
          <div className={showPlayagain ? "video_icon_text" : "video_icon_none"}>Play Again</div>
        </div>
      </div>
    );
  }
}

Video.displayName = "Video";

Video.propTypes = {
  /**
  Source Link for Video
  */
  src: PropTypes.string,
  /**
  Video format type
  */
  type: PropTypes.string,
  /**
  Muted indicator for the video
  */
  muted: PropTypes.bool,
  /**
  Autoplay indicator for the video
  */
  autoPlay: PropTypes.bool,
  /**
  Poster link for the video
  */
  poster: PropTypes.string,
  /**
  Preload indicator for the video
  */
  preload: PropTypes.string,
  /**
  Controls indicator for the video
  */
  controls: PropTypes.bool,
  /**
  ClassName for the video
  */
  className: PropTypes.string,
  /**
  Message for video not available in browser
  */
  message: PropTypes.string,
  /**
  Play button indicator for the video
  */
  showPlayBtn: PropTypes.bool,
  /**
  Play again indicator for the video
  */
  showPlayagain: PropTypes.bool,
  /**
  Play icon link for the video
  */
  playIconLink: PropTypes.string
};

Video.defaultProps = {
  src: "",
  type: "",
  muted: false,
  autoPlay: false,
  poster: "",
  preload: "none",
  controls: true,
  className: "",
  message: "Video is not supported in this browser",
  showPlayBtn: false,
  showPlayagain: false,
  playIconLink: ""
};
