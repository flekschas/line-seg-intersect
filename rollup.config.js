import { terser } from "rollup-plugin-terser";
import buble from "rollup-plugin-buble";

const config = (file, format, plugins) => ({
  input: "index.js",
  output: {
    name: "line-seg-intersect",
    format,
    file
  },
  plugins
});

export default [
  config("dist/line-seg-intersect.js", "umd", [buble()]),
  config("dist/line-seg-intersect.min.js", "umd", [buble(), terser()])
];
