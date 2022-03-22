import { Facing } from "../models/Facing";
import css from "./Toy.module.css";

interface Props {
  facing: Facing;
}

const chars: Record<Facing, string> = {
  [Facing.NORTH]: "^",
  [Facing.EAST]: ">",
  [Facing.SOUTH]: "v",
  [Facing.WEST]: "<",
};

export function Toy({ facing }: Props) {
  return <div className={css.toy}>{chars[facing]}</div>;
}
