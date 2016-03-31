var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var compileFiles = /\.js$/;
var ignoredFolders = /node_modules/;

var entry = [
    'webpack-hot-middleware/client?reload=true',
    './client.js'
  // FIXME -- see below. also, this sucks.
  // just use all scss files as entry points.
  ].concat(glob.sync('./src/**/*.scss').map(p => '.' + p.slice(5)))

module.exports = {
  devtool: 'source-map',

  context: path.join(__dirname, 'src'),
  entry: entry,

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'build')
  },

  plugins: [
    new ExtractTextPlugin('main.css'),
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
        test: /\.scss$/,
        exclude: ignoredFolders,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          // FIXME -- use css modules
          // 'css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded&sourceMap'
          'css!sass?outputStyle=expanded&sourceMap'
        )
      },
      {
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['babel']
      }
    ]
  }
};
