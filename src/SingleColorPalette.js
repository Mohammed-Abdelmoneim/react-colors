import { AllInclusiveSharp } from "@material-ui/icons";
import React, { Component } from "react";
import ColorBox from "./ColorBox";

const styles = {
  colorBoxes: {
    backgroundColor: "#f00",
  },
};
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));

    return (
      <div className="palette">
        <h1>single color palette</h1>
        <div className="palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
