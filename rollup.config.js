import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import { config } from "dotenv";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";

config();

export default {
  input: packageJson.source,
  plugins: [peerDepsExternal(), json(), svgr({ icon: true }), resolve(), commonjs(), typescript()],
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
  ],
};
