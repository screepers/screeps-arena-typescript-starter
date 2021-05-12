import * as game from "/game";

function doExport(name, obj) {
  console.log(name);
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "function") {
      console.log(`export ${obj[key]}`);
    } else {
      console.log(`export const ${key} = ${JSON.stringify(obj[key])}`);
    }
  }
}
const loop = () => {
  if (getTime() == 1) {
    doExport("game", game);
  }
};
