const path = require("path");
const webpack = require("webpack");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./src/client/index.js"],
  devtool: "cheap-module-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    index: "", // specify to enable root proxying
    proxy: {
      context: () => true,
      target: "http://localhost:5000"
    },
    open: true,
    hot: true
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      context: "src",
      extensions: [".jsx", ".js"]
    })
  ]
};
