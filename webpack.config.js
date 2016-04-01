var path = require('path');
var webpack = require('webpack');
var compileFiles = /\.js$/;
var ignoredFolders = /node_modules/;

var entry = [
  'webpack-hot-middleware/client?reload=true',
  './client.js'
];

module.exports = {
  devtool: 'source-map',

  context: path.join(__dirname, 'src'),
  entry: entry,

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build')
  },

  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
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
