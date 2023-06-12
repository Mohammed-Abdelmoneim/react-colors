import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelprs";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div>
      <Palette {...seedColors[5]} />
    </div>
  );
}

export default App;
