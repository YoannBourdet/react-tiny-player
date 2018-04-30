const path = require('path');
const base = require('./webpack.base.config');

module.exports = Object.assign({}, base, {
  entry: './demo/components/app.jsx',
  output: {
    publicPath: '/demo/dist/',
    path: path.resolve(__dirname, 'demo', 'dist'),
    filename: 'demo.js'
  }
});
