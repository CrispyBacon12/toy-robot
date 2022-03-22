import { Grid } from "./Grid";
import { Vector } from "./Vector";

export class Toy {
  constructor(
    public readonly position: Vector,
    public readonly direction: Vector
  ) {}

  move(grid: Grid) {
    const { position, direction } = this;
    const newPosition = Vector.add(position, direction);
    return new Toy(grid.clamp(newPosition), this.direction);
  }

  right() {
    const { x, y } = this.direction;
    return new Toy(this.position, new Vector(y, -x));
  }

  left() {
    const { x, y } = this.direction;
    return new Toy(this.position, new Vector(-y, x));
  }

  report() {
    console.log({
      x: this.position.x,
      y: this.position.y,
      f: Grid.toFacing(this.direction),
    });
  }
}
