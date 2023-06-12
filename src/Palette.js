import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

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
        <Navbar level={level} changeLevel={this.changeLevel} />
        {/* navbar goes here */}
        <div className="palette-colors">{ColorBoxes}</div>
        {/* footer enentually */}
      </div>
    );
  }
}

export default Pallette;
