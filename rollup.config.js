"use strict";

import clear from "rollup-plugin-clear";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import fg from "fast-glob";

const scriptLimit = 10000000; // 10mb
let cfg;
let targetArena = "";
if (process.argv[3] === "--config-") {
  // we running dynamic mode
  targetArena = process.argv[4] || "";
} else if (process.argv[3] === "--environment") {
  targetArena = process.env.DEST;
}

// if (!dest) {
//   console.log("No destination specified - code will be compiled but not uploaded");
// }
// else if ((cfg = require("./screeps.json")[dest]) == null) {
//   throw new Error("Invalid upload destination");
// }

const getOptions = arena => {
  return {
    input: `${arena}/main.ts`,
    external: ["game", "game/prototypes", "game/constants", "game/utils", "game/path-finder", "arena"], // <-- suppresses the warning
    output: {
      dir: arena.replace("src/", "dist/"),
      format: "esm",
      sourcemap: true,
      entryFileNames: "[name].mjs",
      // preserveModules: true,
      paths: path => {
        // https://rollupjs.org/guide/en/#outputpaths
        // TS requires that we use non-relative paths for these "ambient" modules
        // The game requires relative paths, so prefix all game modules with "/" in the output bundle
        if (path.startsWith("game") || path.startsWith("arena")) {
          return "/" + path;
        }
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
            if (fileName === "main.mjs" && chunkOrAsset.code && chunkOrAsset.code.length >= scriptLimit * 0.98) {
              console.log(
                `Warning: Script limit is ${scriptLimit / 1000000}mb, output is ${chunkOrAsset.code.length} bytes`
              );
            }
          }
        }
      }
    ]
  };
};

const arenas = fg.sync(`src/*arena_*${targetArena}*`, { onlyDirectories: true });
if (arenas.length === 0) {
  throw new Error("No matching arenas found in src/. Exiting");
} else {
  if (targetArena === "") {
    console.log(`No arena targeted. Building all ${arenas.length} arenas.`);
  } else {
    console.log(`Buidling ${arenas.length} arena(s) for target "${targetArena}"`);
  }
}

export default arenas.map(getOptions);
