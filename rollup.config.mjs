import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import svgr from "@svgr/rollup";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from './package.json' assert { type: 'json' };

export default {
  input: packageJson.source, // por ejemplo: "src/index.ts"
  output: [
    {
      file: packageJson.main, // ejemplo: "dist/index.cjs.js"
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module, // ejemplo: "dist/index.esm.js"
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),              // excluye react, react-dom, etc.
    json(),                          // permite importar JSON
    svgr({ icon: true }),            // permite importar SVG como componente React
    resolve(),                       // resuelve node_modules
    commonjs(),                      // convierte CommonJS a ESModules
    typescript({ tsconfig: "./tsconfig.json" }), // transpila TS
    terser()                         // minifica
  ]
};
