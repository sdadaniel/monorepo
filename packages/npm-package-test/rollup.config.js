const packageJson = require("./package.json");
const typescript = require("@rollup/plugin-typescript");

module.exports.default = [
  {
    input: "src/index.ts",
    output: {
      file: "bundle.js",
      format: "cjs",
    },
    output: [
      {
        file: packageJson.main,
        format: "cjs",
      },
      {
        file: packageJson.module,
        format: "esm",
      },
    ],
    plugins: [typescript()],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
