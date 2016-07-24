var path = require("path");
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    entry: './public/js/app.js',
    output: {
      filename: './public/js/app.build.js',
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    resolveLoader: {
      root: path.join(__dirname, 'node_modules')
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    }
  },
  // {
  //   entry: './app/app.scss',
  //   output: {
  //     filename: './app.build/app.build.styles.js'
  //   },
  //   resolve: {
  //     extensions: ['', '.scss']
  //   },
  //   module: {
  //     loaders: [
  //       {
  //         test: /\.scss$/,
  //         loader: ExtractTextPlugin.extract("style", "css!sass")
  //       }
  //     ]
  //   },
  //   plugins: [
  //     new ExtractTextPlugin("./app.build/app.build.css")
  //   ]
  // },
  {
    entry: './public/js/specs.js',
    output: {
      filename: './specs/specs.build.js'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader' }
      ]
    }
  }
];
