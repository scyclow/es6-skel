var path = require('path');
var webpack = require('webpack');
var compileFiles = /\.js/;
var ignoredFolders = /node_modules/;

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/scripts/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/'
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
        test: compileFiles,
        exclude: ignoredFolders,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, {
        test:/\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
