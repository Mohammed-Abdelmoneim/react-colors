import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
class Pallette extends Component {
  render() {
    const ColorBoxes = this.props.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className="palette">
        {/* navbar goes here */}
        <div className="palette-colors">{ColorBoxes}</div>
        {/* footer enentually */}
      </div>
    );
  }
}

export default Pallette;
