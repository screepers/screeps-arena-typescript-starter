import { getTicks } from "game/utils";

export function isFirstTick(): boolean {
  return getTicks() === 1;
}
