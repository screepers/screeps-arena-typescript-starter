"use strict";

import clear from "rollup-plugin-clear";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import multiInput from "rollup-plugin-multi-input";

let cfg;
const dest = process.env.DEST;
if (!dest) {
  console.log("No destination specified - code will be compiled but not uploaded");
} else if ((cfg = require("./screeps.json")[dest]) == null) {
  throw new Error("Invalid upload destination");
}

export default {
  input: "src/**/*.ts",
  external: ["game", "arena"], // <-- suppresses the warning
  output: {
    dir: "dist/",
    format: "esm",
    sourcemap: true,
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
    multiInput({ relative: 'src/' })
  ]
};
