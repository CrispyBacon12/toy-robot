import { Facing } from "../models/Facing";
import { SceneObjects } from "./SceneObjects";

export interface SceneController extends SceneObjects {
  place(x: number, y: number, f: Facing): void;
  move(): void;
  left(): void;
  right(): void;
  report(): void;
}
