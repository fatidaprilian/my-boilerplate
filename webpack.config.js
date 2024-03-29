// File webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/main.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      { test: /\.css$/, use:['style-loader', 'css-loader']}  
    ]
  }  
}