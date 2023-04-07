module.exports = {
  ...require("@byteatatime/prettier-config"),
  plugins: ["prettier-plugin-svelte"],
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
