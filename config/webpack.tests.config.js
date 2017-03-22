const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './app/tests.js',
  output: {
    path: 'build',
    publicPath: '/',
    filename: 'tests.js'
  },
  externals: [nodeExternals({
    whitelist: [/^riot/]
  })],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
       $: 'jquery',
       jQuery: 'jquery',
       'window.jQuery': 'jquery',
       'Tether': 'tether',
       'window.Tether': 'tether'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        query: {
          type: 'es6' // transpile the riot tags using babel
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};


