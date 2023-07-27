import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/**/*.tsx"],
  format: ["esm", "cjs"],
  dts: true,
  minify: true,
  clean: true,
  external: ["react", "utils", "react-dom"],
  ...options,
}));
