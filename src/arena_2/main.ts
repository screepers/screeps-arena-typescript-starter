import { getTime } from "game";
import { foo } from "./foo";
import { Kernel } from "../os/kernel";
import { ErrorMapper } from "../utils/ErrorMapper";

Kernel.init();

function unwrappedLoop(): void {

  console.log(`The time is ${getTime()}`);
  console.log(foo);
}

const loop = ErrorMapper.wrapLoop(unwrappedLoop);

export {
  loop,
  unwrappedLoop
}
