var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/App.jsx'),
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['es2015','react'],
          plugins: ["transform-react-jsx"],
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['es2015','react'],
          plugins: ["transform-react-jsx"],
        },
      },
    ]
  }
};

module.exports = config;
