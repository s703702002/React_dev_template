const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: ["react-hot-loader/patch", "./src/client/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: "pre",
        loader: "eslint-loader",
        exclude: /(node_modules|bower_components)/
      },
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
    hot: true
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
