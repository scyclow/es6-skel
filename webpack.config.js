var compileFiles = /\.js/;
var ignoredFolders = /node_modules/;

module.exports = {
  context: __dirname + '/src',
  entry: './scripts/index.js',

  output: {
    filename: 'index.js',
    path: __dirname + '/build'
  },

  devtool: 'source-map',

  eslint: {
    configFile: __dirname + '/.eslintrc'
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
        loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'react', 'stage-1']
        }
      }, {
        test:/\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};
