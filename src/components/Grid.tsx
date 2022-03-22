import css from "./Grid.module.css";
import { Toy } from "./Toy";
import { SceneObjects } from "./SceneObjects";
import { Vector } from '../models/Vector';
import { Grid as GridModel } from '../models/Grid';

interface Props extends SceneObjects {
  debug: boolean;
}

export function Grid({ grid, toy, debug }: Props) {
  const rows = new Array<void>(grid.bounds.x + 1).fill();
  const columns = new Array<void>(grid.bounds.y + 1).fill();

  return (
    <div className={css.scene}>
      {rows.map((_, y) => (
        <div key={y} className={css.row}>
          {columns.map((_, x) => (
            <div key={x} className={css.cell}>
              {debug && (
                <span className={css.coordinate}>
                  ({x}, {y})
                </span>
              )}
              {toy && Vector.equals(toy.position, new Vector(x, y)) && <Toy facing={GridModel.toFacing(toy.direction)} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
