import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "dist/cjs/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [
      dts(),
      del({
        targets: ["dist/cjs/**/*.d.ts", "dist/esm/**/*.d.ts"],
        hook: "buildEnd",
      }),
    ],
  },
];
