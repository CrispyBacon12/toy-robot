import { Grid } from "../models/Grid";
import { Toy } from "../models/Toy";

export interface SceneObjects {
  toy?: Toy;
  grid: Grid;
}
