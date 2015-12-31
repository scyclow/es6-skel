var path = require('path');
var webpack = require('webpack');
var sassPaths = require("node-neat").includePaths
  .map(sassPath => 'includePaths[]=' + sassPath)
  .join("&");

var compileFiles = /\.js/;
var ignoredFolders = /node_modules/;

var port = 3333;

module.exports = {
  devtool: 'inline-source-map',
  port: port,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/scripts/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:'+ port + '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  eslint: {
    configFile: path.join(__dirname, '.eslintrc')
  },

  module: {
    preLoaders: [
      {
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['eslint-loader']
      }
    ],
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass?' + sassPaths
      }, {
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
