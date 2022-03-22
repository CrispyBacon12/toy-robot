import { useMemo, useReducer } from "react";
import { SceneController } from "../components/SceneController";
import { Grid } from "../models/Grid";
import { Scene } from "../models/Scene";
import { Toy } from "../models/Toy";

/**
 * Binds grid and toy objects into a React state so that actions will be reflected by UI updates
 */
export function useScene(grid: Grid, toy?: Toy): SceneController {
  const [scene, updateToy] = useReducer(
    (scene: Scene, toy: Toy | undefined) => new Scene(scene.grid, toy),
    new Scene(grid, toy)
  );

  return useMemo(
    () => ({
      place: (x, y, f) => {
        const toy = scene.place(x, y, f);
        updateToy(toy);
      },
      move: () => {
        const toy = scene.toy?.move(scene.grid);
        updateToy(toy);
      },
      left: () => {
        const toy = scene?.toy?.left();
        updateToy(toy);
      },
      right: () => {
        const toy = scene.toy?.right();
        updateToy(toy);
      },
      report: () => scene.toy?.report(),
      grid: scene.grid,
      toy: scene.toy,
    }),
    [scene]
  );
}
