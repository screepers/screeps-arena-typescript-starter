import { getTime } from "game";
import { foo } from "./foo";
import { Kernel } from "../os";

Kernel.init();

export function loop(): void {

  console.log(`The time is ${getTime()}`);
  console.log(foo);
}
