import { Facing } from "./Facing";
import { Vector } from "./Vector";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export class Grid {
  static readonly directions: Record<Facing, Vector> = {
    [Facing.NORTH]: new Vector(0, 1),
    [Facing.SOUTH]: new Vector(0, -1),
    [Facing.EAST]: new Vector(1, 0),
    [Facing.WEST]: new Vector(-1, 0),
  };

  static toFacing(cardinal: Vector) {
    const direction = Object.entries(Grid.directions).find(([_, direction]) =>
      Vector.equals(direction, cardinal)
    );
    if (!direction) {
      throw new Error("That's not a cardinal direction");
    }

    return direction[0] as unknown as Facing;
  }

  constructor(public readonly bounds: Vector) {}

  clamp(vector: Vector) {
    return new Vector(
      clamp(vector.x, 0, this.bounds.x),
      clamp(vector.y, 0, this.bounds.y)
    );
  }
}
