import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelprs";
import { random } from "chroma-js";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
