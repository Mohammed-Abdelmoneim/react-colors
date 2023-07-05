import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentcolor: "teal",
      newColorName: "",
    };

    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      if (
        this.props.colors.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
      ) {
        return true;
      }

      return false;
    });

    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      if (
        this.props.colors.every(
          ({ color }) => color !== this.state.currentcolor
        )
      ) {
        return true;
      }

      return false;
    });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentcolor: newColor.hex });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  addNewColor() {
    const newColor = {
      color: this.state.currentcolor,
      name: this.state.newColorName,
    };
    this.setState({
      colors: [...this.state.colors, newColor],
      newColorName: "",
    });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentcolor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({
      newColorName: "",
    });
  }
  render() {
    const { paletteIsFull } = this.props;
    const { currentcolor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker color={currentcolor} onChange={this.updateCurrentColor} />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name must be unique",
              "Color is already used!",
            ]}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={paletteIsFull}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentcolor,
            }}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
