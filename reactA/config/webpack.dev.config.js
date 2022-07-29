const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.config.js');
const port = require('../../port.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: port.ReactAPort,
    compress: true,
  },
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false,
    }),
  ],
});
