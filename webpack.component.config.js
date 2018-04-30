const path = require('path');
const base = require('./webpack.base.config');

module.exports = Object.assign({}, base, {
  entry: './component/TinyPlayer.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  }
});
