/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const { resolve } = require('path');

module.exports = config => ({
  devtool: 'eval',

  entry: [
    'react-hot-loader/patch',
    './../src/js/index',
  ],

  output: {
    filename: '[name].js',
  },

  plugins: config.plugins.concat([
    new webpack.NamedModulesPlugin(), // for HMR
    new webpack.HotModuleReplacementPlugin(),
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
    rules: [{
      test: /\.(css|scss)$/,
      use: [
        'classnames-loader',
        'style-loader',
        'cache-loader',
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
