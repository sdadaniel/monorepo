const packageJson = require("./package.json");
const typescript = require("@rollup/plugin-typescript");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const dts = require("rollup-plugin-dts");
const json = require("@rollup/plugin-json");
const terser = require("@rollup/plugin-terser");

module.exports.default = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/bundle.min.js",
        format: "iife",
        name: "version",
        plugins: [terser()],
      },
    ],
    plugins: [
      // resolve(),
      // commonjs(),
      json(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  // {
  //   input: "dist/esm/types/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts.default()],
  // },
];
