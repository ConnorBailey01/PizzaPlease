const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [{ test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }],
  },
};
