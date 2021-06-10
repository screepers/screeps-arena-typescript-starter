/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import * as game from "game";
import { getTime } from "game/utils";

function doExport(name: any, obj: any) {
  console.log(name);
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "function") {
      console.log(`export ${obj[key]}`);
    } else {
      console.log(`export const ${key} = ${JSON.stringify(obj[key])}`);
    }
  }
}
export const loop = (): void => {
  if (getTime() === 1) {
    doExport("game", game);
  }
};
