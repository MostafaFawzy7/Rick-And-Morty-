const path = require("path");
const rules = [
  {
    test: [/\.tsx?/, /\.js$/, /\.jsx$/],
    exclude: /node_modules/,
    loader: "babel-loader",
    query: {
      presets: ["@babel/env", "@babel/react"],
    },
  },
];

module.exports = {
  target: "web",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: { rules },
  resolve: { extensions: [".ts", ".tsx", ".js"] },
  devServer: {
    contentBase: "./",
    port: 5000,
  },
};
