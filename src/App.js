import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelprs";

function App() {
  return (
    <div>
      <Palette palette={generatePalette(seedColors[5])} />
    </div>
  );
}

export default App;
