var path = require("path");
var config = require("../config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
var webpack = require("webpack");
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

process.noDeprecation = true;

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: {
    main: "./src/product.js",
    second: "./src/group.js",
    join: "./src/join.js",
    intro: "./src/intro.js",
    first: "./src/first.js",
    common: "./src/common.js"
  },
  output: {
    path: path.join(__dirname, "../"),
    filename: "[name].js",
    publicPath:
      process.env.NODE_ENV === "production"
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(html|tpl)$/,
        loader: "html-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "url-loader?limit=20&name=images/[hash:8].[name].[ext]",
        query: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function(module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, "../node_modules")) >= 0
        );
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "manifest",
      minChunks: ["vendor"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "templates/base.html",
      inject: false,
      template: path.join(__dirname, "../templates/base.ejs"),
      chunks: ["manifest", "vendor", "common"]
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "templates/home.html",
      inject: false,
      template: path.join(__dirname, "../templates/home.ejs"),
      chunks: ["main"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "templates/second.html",
      inject: false,
      template: path.join(__dirname, "../templates/second.ejs"),
      chunks: ["second"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "templates/join.html",
      inject: false,
      template: path.join(__dirname, "../templates/join.ejs"),
      chunks: ["join"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "templates/intro.html",
      inject: false,
      template: path.join(__dirname, "../templates/intro.ejs"),
      chunks: ["intro"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "templates/first.html",
      inject: false,
      template: path.join(__dirname, "../templates/first.ejs"),
      chunks: ["first"]
    }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      filename: "templates/header.html",
      inject: false,
      template: path.join(__dirname, "../templates/header.ejs"),
      chunks: ["common"]
    }),
    new HtmlWebpackHarddiskPlugin()
  ]
};
