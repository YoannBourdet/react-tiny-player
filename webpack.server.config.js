const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  entry: './demo/components/app.jsx',
  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'demo.js'
  },
  resolve: {
    alias: {
      TinyPlayer: path.resolve(__dirname, 'lib')
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    publicPath: '/',
    port: 9000
  },
  plugins: [new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })]
});
