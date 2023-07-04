import { Component } from "react";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import NewPaletteForm from "./NewPaletteForm";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./ColorHelprs";
import SingleColorPalette from "./SingleColorPalette";

/* import { random } from "chroma-js";
import Pallette from "./Palette";
import { PlaylistAdd, RouterSharp } from "@material-ui/icons";
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.savePalete = this.savePalete.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  savePalete(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routerProps) => (
            <NewPaletteForm
              savePalette={this.savePalete}
              palettes={this.state.palettes}
              {...routerProps}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
      /* <div>
        <Palette palette={generatePalette(seedColors[1])} />
      </div> */
    );
  }
}

export default App;
