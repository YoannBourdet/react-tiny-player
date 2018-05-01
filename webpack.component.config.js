const path = require('path');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const base = require('./webpack.base.config');

module.exports = merge(base, {
  entry: './lib/',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'tiny-player.css', allChunks: true })
  ]
});
