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
  {
    test: /\.(sa|sc|c)ss?/,
    use: [
      "style-loader",
      MiniCSSExtractPlugin.loader,
      "css-loader",
      "scss-loader",
      "sass-loader",
    ],
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
