/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = config => ({
  devtool: '#module-inline-source-map',

  entry: [
    `webpack-dev-server/client?http://localhost:8080`,
  ].concat(config.entry),

  output: {
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
});
