"use strict";

import clear from "rollup-plugin-clear";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import fg from "fast-glob";

let targetArena = "";
if (process.argv[3] === "--config-") {
  // we running dynamic mode
  targetArena = process.argv[4] || "";
} else if (process.argv[3] === "--environment") {
  targetArena = process.env.DEST;
}

function getOptions(arenaSrc) {
  const outDir = arenaSrc.replace("src/", "dist/");

  const options = {
    input: `${arenaSrc}/main.ts`,
    external: ["game", "game/prototypes", "game/constants", "game/utils", "game/path-finder", "arena", "game/visual"], // <-- suppresses the warning
    output: {
      dir: outDir,
      format: "esm",
      entryFileNames: "[name].mjs",
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: arenaSrc,
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
      clear({ targets: targetArena === "" ? ["dist"] : [outDir] }), // If targeted build, only clear target sub-directory
      resolve({ rootDir: "src" }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" })
    ]
  };
  return options;
}

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
