import "./App.css";
import { ControlPanel } from "./components/ControlPanel";
import { Grid } from "./components/Grid";
import { useScene } from "./renderer/useScene";
import { Grid as GridModel } from "./models/Grid";
import { Vector } from "./models/Vector";
import { useState } from "react";

const grid = new GridModel(new Vector(4, 4));

function App() {
  const sceneController = useScene(grid);
  const [debug, setDebug] = useState(false);

  return (
    <div className="App">
      <h1>Help the Robot Deliver Some Sushi!</h1>
      <ControlPanel
        {...sceneController}
        toggleDebug={() => setDebug((debug) => !debug)}
      />
      <Grid {...sceneController} debug={debug} />
    </div>
  );
}

export default App;
