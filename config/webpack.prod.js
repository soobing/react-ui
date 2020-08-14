const path = require('path');

const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');

const packageJson = require('../package.json');

module.exports = merge(baseConfig, {
  mode: 'production',
  devServer: {
    port: packageJson.devPort,
    historyApiFallback: true,
    stats: 'errors-warnings',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/react-ui/',
  },
});
