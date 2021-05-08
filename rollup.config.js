"use strict";

import clear from "rollup-plugin-clear";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import fg from "fast-glob";

const scriptLimit = 10000000; // 10mb
let cfg;
const dest = process.env.DEST;
if (!dest) {
  console.log("No destination specified - code will be compiled but not uploaded");
} else if ((cfg = require("./screeps.json")[dest]) == null) {
  throw new Error("Invalid upload destination");
}

const getOptions = (arena) => {
  return {
    input: `${arena}/main.ts`,
    external: ["game", "arena"], // <-- suppresses the warning
    output: {
      dir: arena.replace("src/","dist/"),
      format: "esm",
      sourcemap: true,
      entryFileNames: "[name].mjs",
      //preserveModules: true,
      paths: {
        // https://rollupjs.org/guide/en/#outputpaths
        game: "/game",
        arena: "/arena"
      }
    },

    plugins: [
      clear({ targets: ["dist"] }),
      resolve({ rootDir: "src" }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      {
        generateBundle(_options, bundle) {
          for (const [fileName, chunkOrAsset] of Object.entries(bundle)) {
            if (fileName === "main.mjs" && chunkOrAsset.code && chunkOrAsset.code.length >= scriptLimit*.98) {
              console.log(`Warning: Script limit is ${scriptLimit/1000000}mb, output is ${chunkOrAsset.code.length} bytes`);
            }
          }
        }
      }
    ]
  };
}

const arenas = fg.sync("src/*arena_*", { onlyDirectories: true, });
if (arenas.length === 0){
  throw new Error("No arenas found in `src/`. Exiting");
}

export default arenas.map(getOptions);
