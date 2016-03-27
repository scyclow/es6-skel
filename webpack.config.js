var path = require('path');
var webpack = require('webpack');
var compileFiles = /\.js$/;
var ignoredFolders = /node_modules/;

module.exports = {
  devtool: 'source-map',

  context: path.join(__dirname, 'src'),
  entry: [
    './client.js',
    'webpack-hot-middleware/client'
  ],

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build')
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    preLoaders: [
      {
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['eslint']
      }
    ],

    loaders: [
      {
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['babel']
      }
    ]
  }
};
