import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json";

export default {
  input: packageJson.source,
  plugins: [
    peerDepsExternal(),
    json(),
    svgr({ icon: true }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: './dist/types',
      rootDir: './src',
      emitDeclarationOnly: true,
    }),
  ],
  output: [
    {
      dir: 'dist',
      format: "esm",
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    }
  ],
};
