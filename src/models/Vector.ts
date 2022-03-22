export class Vector {
  constructor(public readonly x: number, public readonly y: number) {}

  static add(v1: Vector, v2: Vector) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static equals(v1: Vector, v2: Vector) {
    return v1.x === v2.x && v1.y === v2.y;
  }
}
