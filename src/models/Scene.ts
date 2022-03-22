import { Facing } from "./Facing";
import { Grid } from "./Grid";
import { Toy } from "./Toy";
import { Vector } from "./Vector";

export class Scene {
  constructor(public readonly grid: Grid, public readonly toy?: Toy) {}

  place(x: number, y: number, direction: Facing) {
    return new Toy(new Vector(x, y), Grid.directions[direction]);
  }
}
