const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
require('dotenv/config.js');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
    clientLogLevel: 'silent',
    inline: true,
    open: true,
    port: process.env.PORT || 4000,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public/index.html"), filename: 'index.html' }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new Dotenv(
      {
        path: './.env',
        safe: true,
        systemvars: true
      }
    )

  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]

      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  performance: {
    hints: false
  },
};