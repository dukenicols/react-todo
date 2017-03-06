// import webpack
var webpack = require('webpack');

module.exports = {
  // Which file types are in our project, and where they are located
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules']
  },
  module: {
    // How to process project files with loaders
    loaders: [
      // Process any .js and .jsx file with Babel
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader']
      }
    ]
  },
  // Which file is the entry point to our application
  entry: [
    'index.jsx'
  ],
  // Where to output the final bundled code to
  output: {
    filename: 'app.js',
    path: 'dist'
  }
};
