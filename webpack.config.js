var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        {
          test: /\.js$/,
          loader: 'babel',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  },
  {
    entry: './public/css/style.scss',
    output: {
      filename: './public/css/style.css'
    },
    resolve: {
      extensions: ['', '.scss']
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract("style", "css-loader!sass")

        }
      ]
    },
    plugins: [
      new ExtractTextPlugin("./app.build/app.build.css")
    ]
  },
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
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    }
  }
];
