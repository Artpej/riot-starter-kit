const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const proxy = require('./proxy')

module.exports = {
  entry: './app/main.js',
  output: {
    path: 'build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    proxy: proxy
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
       $: 'jquery',
       jQuery: 'jquery',
       'window.jQuery': 'jquery',
       'Tether': 'tether',
       'window.Tether': 'tether'
    }),
    new ExtractTextPlugin("styles.css"),
  ],
  module: {
    loaders: [
      {
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        query: {
          type: 'es6', // transpile the riot tags using babel
          hot: true,
          debug: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000&name=images/[name].[ext]',},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader", {publicPath: ''})},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader'}
    ]
  }
};

