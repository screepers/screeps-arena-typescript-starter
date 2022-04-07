import { getTicks } from "game/utils";

export function loop(): void {
  console.log(`The time is ${getTicks()}`);
}
