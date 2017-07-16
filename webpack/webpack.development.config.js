/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { resolve } = require('path');

module.exports = config => ({
  devtool: '#module-inline-source-map',

  entry: [
    `webpack-dev-server/client?http://localhost:8080`,
  ],

  output: {
    publicPath: '/',
    filename: 'bundle.js',
  },

  plugins: config.plugins.concat([
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // for HMR
  ]),

  devServer: {
    hot: true,
    publicPath: '/',
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
    },
  },

  module: {
    loaders: [{
      test: /\.(css|scss)$/,
      use: [
        'classnames-loader',
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2,
            localIdentName: '[local]---[name]---[hash:base64:5]'
          }
        },
        'sass-loader'
      ]
    }]
  },
});
