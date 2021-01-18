const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },

  output: {
    filename: 'scribble1.js',
    path: path.join(__dirname, 'dist'),
    library: 'scribble1'
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      }
    ]
  },
  target: 'node'
};
