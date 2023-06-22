import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { withStyles } from "@material-ui/styles";
import "./ColorBox.css";

/* const styles = {
  ColorBox: {
    width: "20%",
    height: (props) => (props.showLink ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",

    "&:hover button": {
      opacity: "1",
    },
  },
  copyText: {
    color: (props) => {
      return chroma(props.background).luminance() >= 0.6 ? "black" : "white";
    },
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.7)" : "white",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    right: "0px",
    bottom: "0px",
    border: "none",
    height: "30px",
    width: "60px",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "rgba(0,0,0,0.7)" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    border: "none",
    transition: "0.5s",
    cursor: "pointer",
    textDecoration: "none",
    opacity: "0",

    "&:hover": {
      opacity: "1",
    },
  },
};
 */

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1000);
    });
  }
  render() {
    const { name, background, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.5;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div style={{ background }} className="ColorBox">
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>copied!</h1>
            <p className={isLightColor && "dark-text"}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className={`copy-button ${isLightColor && "dark-text"}`}>
              Copy
            </button>
            {showLink && (
              <Link to={moreUrl} onClick={(e) => e.stopPropagation}>
                <span className={`see-more ${isLightColor && "dark-text"}`}>
                  More
                </span>
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
