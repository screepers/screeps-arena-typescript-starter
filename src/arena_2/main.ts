import { getTime } from "game/utils";

export function loop(): void {
  console.log(`The time is ${getTime()}`);
}
