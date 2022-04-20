import { hello } from "common/hello";
import { isFirstTick } from "common";

// This example shows how to import shared functionality that can be used across arenas
export function loop(): void {
  if (isFirstTick()) {
    console.log(hello());
  }
}
