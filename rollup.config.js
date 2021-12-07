import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import globals from "rollup-plugin-node-globals";
import builtins from "rollup-plugin-node-builtins";

export default {
  input: "index.js",
  external: ["cross-fetch"],
  output: {
    name: "my-anime-list",
    format: "umd",
    file: "dist/bundle.cjs",
    globals: {
      "cross-fetch": "fetch",
    },
  },
  plugins: [resolve(), commonjs(), globals(), builtins()],
};
