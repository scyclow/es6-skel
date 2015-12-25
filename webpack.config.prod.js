var path = require('path');
var webpack = require('webpack');
var sassPaths = require("node-neat").includePaths
  .map(function(sassPath) { return 'includePaths[]=' + sassPath; })
  .join("&");

var compileFiles = /\.js/;
var ignoredFolders = /node_modules/;

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/scripts/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?' + sassPaths
      }
    ]
  }
};
