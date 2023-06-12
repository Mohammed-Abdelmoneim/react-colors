import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Pallette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const ColorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={this.changeLevel}
        />
        {/* navbar goes here */}
        <div className="palette-colors">{ColorBoxes}</div>
        {/* footer enentually */}
      </div>
    );
  }
}

export default Pallette;
