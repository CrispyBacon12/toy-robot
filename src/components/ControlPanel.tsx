import { useState } from "react";
import { Facing } from "../models/Facing";
import css from "./ControlPanel.module.css";
import { SceneController } from "./SceneController";

interface Props extends SceneController {
  toggleDebug: () => void;
}

export function ControlPanel(props: Props) {
  const { toggleDebug, ...scene } = props;
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [f, setF] = useState(Facing.NORTH);

  return (
    <>
      <div className={css.row}>
        <label>
          x:{" "}
          <input
            type="number"
            min={0}
            max={scene.grid.bounds.x}
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
          />
        </label>
        <label>
          y:{" "}
          <input
            type="number"
            min={0}
            max={scene.grid.bounds.y}
            value={y}
            onChange={(e) => setY(Number(e.target.value))}
          />
        </label>
        <label>
          f:{" "}
          <select value={f} onChange={(e) => setF(e.target.value as any)}>
            <option value={Facing.NORTH}>North</option>
            <option value={Facing.SOUTH}>South</option>
            <option value={Facing.EAST}>East</option>
            <option value={Facing.WEST}>West</option>
          </select>
        </label>
        <button onClick={() => scene.place(x, y, f)}>Place</button>
      </div>
      <div className={css.row}>
        <button onClick={() => scene.move()}>Move</button>
        <button onClick={() => scene.left()}>Left</button>
        <button onClick={() => scene.right()}>Right</button>
        <button onClick={() => scene.report()}>Report</button>
        <button className={css.debug} onClick={() => toggleDebug()}>
          Debug
        </button>
      </div>
    </>
  );
}
