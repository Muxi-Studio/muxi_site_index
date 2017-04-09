var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'group.js': ['./src/group.js', 'webpack-hot-middleware/client'],
    'products.js': ['./src/products.js', 'webpack-hot-middleware/client']
  },
  output: {
      path: '/',
      publicPath: 'http://localhost:3000/dist/',
      filename: '[name]'
  },
  module: {
      loaders: [{
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=20&name=images/[hash:8].[name].[ext]'
      }]
  },
  resolve: {
      extensions: ['', '.js','.scss'],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
