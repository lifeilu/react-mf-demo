const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const moduleFederationConfig = require('./mf-config');
const mfPlugin = new ModuleFederationPlugin(moduleFederationConfig);

const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const PnpWebpackPlugin = require('pnp-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index',
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.less', '.scss'],
    modules: [ path.resolve(__dirname, '../src'), 'node_modules' ],
    alias: {
      _components: path.join(__dirname, '../src/components'),
      _images: path.join(__dirname, '../src/images'),
      _pages: path.join(__dirname, '../src/pages'),
      _util: path.join(__dirname, '../src/util'),
      _mock: path.join(__dirname, '../src/mock'),
    },
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images',
          limit: 8192,
        },
      },
    ],
  },
  plugins: [
    mfPlugin,
    new ForkTsCheckerWebpackPlugin(),
  ],
};