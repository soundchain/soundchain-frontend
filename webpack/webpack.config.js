/* eslint-disable import/no-extraneous-dependencies, no-console */
const { resolve, join } = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { version } = require('../package.json');
// plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nodeEnv = process.env.NODE_ENV;
const production = nodeEnv === 'production';
const envConfig = production ? require('./webpack.production.config.js') : require('./webpack.development.config');

const date = new Date();
const ymd = [date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate()].join('-');
const hms = [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()].join(':');

const buildName = `v${version} ${ymd} ${hms}`;

console.log('Building SoundChain Frontend', buildName);

const baseConfig = {
  context: resolve(__dirname, '../src'),

  entry: [
    'babel-polyfill',
    './../src/js/index',
  ],

  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /manifest.json$/,
      loader: 'file-loader?name=manifest.json!web-app-manifest-loader',
    }, {
      test: /\.json$/,
      exclude: /manifest.json$/,
      loader: 'json-loader',
    }, {
      test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
      use: 'file-loader?name=[name].[ext]?[hash]',
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/fontwoff',
    }, {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
    }, {
      test: /\.(js|jsx)$/,
      include: [
        // TODO auto detect es6 modules?
        resolve(__dirname, '../src'),
        fs.realpathSync(`${__dirname}/../node_modules/web3-redux`),
        //fs.realpathSync(`${__dirname}/node_modules/@digix/etc-redemption`),
        //fs.realpathSync(`${__dirname}/node_modules/@digix/redux-crypto-prices`),
        //fs.realpathSync(`${__dirname}/node_modules/@digix/truffle-gnosis-multisig`),
        fs.realpathSync(`${__dirname}/../node_modules/ethereumjs-tx`),
        fs.realpathSync(`${__dirname}/../node_modules/web3-provider-engine`),
      ],
      loader: 'babel-loader',
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: '../src/assets/index.html', chunksSortMode: 'dependency' }),
    new CopyWebpackPlugin([{ from: '../src/assets/favicon.png', to: 'favicon.ico' }]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      join(__dirname, '../src'),
      join(__dirname, '../node_modules'),
    ],
    alias: {
      //'@digix/spectrum': path.resolve(__dirname),
    },
  },

  resolveLoader: {
    modules: [
      'node_modules', fs.realpathSync(`${__dirname}/../node_modules/`),
    ],
  },
};

const config = Object.assign(baseConfig, envConfig(baseConfig));

module.exports = config;